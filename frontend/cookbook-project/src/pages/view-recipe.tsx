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

let newFavsList: Array<string> = [];

function ViewRecipe() {
  const location = useLocation();
  const mealId = location.state;
  // console.log(mealId);
  const [data, setData] = useState<MealArr>(initMealArr);
  const [mealKeys, setMealKeys] = useState<string[]>();
  const [currentFavMeal, setCurrentFavMeal] = useState("");
  const [favMealList, setFavMealList] = useState<string[]>([]);

  const url = new URL(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
  );

  // localStorage.setItem("favs", JSON.stringify(["53421", "52812"]));
  console.log("STORAGE:", localStorage);

  useEffect(() => {
    const retrievedFavs = localStorage.getItem("favs");
    if (retrievedFavs) {
      const parsedFavs: string[] = JSON.parse(retrievedFavs);
      console.log("PARSED FAVS:", parsedFavs);
      setFavMealList(parsedFavs);
    } else {
      setFavMealList([]);
    }
  }, []);

  const favoriteMeal = (event: React.MouseEvent<SVGElement>) => {
    const viewMealId = event.currentTarget.id;
    setCurrentFavMeal(viewMealId);

    if (favMealList !== null) {
      let updatedFavs = [...favMealList, viewMealId];

      console.log("UPDATED FAVS:", updatedFavs);
      setFavMealList(updatedFavs);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
    } else {
      let newFavList = [];
      newFavList.push(viewMealId);
      setFavMealList(newFavList);
    }
  };

  // useEffect(() => {
  //   console.log("STORAGE:", localStorage);
  // }, [favMealList]);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const meals = (await response.json()) as MealArr;
        const keys = Object.keys(meals.meals[0]);

        const ingredientKeys = keys.slice(10, 30);

        setData(meals);
        setMealKeys(keys);
      } catch (err) {
        console.error("ERROR:", err);
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
                  <div id="nameAndFav">
                    <h1>{meal.strMeal}</h1>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      onClick={favoriteMeal}
                      id={meal.idMeal}
                    >
                      <g clip-path="url(#clip0_122_19)">
                        <path
                          d="M43.4168 9.60419C42.3527 8.53961 41.0893 7.69512 39.6987 7.11894C38.3082 6.54277 36.8178 6.24622 35.3126 6.24622C33.8074 6.24622 32.317 6.54277 30.9264 7.11894C29.5359 7.69512 28.2725 8.53961 27.2084 9.60419L25.0001 11.8125L22.7918 9.60419C20.6424 7.45483 17.7272 6.24733 14.6876 6.24733C11.6479 6.24733 8.73278 7.45483 6.58342 9.60419C4.43406 11.7535 3.22656 14.6687 3.22656 17.7084C3.22656 20.748 4.43406 23.6632 6.58342 25.8125L25.0001 44.2292L43.4168 25.8125C44.4813 24.7484 45.3258 23.485 45.902 22.0945C46.4782 20.704 46.7747 19.2135 46.7747 17.7084C46.7747 16.2032 46.4782 14.7127 45.902 13.3222C45.3258 11.9317 44.4813 10.6683 43.4168 9.60419Z"
                          stroke="#1E1E1E"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          id="heartOutline"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_122_19">
                          <rect width="50" height="50" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
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
