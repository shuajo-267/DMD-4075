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

  const postImages = () => {
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("files", files[i]);

      fetch("http://127.0.0.1:5000/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: formData
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
    }
  }
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
          <div id="submit-container" onClick={() => {
            postRecipe(),
            postImages()
          }}>
            <p id="submit-btn">Submit</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewPost;
