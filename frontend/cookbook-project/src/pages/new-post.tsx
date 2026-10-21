import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const ingredientList = [];

const addIngredient = () => {
  const [newIngredient, setNewIngredient] = useState<HTMLInputElement>();

  return (
    <div>
      <input type="text" placeholder="Enter an ingredient" />
    </div>
  );
};

function NewPost() {
  return (
    <div>
      <Navbar />
      <main id="post-recipe-main">
        <h1 id="post-recipe-header">Post a recipe</h1>
        <div id="main-form-container">
          <div>
            <div id="recipe-name-container">
              <label htmlFor="recipe-name" className="form-header">
                Recipe Name
              </label>
              <input
                placeholder="Enter a name..."
                name="recipe-name"
                required
                id="recipe-name-input"
              ></input>
            </div>
            <div id="choice-selection">
              <div className="checkbox-form">
                <label htmlFor="allergens" className="form-header">
                  Allergens
                </label>
                <form className="form-select" name="allergens">
                  <label className="check-label">
                    <input
                      value="peanuts"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Peanuts
                  </label>
                  <label className="check-label">
                    <input
                      value="tree-nuts"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Tree Nuts
                  </label>
                  <label className="check-label">
                    <input
                      value="fish"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Fish
                  </label>
                  <label className="check-label">
                    <input
                      value="shellfish"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Shellfish
                  </label>
                  <label className="check-label">
                    <input
                      value="wheat"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Wheat
                  </label>
                  <label className="check-label">
                    <input
                      value="soy"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Soy
                  </label>
                  <label className="check-label">
                    <input
                      value="sesame"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Sesame
                  </label>
                  <label className="check-label">
                    <input
                      value="milk-dairy"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Milk/Dairy
                  </label>
                </form>
              </div>
              <div className="checkbox-form">
                <label htmlFor="categories" className="form-header">
                  Categories
                </label>
                <form
                  id="category-select"
                  name="categories"
                  className="form-select"
                >
                  <label className="check-label">
                    <input
                      value="beef"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Beef
                  </label>
                  <label className="check-label">
                    <input
                      value="chicken"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Chicken
                  </label>
                  <label className="check-label">
                    <input
                      value="dessert"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Dessert
                  </label>
                  <label className="check-label">
                    <input
                      value="lamb"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Lamb
                  </label>
                  <label className="check-label">
                    <input
                      value="miscellaneous"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Miscellaneous
                  </label>
                  <label className="check-label">
                    <input
                      value="pasta"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Pasta
                  </label>
                  <label className="check-label">
                    <input
                      value="pork"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Pork
                  </label>
                  <label className="check-label">
                    <input
                      value="seafood"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Seafood
                  </label>
                  <label className="check-label">
                    <input
                      value="side"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Side
                  </label>
                  <label className="check-label">
                    <input
                      value="starter"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Starter
                  </label>
                  <label className="check-label">
                    <input
                      value="vegan"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Vegan
                  </label>
                  <label className="check-label">
                    <input
                      value="vegetarian"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Vegetarian
                  </label>
                  <label className="check-label">
                    <input
                      value="breakfast"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Breakfast
                  </label>
                  <label className="check-label">
                    <input
                      value="goat"
                      type="checkbox"
                      className="post-checkbox"
                    />
                    Goat
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div id="ingredient-inputs">
            <label htmlFor="ingredient-list" className="form-header">
              Ingredients
            </label>
            <ul>
              <li>
                <input type="text" placeholder="Please enter an ingredient" />
              </li>
            </ul>
            <div id="add-ing-row" onClick={addIngredient}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="add-icon"
              >
                <path
                  d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                  stroke-width="2"
                  stroke="black"
                  className="add-icon-element"
                />
                <path
                  d="M25.0001 17.5212V24.9999M25.0001 24.9999V32.4785M25.0001 24.9999H17.5215M25.0001 24.9999H32.4787"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#1E1E1E"
                  className="add-icon-element"
                />
              </svg>
              <p id="ingredient-btn">Add Ingredient</p>
            </div>
          </div>
          <div id="desc-field">
            <label htmlFor="description" className="form-header">
              Description
            </label>
            <textarea
              maxLength={200}
              name="description"
              id="desc-input"
              placeholder="Describe your recipe (no more than 100 words please!)"
            />
          </div>
          <div id="submit-container">
            <p id="submit-btn">Submit</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewPost;
