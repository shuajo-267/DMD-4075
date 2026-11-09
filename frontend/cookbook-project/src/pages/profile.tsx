import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
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

interface Ingredient {
  id: number;
  name: string;
  quantity: number;
  measure: string;
}

interface Instruction {
  id: number;
  name: string;
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

interface UserPost {
  id: number;
  recipe_name: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  allergens: Allergen[];
  categories: Category[];
  dietary_tags: DietTag[];
  description: string;
  author_id: number;
  author_username: string;
}

interface UserPosts {
  posts: UserPost[];
}

function ProfilePage() {
  const [favsToDisplay, setFavsToDisplay] = useState<MealArr[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  let favMealArr: Array<MealArr> = [];
  const [favMealList, setFavMealList] = useState<MealArr[]>([]);

  const [favMeals, setFavMeals] = useState<string[]>([]);
  const [data, setData] = useState<MealArr>(initMealArr);
  const [userPosts, setUserPosts] = useState();

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

          return meals;
        } catch (err) {
          console.error("ERROR:", err);
        }
      };

      const promiseResult = await fetchFavMeal();

      return promiseResult;
    });

    Promise.all(promises).then((result) => {
      if (result !== undefined) {
        const filteredResult = result.filter(
          (meal): meal is MealArr => typeof meal !== undefined,
        );
        setFavsToDisplay(filteredResult);
      }
    });

    // setFavMealList(results);
  }, [favMeals]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/recipes");

        if (!response.ok) {
          throw new Error();
        }

        const posts = (await response.json()) as UserPost;
        return posts;
      } catch (err) {
        console.error(err);
      }

      const promiseResult = await fetchPosts();
      return promiseResult;
    };
  }, []);

  const PostRecipe = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    try {
      const button: HTMLButtonElement = event.currentTarget;
      navigate("/new-post");
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

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
            {favsToDisplay.map((meal: MealArr) => {
              const mealInfo = meal.meals[0];
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
        <button onClick={PostRecipe}>Post New Recipe</button>
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
