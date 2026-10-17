import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

//vvvvvvvvvvvvvvvvvvvv| TYPES |vvvvvvvvvvvvvvvvvvvv//
interface MealArr {
  meals: MealData[];
}

const initMealArr = {
  meals: [],
};

interface MealData {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strCountry: string;
  strMealThumb: string;
}
//^^^^^^^^^^^^^^^^^^^^| TYPES |^^^^^^^^^^^^^^^^^^^^//

//vvvvvvvvvvvvvvvvvvvv| STYLING |vvvvvvvvvvvvvvvvvvvv//
const ulStyle: React.CSSProperties = {
  listStyle: "none",
};

const itemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  maxWidth: "800px",
  borderBottom: "2px solid",
  borderLeft: "0.5px solid",
  borderRight: "0.5px solid",
  borderBottomColor: "gray",
  borderRightColor: "gray",
  borderLeftColor: "gray",
  borderRadius: "30px",
  padding: "15px",
  marginBottom: "30px",
};

const liStyle: React.CSSProperties = {
  alignSelf: "center",
  listStyleType: "none",
};

const imageStyle = {
  height: "200px",
  width: "200px",
  borderRadius: "20px",
};
//^^^^^^^^^^^^^^^^^^^^| STYLING |^^^^^^^^^^^^^^^^^^^^//

function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchQuery = location.state;
  const [data, setData] = useState<MealArr>(initMealArr);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // const favButton: HTMLCollectionOf<Element> = document.getElementsByClassName("favBtn");

  const favMeal = (event: React.MouseEvent<HTMLOrSVGElement>): void => {
    const target = event.currentTarget;
    console.log("Target:", target);
    // if (target) {
    //   setIsFavorite(!isFavorite);
    //   console.log("target:", target.fill);
    //   target.fill = isFavorite ? "red" : "none";
    // }
  };

  const viewRecipe = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    try {
      const button: HTMLButtonElement = event.currentTarget;
      const mealId = button.id.slice(10, 15);
      navigate("/view-recipe", { state: mealId });
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  const url = new URL(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
  );

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const meals = (await response.json()) as MealArr;

        setData(meals);
      } catch (err) {
        console.log("ERROR:", err);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div id="mainContent">
          <h1 id="searchHeader">Showing results for "{searchQuery}"</h1>
          <div>
            <ul style={ulStyle} id="itemList">
              {data.meals.map((meal: MealData) => {
                return (
                  <div style={itemStyle} id="itemWrapper">
                    <img
                      key={meal.idMeal}
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      style={imageStyle}
                    ></img>
                    <div id="listItems">
                      <div id="liTitleFav">
                        <li key={meal.idMeal} style={liStyle} id="searchItem">
                          {meal.strMeal}
                        </li>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 50 50"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          onClick={favMeal}
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
                      <button
                        id={`viewRecipe${meal.idMeal}`}
                        className="viewBtn"
                        onClick={viewRecipe}
                      >
                        View Recipe
                      </button>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SearchPage;
