import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ChangeEvent } from "react";
import Navbar from "../components/navbar";
import PostBtn from "../components/postBtn";
import IngredientList from "../components/ingredient-list";
import InstructionList from "../components/instruction-list";
import AllergensForm from "../components/allergens";
import CategoryForm from "../components/category-form";
import DescriptionField from "../components/description-field";
import RecipeName from "../components/recipe-name";
import FileUpload from "../components/file-upload";
import DietaryTags from "../components/diet-tags";

interface Instruction {
  id: number;
  name: string;
}

interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  measure: string;
}

interface Allergen {
  name: string;
}

interface Category {
  name: string;
}

interface DietTag {
  name: string;
}

function NewPost() {
  const navigate = useNavigate();
  // POST VARIABLES
  const [recipeName, setRecipeName] = useState("");
  const [passedIngr, setPassedIngr] = useState<Ingredient[]>([]);
  const [passedInstr, setPassedInstr] = useState<Instruction[]>([]);
  const [passedAllergens, setPassedAllergens] = useState<Allergen[]>([]);
  const [passedCategories, setPassedCategories] = useState<Category[]>([]);
  const [passedTags, setPassedTags] = useState<DietTag[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");

  // TESTING
  useEffect(() => {
    console.log("Passed ingredients:", passedIngr);
  }, [passedIngr]);

  useEffect(() => {
    console.log("Passed instructions:", passedInstr);
  }, [passedInstr]);

  useEffect(() => {
    console.log("Recipe name:", recipeName);
  }, [recipeName]);

  useEffect(() => {
    console.log("Passed allergens:", passedAllergens);
  }, [passedAllergens]);

  useEffect(() => {
    console.log("Passed categories:", passedCategories);
  }, [passedCategories]);

  useEffect(() => {
    console.log("Passed tags:", passedTags);
  }, [passedTags]);

  useEffect(() => {
    console.log("Files:", files);
  }, [files]);

  useEffect(() => {
    console.log("Description:", description);
  }, [description]);

  //====================| POST RECIPE |====================
  const postRecipe = () => {

    fetch("http://127.0.0.1:5000/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        recipe_name: recipeName,
        ingredients: passedIngr,
        instructions: passedInstr,
        allergens: passedAllergens,
        categories: passedCategories,
        dietary_tags: passedTags,
        description: description,
        author_id: 1,
        author_username: "joshua_c",
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));

      navigate("/profile");
  };
  //^^^^^^^^^^^^^^^^^^^^| POST RECIPE |^^^^^^^^^^^^^^^^^^^^
  return (
    <div>
      <Navbar />
      <main id="post-recipe-main">
        <h1 id="post-recipe-header">Post a recipe</h1>
        <div id="main-form-container">
          <div>
            <section className="form-section">
              <RecipeName setRecipeName={setRecipeName} />
            </section>
            <div id="choice-selection">
              <section className="form-section">
                <AllergensForm
                  passedAllergens={passedAllergens}
                  setPassedAllergens={setPassedAllergens}
                />
              </section>
              <section className="form-section">
                <CategoryForm
                  passedCategories={passedCategories}
                  setPassedCategories={setPassedCategories}
                />
              </section>
              <section>
                <DietaryTags
                  passedTags={passedTags}
                  setPassedTags={setPassedTags}
                />
              </section>
            </div>
          </div>
          <section className="form-section">
            <IngredientList
              passedIngr={passedIngr}
              setPassedIngr={setPassedIngr}
            />
          </section>
          <section className="form-section">
            <InstructionList
              passedInstr={passedInstr}
              setPassedInstr={setPassedInstr}
            />
          </section>
          <section className="form-section">
            <FileUpload setFiles={setFiles} />
          </section>
          <section className="form-section">
            <DescriptionField setDescription={setDescription} />
          </section>
          <div id="submit-container" onClick={postRecipe}>
            <p id="submit-btn">Submit</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewPost;

{
  /* <div id="ingredient-form" className="form-list">
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
</div> */
}

{
  /* <div id="instructions-field" className="form-list">
        <label htmlFor="instructions" className="form-header">
          Instructions
        </label>
        <input
          type="text"
          placeholder="Please enter an instruction"
          id="instruction-input"
          onChange={handleInstrInputChange}
          value={instrInput}
          className="instruction-inputs"
          />
        <ul id="ingredient-list">
          {instructions.map((instruction: Instruction) => {
            return (
              <div className="added-ingredient">
                <li key={instruction.id} className="ingredient-li">
                  {instruction.name}
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
                  onClick={() => deleteInstruction(instruction.id)}
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
      </div>
      <div id="add-ing-row" onClick={addInstruction}>
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
        <p id="ingredient-btn">Add Instruction</p>
      </div> */
}

{
  /* <div className="checkbox-form">
                  <label htmlFor="allergens" className="form-header">
                    Allergens
                  </label>
                  <form className="form-select" name="allergens">
                    <PostBtn name="hello" isClicked={false} />
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
                </div> */
}

// <div className="checkbox-form">
//   <label htmlFor="categories" className="form-header">
//     Categories
//   </label>
//   <form
//     id="category-select"
//     name="categories"
//     className="form-select"
//   >
//     <label className="check-label">
//       <input
//         value="beef"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Beef
//     </label>
//     <label className="check-label">
//       <input
//         value="chicken"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Chicken
//     </label>
//     <label className="check-label">
//       <input
//         value="dessert"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Dessert
//     </label>
//     <label className="check-label">
//       <input
//         value="lamb"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Lamb
//     </label>
//     <label className="check-label">
//       <input
//         value="miscellaneous"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Miscellaneous
//     </label>
//     <label className="check-label">
//       <input
//         value="pasta"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Pasta
//     </label>
//     <label className="check-label">
//       <input
//         value="pork"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Pork
//     </label>
//     <label className="check-label">
//       <input
//         value="seafood"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Seafood
//     </label>
//     <label className="check-label">
//       <input
//         value="side"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Side
//     </label>
//     <label className="check-label">
//       <input
//         value="starter"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Starter
//     </label>
//     <label className="check-label">
//       <input
//         value="vegan"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Vegan
//     </label>
//     <label className="check-label">
//       <input
//         value="vegetarian"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Vegetarian
//     </label>
//     <label className="check-label">
//       <input
//         value="breakfast"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Breakfast
//     </label>
//     <label className="check-label">
//       <input
//         value="goat"
//         type="checkbox"
//         className="post-checkbox"
//       />
//       Goat
//     </label>
//   </form>
// </div>
