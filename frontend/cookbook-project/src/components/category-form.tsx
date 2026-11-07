import type { Dispatch, SetStateAction, MouseEvent } from "react";

interface Category {
    name: string;
  }
  
interface Props {
  passedCategories: Category[];
  setPassedCategories: Dispatch<SetStateAction<Category[]>>;
}

function CategoryForm({ passedCategories, setPassedCategories }: Props) {
  
  const addCategories = (event: MouseEvent<HTMLInputElement>) => {
    const newAllergen = {
      name: event.currentTarget.value
    };
      
    setPassedCategories([...passedCategories, newAllergen])
  }
    
  return (
    <div className="checkbox-form">
      <label htmlFor="categories" className="form-header">
        Categories
      </label>
      <form id="category-select" name="categories" className="form-select">
        <label className="check-label">
          <input value="beef" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Beef
        </label>
        <label className="check-label">
          <input value="chicken" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Chicken
        </label>
        <label className="check-label">
          <input value="dessert" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Dessert
        </label>
        <label className="check-label">
          <input value="lamb" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Lamb
        </label>
        <label className="check-label">
          <input
            value="miscellaneous"
            type="checkbox"
            className="post-checkbox" onClick={addCategories}
          />
          Miscellaneous
        </label>
        <label className="check-label">
          <input value="pasta" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Pasta
        </label>
        <label className="check-label">
          <input value="pork" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Pork
        </label>
        <label className="check-label">
          <input value="seafood" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Seafood
        </label>
        <label className="check-label">
          <input value="side" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Side
        </label>
        <label className="check-label">
          <input value="starter" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Starter
        </label>
        <label className="check-label">
          <input value="vegan" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Vegan
        </label>
        <label className="check-label">
          <input value="vegetarian" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Vegetarian
        </label>
        <label className="check-label">
          <input value="breakfast" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Breakfast
        </label>
        <label className="check-label">
          <input value="goat" type="checkbox" className="post-checkbox" onClick={addCategories}/>
          Goat
        </label>
      </form>
    </div>
  );
}

export default CategoryForm;
