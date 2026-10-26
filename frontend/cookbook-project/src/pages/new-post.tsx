import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ChangeEvent } from "react";
import Navbar from "../components/navbar";

interface Ingredient {
  id: number,
  name: string,
  quantity: number,
  measure: string
}

function NewPost() {
  const [ingredients, setIngredients] = useState<Array<Ingredient>>([]);
  const [ingrInput, setIngrInput] = useState("");
  const [ingrQuantity, setIngrQuantity] = useState("");
  const [ingrMeasure, setIngrMeasure] = useState("");
  const ingredientLi: HTMLLIElement | null = document.querySelector(".ingredient-li");

  if (ingredientLi !== null) {
    ingredientLi.addEventListener("mouseover", () => {

    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const ingrVal = event.target.value;
    if (ingrVal.includes("0") || ingrVal.includes("1") || ingrVal.includes("2") || ingrVal.includes("3") || ingrVal.includes("4") || ingrVal.includes("5") || ingrVal.includes("6") || ingrVal.includes("7") || ingrVal.includes("8") || ingrVal.includes("9")) {
      alert("Please enter a number");
    } else {
      setIngrInput(ingrVal);
    }
  }

  const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const quantity = event.target.value;
    setIngrQuantity(quantity);
  }

  const handleMeasurement = (event: ChangeEvent<HTMLSelectElement>) => {
    const measure = event.target.value;
    setIngrMeasure(measure);
  }
  
  const addIngredient = () => {
    const newIngredient: Ingredient = {
      id: Math.random(),
      name: ingrInput,
      quantity: Number(ingrQuantity),
      measure: ingrMeasure
    };
    setIngredients([...ingredients, newIngredient]);
    setIngrInput("");
  };

  return (
    <div>
      <Navbar/>
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
          <div id="ingredient-form">
            <label htmlFor="ingredient-list" className="form-header">
              Ingredients
            </label>
            <input type="text" placeholder="Please enter an ingredient" id="ingredient-input" onChange={handleInputChange} value={ingrInput} className="ingredient-inputs"/>
            <input type="number" placeholder="Please enter a measurement quantity" id="ingredient-quantity" onChange={handleQuantity} className="ingredient-inputs"/>
            <select name="measurement" id="measure-select" required onChange={handleMeasurement} className="ingredient-inputs">
              <option value="">Select measurement:</option>
              <option value="fl-oz">fl oz</option>
              <option value="tsp">tsp</option>
              <option value="tbsp">tbsp</option>
              <option value="cup">cup(s)</option>
              <option value="pt">pt(s)</option>
              <option value="qt">qt(s)</option>
              <option value="gal">gal</option>
              <option value="oz">oz</option>
              <option value="lb">lb</option>
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="ml">ml</option>
              <option value="L">L</option>
            </select>   
            <ul id="ingredient-list">
              {ingredients.map((ingredient: Ingredient) => {
                return (
                  <div className="added-ingredient">
                    <li key={ingredient.id} className="ingredient-li">{ingredient.name} - {ingredient.quantity} {ingredient.measure}</li>
                    <svg width="104" height="107" viewBox="0 0 104 107" fill="none" xmlns="http://www.w3.org/2000/svg" className="ingredient-icon">
                      <rect x="86.0303" width="24" height="95" transform="rotate(43.1998 86.0303 0)" fill="black"/>
                      <path d="M7.77749 98.9411L20.6636 72.5828L34.1358 86.0549L7.77749 98.9411Z" fill="black"/>
                    </svg>
                    <svg width="81" height="147" viewBox="0 0 81 147" fill="none" xmlns="http://www.w3.org/2000/svg" className="ingredient-icon" id="trash-icon">
                      <rect y="36" width="81" height="111" fill="black"/>
                      <rect y="13" width="81" height="16" fill="black"/>
                      <path d="M17 0H64V13L40.5 0L17 13V0Z" fill="black"/>
                      <rect x="13" y="60" width="8" height="63" fill="white"/>
                      <rect x="37" y="60" width="8" height="63" fill="white"/>
                      <rect x="61" y="60" width="8" height="63" fill="white"/>
                    </svg>
                  </div>
                )
              })}
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
