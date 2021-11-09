from flask import Flask, render_template, escape, request, jsonify, make_response, redirect, url_for, abort,send_from_directory, Markup
from werkzeug.utils import secure_filename
from . import main

from flask import Blueprint
import pyodbc
import re
import os
import json
import pickle
import pandas as pd
from sys import argv
import ast
from flask_wtf import FlaskForm 

try:
    from configparser import ConfigParser
except ImportError:
    from ConfigParser import ConfigParser  # ver. < 3.0
        
# instantiate
config = ConfigParser()
        
# parse existing file
config.read('test.ini')

host='172.27.13.23'
user = 'sa'
password = 'Iogear1234'
db = 'TPG'

basedir = os.path.abspath(os.path.dirname(__file__))

##TPG_UPLOADED_PATH=os.path.join(basedir, 'uploads')

DROPZONE_ALLOWED_FILE_CUSTOM=True
DROPZONE_ALLOWED_FILE_TYPE='.pdf'
DROPZONE_MAX_FILE_SIZE=30
DROPZONE_MAX_FILES=30
DROPZONE_UPLOAD_MULTIPLE=True
DROPZONE_INVALID_FILE_TYPE="Invalid Type"
DROPZONE_REDIRECT_VIEW='uploadcomplete'  # set redirect view
    
### Additions 11/03/21    


if not os.path.isdir("uploads"):  # just for this example
    os.makedirs("uploads")


       
UPLOAD_PATH = 'C:/uploads' 

   
    
#--------------------------------------------------------------------------
#--- Takes the given filename and returns a list of dictionaries.
#---
#--- Each dictionary has the keys "fullname", "name", "path", "type", and
#--- "size". "type" is the file extension, lowercase, with no dot. (For
#--- example, "png".) If "name" is empty, entry is a directory.
#---
#--- The filetypes parameter is for specifying a list of acceptable
#--- extensions. Files not having these extensions will be ignored.
#--- This can be either a list like ["jpg","png","gif"] or a
#--- comma-delimited string like "jpg,png,gif". Wildcards are NOT supported.
#---
#--- Simple sample:
#--- print( getfilelisting("myfile.zip") )
#---
#--- Version 1.1.1

def getziplisting(filename, filetypes=None):

    import os
    import zipfile
    
    result = []
    if type(filetypes) is str:
        filetypes = filetypes.split(",")
        
    if type(filetypes) is list:
        for i in range(0, len(filetypes) ):
            filetypes[i] = filetypes[i].lower().strip()
    
    with zipfile.ZipFile(filename) as zip:
    
        for i in zip.filelist:

            isok = False
            newentry = {}
            
            newentry["fullname"] = i.filename
            newentry["name"] = os.path.basename ( i.filename )
            newentry["path"] = os.path.dirname ( i.filename )
            newentry["type"] = os.path.splitext( i.filename )[1].lower()
            newentry["type"] = newentry["type"].replace(".", "")
            newentry["size"] = i.file_size

            if filetypes is None:
                isok = True
            else:
                if newentry["type"] in filetypes:
                    isok = True
                    
            #--- If the file's ok to add to the return list, do so.
            if isok==True: result.append( newentry )

    return result
#--------------------------------------------------------------------------
    

#--------------------------------------------------------------------------
#--- Unzips a zip file to a given folder.
#---
#--- The filetypes parameter is for specifying a list of acceptable
#--- extensions. Files not having these extensions will be ignored.
#--- This can be either a list like ["jpg","png","gif"] or a
#--- comma-delimited string like "jpg,png,gif". Wildcards are NOT supported.
#---
#--- Subfolders will be created automatically as needed, depending on zip
#--- contents.
#---
#--- Returns a list of the newly unzipped files.
#--- 
#--- Version 1.1.1

def unzipfile(filename, unzipto=".", filetypes=None):

    import os
    import zipfile
    
    result = []
   
    if type(filetypes) is str:
        filetypes = filetypes.split(",")

    if type(filetypes) is list:
        for i in range(0, len(filetypes) ):
            filetypes[i] = filetypes[i].lower().strip()

    with zipfile.ZipFile(filename) as zip:

        for file in zip.filelist:
            isok = False
            newtype = os.path.splitext( file.filename )[1].lower()
            newtype = newtype.replace(".", "")
            
            #--- If filetypes is None, don't check the file extension.
            if filetypes is None:
                isok = True
            else:
                #--- filetypes is not None, check extension
                if newtype in filetypes:
                    isok = True

            #--- If the file's ok to extract, do so.
            if isok==True:
                zip.extract(file, unzipto)
                result.append(file.filename)
            
    return result
#--------------------------------------------------------------------------


#--------------------------------------------------------------------------
#---
#--- Returns the result from getziplisting as a string with an HTML
#--- table

