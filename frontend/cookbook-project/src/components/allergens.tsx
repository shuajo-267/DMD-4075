import { useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction, MouseEvent } from "react";

interface Allergen {
  name: string;
}

interface Props {
  passedAllergens: Allergen[];
  setPassedAllergens: Dispatch<SetStateAction<Allergen[]>>;
}

function AllergensForm({ passedAllergens, setPassedAllergens }: Props) {

  const addAllergens = (event: MouseEvent<HTMLInputElement>) => {
    const newAllergen = {
      name: event.currentTarget.value
    };
    
    setPassedAllergens([...passedAllergens, newAllergen])
  }

  return (
    <div className="checkbox-form">
      <label htmlFor="allergens" className="form-header">
        Allergens
      </label>
      <form className="form-select" name="allergens">
        <label className="check-label">
          <input value="peanuts" type="checkbox" className="post-checkbox" onClick={addAllergens}/>
          Peanuts
        </label>
        <label className="check-label">
          <input value="tree-nuts" type="checkbox" className="post-checkbox" />
          Tree Nuts
        </label>
        <label className="check-label">
          <input value="fish" type="checkbox" className="post-checkbox" />
          Fish
        </label>
        <label className="check-label">
          <input value="shellfish" type="checkbox" className="post-checkbox" />
          Shellfish
        </label>
        <label className="check-label">
          <input value="wheat" type="checkbox" className="post-checkbox" />
          Wheat
        </label>
        <label className="check-label">
          <input value="soy" type="checkbox" className="post-checkbox" />
          Soy
        </label>
        <label className="check-label">
          <input value="sesame" type="checkbox" className="post-checkbox" />
          Sesame
        </label>
        <label className="check-label">
          <input value="milk-dairy" type="checkbox" className="post-checkbox" />
          Milk/Dairy
        </label>
      </form>
    </div>
  );
}

export default AllergensForm;
