from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from ..instance.config import Config
from .extensions import db, migrate
#from .routes import routes
from .routes.anime import anime_bp
from .routes.auth import auth_bp
from .models import User
import os 

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)


    #blueprints here
    #blueprints can replace views.py as its a way to modularize it
    #for route in routes:
        #app.register_blueprint(route)
    
    app.register_blueprint(anime_bp, url_prefix='/anime')
    app.register_blueprint(auth_bp, url_prefix='/auth')


    return app