def ziplisting_to_table(ziplisting):

    filecount = 0
    dircount  = 0
    result = ""
    
    result="<TABLE>\n"
    
    for thisdict in ziplisting:
        result = result + "    <TR>\n"
        for thiskey in thisdict:
            if thiskey=="name":
                if thisdict[thiskey]=="":
                    dircount = dircount + 1
                else:
                    filecount = filecount + 1
            #--- fullname, name, path, type, size
            if thiskey in ["name", "type", "size"]:
                result = result + "        <TD>{}</TD>\n".format( thisdict[thiskey] )
            #result = result + "        <TD>{}</TD>\n".format( thisdict[thiskey] )
        result = result + "    </TR>\n"
        
    result = result + "</TABLE>"
    result = "Files: {}<BR>\nFolders: {}<BR>\n".format(filecount, dircount) + result
    
    return result
#--------------------------------------------------------------------------


#--------------------------------------------------------------------------
#---
#--- Returns the result from unzipfile as a string with an HTML
#--- table

def unzipfile_to_table(unziplist):

    filecount = 0
    dircount  = 0
    result = ""
    
    result="<TABLE>\n"
    
    for thisfile in unziplist:
        if thisfile[-1:]=="/":
            dircount = dircount +1
        else:
            filecount = filecount + 1

        result = result + "    <TR><TD>{}</TD></TR>\n".format(thisfile)
        
    result = result + "</TABLE>"
    result = "Files: {}<BR>\nFolders: {}<BR>\n".format(filecount, dircount) + result
    
    return result
#--------------------------------------------------------------------------
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
### End Additions 11/03/21    
@main.route('/')
def home():
    return render_template('page-login.html')
    
    
### EXAMPLE PAGE RENDERINGS START ###

# Render app.html   
@main.route('/app.html')
def apppage():
    return render_template('app.html')  
    
# Render base.html   
@main.route('/base.html')
def basepage():
    return render_template('base.html')  
    
# Render blank-page.html   
@main.route('/blank-page.html')
def blankpage():
    return render_template('blank-page.html')    
    
# Render bootstrap-components.html   
@main.route('/bootstrap-components.html')
def bootstrapcomponents():
    return render_template('bootstrap-components.html')    

# Render charts.html    
@main.route('/charts.html')
def charts():
    return render_template('charts.html')    

# Render dashboard.html 
@main.route('/dashboard.html')
def dashboard():
    return render_template('dashboard.html')  

# Render docs.html 
@main.route('/docs.html')
def docs():
    return render_template('docs.html')  

# Render eob-835-home.html 

@main.route('/eob-835-home.html')
def index():
    
    eob_db_data = eob_db_retrieve()
    banding_db_data = banding_db_retrieve()
    ev_db_data = ev_db_retrieve()
    generate_db_data = generate_db_retrieve()
    
    
    
    
    return render_template('eob-835-home.html', row_data="", column_names="", df="", eob_db_data=eob_db_data[0],banding_db_data=banding_db_data[0],ev_db_data=ev_db_data[0],generate_db_data=generate_db_data[0])

@main.route('/upload-files', methods=['GET','POST'])
def upload_files():
   
    if request.method == 'POST':
       name = request.form.get('fileinfo')
       
       
       file = request.files['file']
       fname = secure_filename(file.filename)
       file.save('uploads/' + fname)
       path = 'uploads/' + fname
        # do the processing here and save the new file in uploads/
       #result = unzipfile(path,'processing')
       print (path)        
       result = getziplisting(path)
       result = ziplisting_to_table(result) 
        
       #print(result)
            
       return result 
   

@main.route('/eob_db_retrieve', methods=['GET','POST'])
def eob_db_retrieve():
   
    conn = pyodbc.connect(Driver='{ODBC Driver 17 for SQL Server}',server='denialmanager.database.windows.net', user='denialmanageradmin', password='Iogear1234', database='eobto835')
    cur = conn.cursor()
    cur.execute("SELECT DISTINCT COUNT(EOB_ID) FROM EOB_835_ENVELOPE_BI")
    eob_db_data = cur.fetchall()    
    cur.close()
    return eob_db_data 
    
@main.route('/banding_db_retrieve', methods=['GET','POST'])
def banding_db_retrieve():
   
    conn = pyodbc.connect(Driver='{ODBC Driver 17 for SQL Server}',server='denialmanager.database.windows.net', user='denialmanageradmin', password='Iogear1234', database='eobto835')
    cur = conn.cursor()
    cur.execute("SELECT COUNT(DISTINCT CLM_CLMCTRLNO) FROM EOB_835_CLAIM WHERE CLM_ENVELOPEID IN (SELECT EOB_ID FROM EOB_835_ENVELOPE_BI) AND CLM_CLMCTRLNO <> ''")
    banding_db_data = cur.fetchall()    
    cur.close()
    return banding_db_data     

