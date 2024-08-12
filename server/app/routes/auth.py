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

    if not username or not password or not confirm_password or not email:
        return jsonify({"error": "Empty fields exist"}), 400
    
    if password != confirm_password:
        return jsonify({"error": "Passwords need to match"}), 400
    
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"error": "User already exists"}), 400
    
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    new_user = User(username, email, hashed_password)

    db.session.add(new_user)
    db.session.commit()
    

    return jsonify({"message": "User created"}), 201


