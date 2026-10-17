import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import CategoryCard from "../components/category";
import Footer from "../components/footer";

interface Categories {
  categories: Category[];
}

const initCategories = {
  categories: [],
};

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

function HomePage() {
  const url = new URL(`https://www.themealdb.com/api/json/v1/1/categories.php`);
  const [data, setData] = useState<Categories>(initCategories);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const categories = await response.json();

        setData(categories);
        console.log("CATEGORIES:", categories);
      } catch (err) {
        console.log("ERROR:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <header>
        <Navbar />
        <div id="heroContainer">
          <img
            src="./images/victoria-shes-food-unsplash.jpg"
            alt="Display of food"
            id="heroImg"
          />
          <div id="heroText">
            <h1>Welcome back to CookBook!</h1>
            <SearchBar id="heroSearch" />
          </div>
        </div>
      </header>
      <main>
        <div className="mainContent">
          <section id="categories">
            <h2 id="categoriesHeader">Explore by Category</h2>
            <div id="categoryDiv">
              {data.categories.map((category: Category) => {
                return (
                  <div>
                    <CategoryCard
                      idCategory={category.idCategory}
                      strCategory={category.strCategory}
                      strCategoryThumb={category.strCategoryThumb}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
