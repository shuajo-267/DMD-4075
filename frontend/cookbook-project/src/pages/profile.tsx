import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import MealCard from "../components/mealcard";

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

function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();

  let favMealArr: Array<MealArr> = [];
  const [favMealList, setFavMealList] = useState<MealArr[]>([]);

  const [favMeals, setFavMeals] = useState<string[]>([]);
  const [data, setData] = useState<MealArr>(initMealArr);

  useEffect(() => {
    const retrievedMeals = localStorage.getItem("favs");

    if (retrievedMeals) {
      const parsedMeals: string[] = JSON.parse(retrievedMeals);
      setFavMeals(parsedMeals);
    } else {
      setFavMeals([]);
    }
  }, []);

  useEffect(() => {
    console.log("STORAGE:", localStorage);
    console.log("FAV MEALS:", favMeals);
    const promises = favMeals.map(async (meal) => {
      const url = new URL(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`,
      );

      const fetchFavMeal = async () => {
        try {
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error();
          }

          const meals = (await response.json()) as MealArr;

          // favMealArr.push(meals);
          // setFavMealList(favMealArr);

          return meals;
        } catch (err) {
          console.log("ERROR:", err);
        }
      };

      const promiseResult = await fetchFavMeal();

      return promiseResult;
    });

    const results = Promise.all(promises);

    // setFavMealList(results);
  }, [favMeals]);

  return (
    <div>
      <Navbar />
      <main>
        <div>
          <h1>Profile</h1>
        </div>
        <div id="favorites">
          <h2>Favorite meals</h2>
          <div id="favRow">
            {favMealList.map((meal: MealArr) => {
              const mealInfo = meal.meals[0];
              //console.log("MEAL:", mealInfo.strMeal);
              return (
                <div>
                  <MealCard
                    idMeal={mealInfo.idMeal}
                    strMeal={mealInfo.strMeal}
                    strMealThumb={mealInfo.strMealThumb}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;

{
  /* <ul>
<li key={mealInfo.idMeal}>{mealInfo.strMeal}</li>
</ul>
<img key={mealInfo.idMeal} src={mealInfo.strMealThumb} alt={mealInfo.strMeal} id="favMealImg"></img>
<button onClick={viewRecipe}>View Recipe</button> */
}
