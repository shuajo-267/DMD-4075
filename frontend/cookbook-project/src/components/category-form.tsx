function CategoryForm() {

    
  return (
    <div className="checkbox-form">
      <label htmlFor="categories" className="form-header">
        Categories
      </label>
      <form id="category-select" name="categories" className="form-select">
        <label className="check-label">
          <input value="beef" type="checkbox" className="post-checkbox" />
          Beef
        </label>
        <label className="check-label">
          <input value="chicken" type="checkbox" className="post-checkbox" />
          Chicken
        </label>
        <label className="check-label">
          <input value="dessert" type="checkbox" className="post-checkbox" />
          Dessert
        </label>
        <label className="check-label">
          <input value="lamb" type="checkbox" className="post-checkbox" />
          Lamb
        </label>
        <label className="check-label">
          <input
            value="miscellaneous"
            type="checkbox"
            className="post-checkbox"
          />
          Miscellaneous
        </label>
        <label className="check-label">
          <input value="pasta" type="checkbox" className="post-checkbox" />
          Pasta
        </label>
        <label className="check-label">
          <input value="pork" type="checkbox" className="post-checkbox" />
          Pork
        </label>
        <label className="check-label">
          <input value="seafood" type="checkbox" className="post-checkbox" />
          Seafood
        </label>
        <label className="check-label">
          <input value="side" type="checkbox" className="post-checkbox" />
          Side
        </label>
        <label className="check-label">
          <input value="starter" type="checkbox" className="post-checkbox" />
          Starter
        </label>
        <label className="check-label">
          <input value="vegan" type="checkbox" className="post-checkbox" />
          Vegan
        </label>
        <label className="check-label">
          <input value="vegetarian" type="checkbox" className="post-checkbox" />
          Vegetarian
        </label>
        <label className="check-label">
          <input value="breakfast" type="checkbox" className="post-checkbox" />
          Breakfast
        </label>
        <label className="check-label">
          <input value="goat" type="checkbox" className="post-checkbox" />
          Goat
        </label>
      </form>
    </div>
  );
}

export default CategoryForm;
