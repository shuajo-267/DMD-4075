import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  setRecipeName: Dispatch<SetStateAction<string>>;
}

function RecipeName({ setRecipeName }: Props) {
  const handleRecipeName = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setRecipeName(name);
  };

  return (
    <div id="recipe-name-container">
      <label htmlFor="recipe-name" className="form-header">
        Recipe Name
      </label>
      <input
        placeholder="Enter a name..."
        name="recipe-name"
        required
        id="recipe-name-input"
        onChange={handleRecipeName}
      ></input>
    </div>
  );
}

export default RecipeName;