@main.route('/ev_db_retrieve', methods=['GET','POST'])
def ev_db_retrieve():
   
    conn = pyodbc.connect(Driver='{ODBC Driver 17 for SQL Server}',server='denialmanager.database.windows.net', user='denialmanageradmin', password='Iogear1234', database='eobto835')
    cur = conn.cursor()
    cur.execute("SELECT DISTINCT COUNT(EOB_ID) FROM EOB_835_ENVELOPE_BI WHERE EOB_STATUS = 'Automated'")
    ev_db_data = cur.fetchall()    
    cur.close()
    return ev_db_data    

@main.route('/generate_db_retrieve', methods=['GET','POST'])
def generate_db_retrieve():
   
    conn = pyodbc.connect(Driver='{ODBC Driver 17 for SQL Server}',server='denialmanager.database.windows.net', user='denialmanageradmin', password='Iogear1234', database='eobto835')
    cur = conn.cursor()
    cur.execute("SELECT DISTINCT COUNT(EOB_ID) FROM EOB_835_ENVELOPE_BI WHERE EOB_STATUS = 'Automated'")
    generate_db_data = cur.fetchall()    
    cur.close()
    return generate_db_data    





    
# Render form-components.html 
@main.route('/form-components.html')
def formcomponents():
    return render_template('form-components.html')  

# Render form-custom.html 
@main.route('/form-custom.html')
def formcustom():
    return render_template('form-custom.html')
    
# Render form-notifications.html 
@main.route('/form-notifications.html')
def formnotifications():
    return render_template('form-components.html')  
    
# Render form-samples.html 
@main.route('/form-samples.html')
def formsamples():
    return render_template('form-samples.html')  

# Render home.html   
@main.route('/home.html')
def homepage():
    return render_template('home.html')  

# Render viewer.html   
@main.route('/viewer.html')
def viewerpage():
   
    # Load the batch_dictionary from a file path
    bd_input_file = open('app/static/pkl/batch_dictionary.pkl', 'rb')
    bd_dict = pickle.load(bd_input_file)
  
    # Load the image_find_dictionary.pkl from a file path
    img_input_file = open('app/static/pkl/image_find_dict.pkl', 'rb')
    img_dict = pickle.load(img_input_file)
  
    

    return render_template('viewer.html', bd_dict=bd_dict, img_dict=img_dict)  
      

# Render image-manager.html   
@main.route('/test2.html')
def test2page():
    return render_template('test2.html')  


# Render page-calendar.html 
@main.route('/page-calendar.html')
def pagecalendar():
    return render_template('page-calendar.html')  
    
# Render page-error.html 
@main.route('/page-error.html')
def pageerror():
    return render_template('page-error.html')
    
# Render page-invoice.html 
@main.route('/page-invoice.html')
def pageinvoice():
    return render_template('page-invoice.html')  

# Render page-lockscreen.html 
@main.route('/page-lockscreen.html')
def pagelockscreen():
    return render_template('page-lockscreen.html')
    
# Render page-login.html 
@main.route('/page-login.html')
def pagelogin():
    return render_template('page-login.html')
    
# Render page-mailbox.html 
@main.route('/page-mailbox.html')
def pagemailbox():
    return render_template('page-mailbox.html')
    
# Render page-user.html 
@main.route('/page-user.html')
def pageuser():
    return render_template('page-user.html')
    
# Render table-basic.html 
@main.route('/table-basic.html')
def tablebasic():
    return render_template('table-basic.html')
    
# Render table-data-table.html 
@main.route('/table-data-table.html')
def tabledatatable():
    return render_template('table-data-table.html')  

# Render claim-detail.html 
@main.route('/claim-detail.html')
def claimdetailpage():
    return render_template('claim-detail.html')  
    
    
# Render dms-mode-1.html 
@main.route('/dms-mode-1.html')
def dms1page():
    return render_template('dms-mode-1.html')  
    
# Render dms-mode-2.html 
@main.route('/dms-mode-2.html')
def dms2page():
    return render_template('dms-mode-2.html')  
    
# Render tpg.html 
@main.route('/tpg.html')
def tpgpage():
    return render_template('tpg.html')  
    
# Render tpg.html 
@main.route('/tpg-upload.html')
def tpguploadpage():
    return render_template('tpg-upload.html')  
    

# Render tpg.html 
@main.route('/tpg-batch-status.html')
def tpgbatchstatuspage():
    
    conn = pyodbc.connect(Driver='{ODBC Driver 17 for SQL Server}',server='172.27.13.23', user='sa', password='Iogear1234', database='TPG')
    cur = conn.cursor()
    cur.execute("SELECT CT01_BATCHNAME, CT01_NUMCLAIMS, CT01_CHECKOUTBY, CT01_BSTEPID FROM CLAIMX_CT01")
    data = cur.fetchall()    
    
    return render_template('tpg-batch-status.html', data=data)  
  


@main.route('/upload-complete')
def uploadcomplete():
    return '<h1>The Redirected Page</h1><p>Upload completed.</p>'
    
# Render ui-cards.html 
@main.route('/ui-cards.html')
def uicards():
    return render_template('ui-cards.html')
    
# Render widgets.html 
@main.route('/widgets.html')
def widgets():
    return render_template('widgets.html')  