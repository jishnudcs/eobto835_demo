from flask import session, request
from flask_socketio import SocketIO, emit, join_room, leave_room, close_room, rooms, disconnect
from .. import socketio
import os, time
from threading import Lock
import re

thread = None
thread_lock = Lock()




path_to_watch = "/opt/cirrus_app/app/main/uploads"




@socketio.on('joined', namespace='/chat')
def joined(message):
    """Sent by clients when they enter a room.
    A status message is broadcast to all people in the room."""
    room = session.get('room')
    join_room(room)
    emit('status', {'msg': session.get('name') + ' has entered the room.'}, room=room)


@socketio.on('text', namespace='/chat')
def text(message):
    """Sent by a client when the user entered a new message.
    The message is sent to all people in the room."""
    room = session.get('room')
    emit('message', {'msg': session.get('name') + ':' + message['msg']}, room=room)


@socketio.on('left', namespace='/chat')
def left(message):
    """Sent by clients when they leave a room.
    A status message is broadcast to all people in the room."""
    room = session.get('room')
    leave_room(room)
    emit('status', {'msg': session.get('name') + ' has left the room.'}, room=room)

@socketio.on('my_event', namespace='/test')
def test_message(message):
    timestamp = time.strftime('%H:%M:%S')
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response', {'data': 'You entered: ', 'data2': message['data'], 'data3':'', 'timestamp': timestamp})
    if re.match(r'what is good in life?', message['data']):
        emit('my_response', {'data': 'To crush your enemies, see them driven before you, and to hear the lamentations of their women', 'data2': '', 'data3':'', 'timestamp': timestamp})
    else:
        emit('my_response', {'data': 'I did not understand: ', 'data2': message['data'], 'data3':'', 'timestamp': timestamp})


@socketio.on('my_broadcast_event', namespace='/test')
def test_broadcast_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         broadcast=True)


@socketio.on('join', namespace='/test')
def join(message):
    join_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': 'In rooms: ' + ', '.join(rooms()),
          'count': session['receive_count']})


@socketio.on('leave', namespace='/test')
def leave(message):
    leave_room(message['room'])
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': 'In rooms: ' + ', '.join(rooms()),
          'count': session['receive_count']})


@socketio.on('close_room', namespace='/test')
def close(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response', {'data': 'Room ' + message['room'] + ' is closing.',
                         'count': session['receive_count']},
         room=message['room'])
    close_room(message['room'])


@socketio.on('my_room_event', namespace='/test')
def send_room_message(message):
    session['receive_count'] = session.get('receive_count', 0) + 1
    emit('my_response',
         {'data': message['data'], 'count': session['receive_count']},
         room=message['room'])


@socketio.on('disconnect_request', namespace='/test')
def disconnect_request():
    @copy_current_request_context
    def can_disconnect():
        disconnect()

    session['receive_count'] = session.get('receive_count', 0) + 1
    # for this emit we use a callback function
    # when the callback function is invoked we know that the message has been
    # received and it is safe to disconnect
    emit('my_response',
         {'data': 'Disconnected!', 'count': session['receive_count']},
         callback=can_disconnect)


@socketio.on('my_ping', namespace='/test')
def ping_pong():
    emit('my_pong')


@socketio.on('connect', namespace='/test')
def test_connect():
    timestamp = time.strftime('%H:%M:%S')
    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(background_thread)
    emit('my_response', {'data': '-----------------------------------', 'data2': '', 'data3': '', 'timestamp': timestamp})        
    emit('my_response', {'data': 'Connected to Ctrl_WatchDog at ', 'data2': '10.100.1.119', 'data3': '', 'timestamp': timestamp})
    emit('my_response', {'data': 'Watching folder path: ', 'data2': str(path_to_watch), 'data3': '', 'timestamp': timestamp})
    emit('my_response', {'data': '-----------------------------------', 'data2': '', 'data3': '', 'timestamp': timestamp})        
    


@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected', request.sid)