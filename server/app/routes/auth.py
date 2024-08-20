from flask import jsonify, request, Blueprint
from ..extensions import db
from ..models import User
import requests
import bcrypt

auth_bp = Blueprint('auth', __name__)


@auth_bp.route('/signup', methods=['POST'])
def signup_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    confirm_password = data.get('confirmPassword')
    email = data.get('email')

    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"error": "User already exists"}), 400
    
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    new_user = User(username, email, hashed_password)

    try:
        db.session.add(new_user)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500
    
    return jsonify({"message": "User created", "debug": f"User created: {username}, {email}"}), 201


#@auth_bp.route('/login', methods=['POST'])
##def login_user():
    #data = request.get_json()
    #username = data.get('username')
    #password = data.get('password')
    #email = data.get('email')


#check for existing user
@auth_bp.route('/checkuser', methods=['POST'])
def checkExistingUsername():
    data = request.json
    username = data.get('username')

    user = User.query.filter_by(username=username).first()

    if user:
        return jsonify({"exists": True})
    else:
        return jsonify({"exists": False})

@auth_bp.route('/checkemail', methods=['POST']) 
def checkExistingEmail():
    data = request.json
    email = data.get('email')

    email = User.query.filter_by(email=email).first()

    if email:
        return jsonify({"exists": True})
    else:
        return jsonify({"exists": False})