from app import app
from flask import jsonify, request
import requests

JIKAN_API_BASE_URL = "https://api.jikan.moe/v4"

def get_anime_from_jikan(query):
    url = f"{JIKAN_API_BASE_URL}/anime"
    try:
        response = requests.get(url, params={'q': query})
        response.raise_for_status()
        return response.json()
    except requests.exceptions.ConnectionError as err: #for network issues
        return jsonify({'error': 'Connection error. Please try again later.'}), 503
    except requests.exceptions.HTTPError as err: #url, server, etc. issues (404, 500)
        return jsonify({'error': 'An error occurred while processing the request.'}), 500



@app.route('/search_anime', methods=['GET'])
def search_anime():
    try: 
        query = request.args.get('q') #query from frontend is accessed through Flask request object 
        data = get_anime_from_jikan(query)
        return jsonify(data)
    except requests.exceptions.ConnectionError as err:
        return jsonify({'error': 'Connection error. Please try again later.'}), 503
    except requests.exceptions.HTTPError as err: 
        return jsonify({'error': 'An error occurred while processing the request.'}), 500
    except Exception as err:
        return jsonify(err)
