import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MealCard from "../components/mealcard";

interface Meals {
  meals: MealData[];
}

const initMeals = {
  meals: []
}

interface MealData {
  idMeal: string;
  strArea: string;
  strCountry: string;
  strMeal: string;
  strMealThumb: string;
}

function ViewCategory() {
  const location = useLocation();
  const categoryId = location.state;
  const [data, setData] = useState<Meals>(initMeals);

  const url = new URL(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`,
  );

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) throw new Error();

        const category = await response.json();
        setData(category);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCategory();
  }, []);

  return (
    <div>
      <Navbar />
      <main id="viewCatMain">
        <h1 id="exploreCatHeader">Explore {categoryId} Recipes</h1>
        <div id="categoryMealsWrapper">
          {data.meals.map((meal: MealData) => {
            return (
              <div>
                <div id="catMealLayout">
                  <MealCard
                      idMeal={meal.idMeal}
                      strMeal={meal.strMeal}
                      strMealThumb={meal.strMealThumb}
                    />
                  </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );
}

export default ViewCategory;
