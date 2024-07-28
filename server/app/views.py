from app import app
from flask import jsonify
import requests

@app.route('/api/anime', methods=['GET'])
def anime():
    url = f'https://api.jikan.moe/v4/anime/14813'
    response = requests.get(url)
    
    if response.status_code == 200:
        anime_data = response.json()
        return jsonify(anime_data)
    else:
        return jsonify({'error': 'Anime not found'}), 404