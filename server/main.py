# from flask import Flask, jsonify
# from flask_cors import CORS
# import requests

# app = Flask(__name__)
# CORS(app)

# @app.route('/api/anime', methods=['GET'])
# def anime():
#     url = f'https://api.jikan.moe/v4/anime/14813'
#     response = requests.get(url)
    
#     if response.status_code == 200:
#         anime_data = response.json()
#         return jsonify(anime_data)
#     else:
#         return jsonify({'error': 'Anime not found'}), 404

# if __name__ == '__main__':
#     app.run(debug=True)



