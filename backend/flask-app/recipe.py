from flask import Flask, Blueprint, request
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Resource, Api, reqparse, fields, marshal_with, abort
from extensions import db

class RecipeModel(db.Model):
    """Models the custom recipe features"""
    id = db.Column(db.Integer, primary_key = True)
    recipe_name = db.Column(db.String(80), nullable = False)
    ingredients = db.Column(db.JSON, nullable = False)
    instructions = db.Column(db.JSON, nullable = False)
    allergens = db.Column(db.JSON)
    dietary_tags = db.Column(db.JSON)
    author_id = db.Column(db.Integer, nullable = False)
    author_username = db.Column(db.String(80), nullable = False)

    def __repr__(self):
        return f"Recipe(recipe_name = {self.recipe_name}, ingredients = {self.ingredients}, instructions = {self.instructions}, allergens = {self.allergens}, dietary_tags = {self.dietary_tags})"

recipe_args = reqparse.RequestParser()
recipe_args.add_argument("recipe_name", type = str, required = True, help = "Recipe name cannot be blank")
recipe_args.add_argument("ingredients", type = list, required = True, help = "Ingredients cannot be blank")
recipe_args.add_argument("instructions", type = list, required = True, help = "Instructions cannot be blank")
recipe_args.add_argument("allergens", type = list, required = False)
recipe_args.add_argument("dietary_tags", type = list, required = False)
recipe_args.add_argument("author_id", type = int, required = True, help = "Author ID cannot be blank")
recipe_args.add_argument("author_username", type = str, required = True, help = "Author username cannot be blank")

recipeFields = {
    "id": fields.Integer,
    "recipe_name": fields.String,
    "ingredients": fields.List(fields.String),
    "allergens": fields.List(fields.String),
    "dietary_tags": fields.List(fields.String)
}

class Recipes(Resource):
    @marshal_with(recipeFields)
    def get(self):
        recipes = RecipeModel.query.all()
        return recipes

    @marshal_with(recipeFields)
    def post(self):
        data = request.get_json()
        if not data:
            return {"error": "Invalid JSON"}, 400
        args = recipe_args.parse_args()
        recipe = RecipeModel(recipe_name = args["recipe_name"], ingredients = data["ingredients"], instructions = data["instructions"], allergens = data["allergens"], dietary_tags = data["dietary_tags"], author_id = args["author_id"], author_username = args["author_username"])
        db.session.add(recipe)
        db.session.commit()
        recipes = RecipeModel.query.all()
        return recipes, 201

class Recipe(Resource):
    @marshal_with(recipeFields)
    def get(self, id):
        """Retrieve a single recipe from the database"""
        recipe = RecipeModel.query.filter_by(id = id).first()
        if not recipe:
            abort(404, "Recipe not found")
        return recipe
    @marshal_with(recipeFields)
    def patch(self, id):
        """Edit a single recipe from the database"""
        args = recipe_args.parse_args()
        recipe = RecipeModel.query.filter_by(id = id).first()
        if not recipe:
            abort(404, "Recipe not found")
        recipe.recipe_name = args["recipe_name"]
        recipe.ingredients = args["ingredients"]
        recipe.instructions = args["instructions"]
        db.session.commit()
        return recipe
    @marshal_with(recipeFields)
    def delete(self, id):
        """Delete a single recipe from the database"""
        recipe = RecipeModel.query.filter_by(id = id).first()
        if not recipe:
            abort(404, "Recipe not found")
        db.session.delete(recipe)
        db.session.commit()
        recipes = RecipeModel.query.all()
        return recipes, 204
