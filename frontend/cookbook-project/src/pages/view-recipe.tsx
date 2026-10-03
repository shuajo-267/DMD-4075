import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

interface MealArr {
  meals: MealData[];
}

const initMealArr = {
  meals: [],
};

interface MealData {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string;
  strCategory: string;
  strArea: string;
  strCountry: string;
  strMealThumb: string;
  strInstructions: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
  strSource: string;
  strImageSource: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

interface Ingredients {
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
}

let ingredientArr: Array<string> = [];

function ViewRecipe() {
  const location = useLocation();
  const mealId = location.state;
  console.log(mealId);
  const [data, setData] = useState<MealArr>(initMealArr);
  const [mealKeys, setMealKeys] = useState<string[]>()

  const url = new URL(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
  );

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const meals = (await response.json()) as MealArr;
        const keys = Object.keys(meals.meals[0])

        console.log("Meals:", meals.meals[0].idMeal);
        const ingredientKeys = keys.slice(10, 30);
        console.log("Ingredient Keys:", ingredientKeys);

        for (let i in ingredientKeys) {
          console.log("Keys:", i);
        }

        setData(meals);
        setMealKeys(keys);
      } catch (err) {
        console.log("ERROR:", err);
      }
    };

    fetchMeal();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div>
          {data.meals.map((meal: MealData) => {
            return (
              <div id="viewMealWrapper">
                <img
                  key={meal.idMeal}
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  id="mealImg"
                ></img>
                <div id="mealInfo">
                  <h1>{meal.strMeal}</h1>
                  <div id="listInfoWrapper">
                    <div id="ingrdWrapper">
                      <h2>Ingredients:</h2>
                      <ul>
                        {data.meals.map((meal: MealData) => {
                          return (
                            <div>
                              <li key={meal.idMeal}>{meal.strIngredient1}</li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                    <div id="allerWrapper">
                      <h2>Allergens:</h2>
                    </div>
                  </div>
                  <div id="instrWrapper">
                    <h2>Instructions:</h2>
                    <p>{meal.strInstructions}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ViewRecipe;
