import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

function NewPost() {
    return (
        <div>
            <Navbar />
            <h1 id="post-recipe-header">Post a recipe</h1>
            <main id="post-recipe-main">
                <div id="main-form-container">
                    <div>
                        <div id="recipe-name-container">
                            <label htmlFor="recipe-name" className="form-header">Recipe Name</label>
                            <input placeholder="Enter a name..." name="recipe-name "required></input>
                        </div>
                        <div id="choice-selection">
                            <label htmlFor="allergens" className="form-header">Allergen</label>
                            <form className="form-select" name="allergens">
                                <label className="check-label"><input value="peanuts" type="checkbox"/>Peanuts</label>
                                <label className="check-label"><input value="tree-nuts" type="checkbox"/>Tree Nuts</label>
                                <label className="check-label"><input value="fish" type="checkbox"/>Fish</label>
                                <label className="check-label"><input value="shellfish" type="checkbox"/>Shellfish</label>
                                <label className="check-label"><input value="wheat" type="checkbox"/>Wheat</label>
                                <label className="check-label"><input value="soy" type="checkbox"/>Soy</label>
                                <label className="check-label"><input value="sesame" type="checkbox"/>Sesame</label>
                                <label className="check-label"><input value="milk-dairy" type="checkbox"/>Milk/Dairy</label>
                            </form>
                            <label htmlFor="categories" className="form-header">Categories</label>
                            <form id="category-select" name="categories" className="form-select">
                                <label className="check-label"><input value="beef" type="checkbox"/>Beef</label>
                                <label className="check-label"><input value="chicken" type="checkbox"/>Chicken</label>
                                <label className="check-label"><input value="dessert" type="checkbox"/>Dessert</label>
                                <label className="check-label"><input value="lamb" type="checkbox"/>Lamb</label>
                                <label className="check-label"><input value="miscellaneous" type="checkbox"/>Miscellaneous</label>
                                <label className="check-label"><input value="pasta" type="checkbox"/>Pasta</label>
                                <label className="check-label"><input value="pork" type="checkbox"/>Pork</label>
                                <label className="check-label"><input value="seafood" type="checkbox"/>Seafood</label>
                                <label className="check-label"><input value="side" type="checkbox"/>Side</label>
                                <label className="check-label"><input value="starter" type="checkbox"/>Starter</label>
                                <label className="check-label"><input value="vegan" type="checkbox"/>Vegan</label>
                                <label className="check-label"><input value="vegetarian" type="checkbox"/>Vegetarian</label>
                                <label className="check-label"><input value="breakfast" type="checkbox"/>Breakfast</label>
                                <label className="check-label"><input value="goat" type="checkbox"/>Goat</label>
                            </form>
                        </div>
                    </div>
                    <div id="description-field">
                        <label htmlFor="description">Description</label>
                        <input type="text" maxLength={200} name="description"/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NewPost;