"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/recipes', methods=['GET'])
def recipes():
    recipes = recipes.query.all()
    all_recipes = list(map(lambda x:x.serialize(),recipes))
    return jsonify(all_recipes), 200
@api.route('/recipes/<int:recipes_id>', methods=['GET'])
def getrecipes(recipes_id):
    recipes = recipes.query.get(recipes_id)
    if recipes is None:
        raise APIException('recipes not found', status_code=404)
    return jsonify(recipes.serialize()), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200