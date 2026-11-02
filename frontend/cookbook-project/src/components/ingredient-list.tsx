import { useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  measure: string;
  isEditing: boolean;
}

interface Props {
  passedIngr: Ingredient[];
  setPassedIngr: Dispatch<SetStateAction<Ingredient[]>>;
}

function IngredientList({ passedIngr, setPassedIngr }: Props) {
    const [ingredients, setIngredients] = useState<Array<Ingredient>>([]);
    const [ingrInput, setIngrInput] = useState("");
    const [ingrQuantity, setIngrQuantity] = useState("");
    const [ingrMeasure, setIngrMeasure] = useState("");
    const ingredientLi: HTMLLIElement | null =
        document.querySelector(".ingredient-li");

    // ============| INGREDIENTS |============
      // WORK ON
      if (ingredientLi !== null) {
        ingredientLi.addEventListener("mouseover", () => {});
      }
    
      const handleIngrInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const ingrVal = event.target.value;
        if (
          ingrVal.includes("0") ||
          ingrVal.includes("1") ||
          ingrVal.includes("2") ||
          ingrVal.includes("3") ||
          ingrVal.includes("4") ||
          ingrVal.includes("5") ||
          ingrVal.includes("6") ||
          ingrVal.includes("7") ||
          ingrVal.includes("8") ||
          ingrVal.includes("9")
        ) {
          alert("Please enter a word");
        } else {
          setIngrInput(ingrVal);
        }
      };
    
      const handleQuantity = (event: ChangeEvent<HTMLInputElement>) => {
        const quantity = event.target.value;
        setIngrQuantity(quantity);
      };
    
      const handleMeasurement = (event: ChangeEvent<HTMLSelectElement>) => {
        const measure = event.target.value;
        setIngrMeasure(measure);
      };
    
      const addIngredient = () => {
        const newIngredient: Ingredient = {
          id: Math.random(),
          name: ingrInput,
          quantity: Number(ingrQuantity),
          measure: ingrMeasure,
          isEditing: false,
        };
        setIngredients([...ingredients, newIngredient]);
        setPassedIngr([...passedIngr, newIngredient]);
        setIngrInput("");
      };
    
      // WORK ON
      const editIngredient = (id: number) => {
        setIngredients(
          ingredients.map((ingredient) =>
            ingredient.id === id
              ? { ...ingredient, isEditing: !ingredient.isEditing }
              : ingredient,
          ),
        );
      };
    
      const deleteIngredient = (id: number) => {
        setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
      };
      // ============| INGREDIENTS |============

    return (
        <div id="ingredient-form" className="form-list">
              <label htmlFor="ingredient-list" className="form-header">
                Ingredients
              </label>
              <input
                type="text"
                placeholder="Please enter an ingredient"
                id="ingredient-input"
                onChange={handleIngrInputChange}
                value={ingrInput}
                className="ingredient-inputs"
              />
              <input
                type="number"
                placeholder="Please enter a measurement quantity"
                id="ingredient-quantity"
                onChange={handleQuantity}
                className="ingredient-inputs"
              />
              <select
                name="measurement"
                id="measure-select"
                required
                onChange={handleMeasurement}
                className="ingredient-inputs"
              >
                <option value="">Select measurement:</option>
                <option value="pinch">pinch</option>
                <option value="dash">dash</option>
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
                      <li key={ingredient.id} className="ingredient-li">
                        {ingredient.name} - {ingredient.quantity}{" "}
                        {ingredient.measure}
                      </li>
                      <div title="Edit ingredient">
                        <svg
                          width="104"
                          height="107"
                          viewBox="0 0 104 107"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ingredient-icon"
                          id="edit-icon"
                        >
                          <rect
                            x="86.0303"
                            width="24"
                            height="95"
                            transform="rotate(43.1998 86.0303 0)"
                            fill="black"
                          />
                          <path
                            d="M7.77749 98.9411L20.6636 72.5828L34.1358 86.0549L7.77749 98.9411Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <div
                        title="Delete ingredient"
                        onClick={() => deleteIngredient(ingredient.id)}
                      >
                        <svg
                          width="81"
                          height="147"
                          viewBox="0 0 81 147"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ingredient-icon"
                          id="trash-icon"
                        >
                          <rect
                            y="36"
                            width="81"
                            height="111"
                            fill="black"
                            className="trash-svg"
                          />
                          <rect
                            y="13"
                            width="81"
                            height="16"
                            fill="black"
                            className="trash-svg"
                          />
                          <path
                            d="M17 0H64V13L40.5 0L17 13V0Z"
                            fill="black"
                            className="trash-svg"
                          />
                          <rect
                            x="13"
                            y="60"
                            width="8"
                            height="63"
                            fill="white"
                          />
                          <rect
                            x="37"
                            y="60"
                            width="8"
                            height="63"
                            fill="white"
                          />
                          <rect
                            x="61"
                            y="60"
                            width="8"
                            height="63"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  );
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
    )
}

export default IngredientList;