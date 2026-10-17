import { useLocation, useNavigate } from "react-router-dom";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

function CategoryCard(category: Category) {
  const navigate = useNavigate();

  const viewCategory = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    try {
      const category = event.currentTarget.id;
      const categoryId = category.slice(8, 21);
      navigate("/view-category", { state: categoryId });
    } catch (err) {
      console.error("ERROR:", err)
    }
  };

  return (
    <div id={`category${category.strCategory}`} onClick={viewCategory}style={{ cursor: "pointer" }}>
      <div id={category.idCategory}>
        <img
          id="categoryThumb"
          src={category.strCategoryThumb}
          alt={category.strCategory}
        />
        <h3 className="mealName">{category.strCategory}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
