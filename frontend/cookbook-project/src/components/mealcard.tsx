import { useNavigate } from "react-router-dom";

interface MealData {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

function MealCard(meal: MealData) {
  const navigate = useNavigate();
  const viewRecipe = (event: React.MouseEvent<HTMLElement>): void => {
    event.preventDefault();
    try {
      const meal: HTMLElement = event.currentTarget;
      // console.log("MEAL:", meal);
      const mealId = meal.id;
      navigate("/view-recipe", { state: mealId });
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <div id="mealCardWrapper">
      <div id={meal.idMeal} onClick={viewRecipe} style={{ cursor: "pointer" }}>
        <img id="mealThumb" src={meal.strMealThumb} alt={meal.strMeal} />
        <h3 className="mealName">{meal.strMeal}</h3>
      </div>
    </div>
  );
}

export default MealCard;
