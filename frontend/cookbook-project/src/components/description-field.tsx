import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Props {
  setDescription: Dispatch<SetStateAction<string>>;
}

function DescriptionField({ setDescription }: Props) {
  const handleDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const name = event.target.value;
    setDescription(name);
  };
  
  return (
    <div id="desc-field">
      <label htmlFor="description" className="form-header">
        Description
      </label>
      <textarea
        maxLength={500}
        name="description"
        id="desc-input"
        placeholder="Describe your recipe (no more than 500 words please!)"
        onChange={handleDescription}
      />
    </div>
  );
}

export default DescriptionField;
