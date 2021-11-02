from flask import Flask
from flask_socketio import SocketIO
from flask_dropzone import Dropzone
import os


socketio = SocketIO()
dropzone = Dropzone()


def create_app(debug=True):
    """Create an application."""
    app = Flask(__name__)
    app.debug = debug
    app.config['SECRET_KEY'] = 'gjr39dkjn344_!67#'
    
    
    
    
    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    socketio.init_app(app)
    dropzone.init_app(app)
    
    return app
    

