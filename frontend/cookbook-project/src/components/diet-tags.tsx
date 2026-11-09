import type { MouseEvent, Dispatch, SetStateAction } from "react";

interface DietTag {
  name: string;
}

interface Props {
  passedTags: DietTag[];
  setPassedTags: Dispatch<SetStateAction<DietTag[]>>;
}

function DietaryTags({ passedTags, setPassedTags }: Props) {
  const addTags = (event: MouseEvent<HTMLInputElement>) => {
    const newTag = {
      name: event.currentTarget.value,
    };
    setPassedTags([...passedTags, newTag]);
  };

  return (
    <div className="checkbox-form">
      <label htmlFor="allergens" className="form-header">
        Dietary Tags
      </label>
      <form className="form-select" name="diet-tags">
        <label className="check-label">
          <input
            value="vegan"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Vegan
        </label>
        <label className="check-label">
          <input
            value="vegetarian"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Vegetarian
        </label>
        <label className="check-label">
          <input
            value="pescatarian"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Pescatarian
        </label>
        <label className="check-label">
          <input
            value="gluten-free"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Gluten-Free
        </label>
        <label className="check-label">
          <input
            value="dairy-free"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Dairy-Free
        </label>
        <label className="check-label">
          <input
            value="kosher"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Kosher
        </label>
        <label className="check-label">
          <input
            value="halal"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Halal
        </label>
        <label className="check-label">
          <input
            value="keto"
            type="checkbox"
            className="post-checkbox"
            onClick={addTags}
          />
          Keto
        </label>
      </form>
    </div>
  );
}

export default DietaryTags;
