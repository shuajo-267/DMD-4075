import { useState } from "react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Instruction {
  id: number;
  name: string;
}

interface Props {
  passedInstr: Instruction[];
  setPassedInstr: Dispatch<SetStateAction<Instruction[]>>;
}

function InstructionList({ passedInstr, setPassedInstr }: Props) {
    const [instrInput, setInstrInput] = useState("");
    const [instructions, setInstructions] = useState<Array<Instruction>>([]);

    // ============| INSTRUCTIONS |============
      const handleInstrInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const instrVal = event.target.value;
        if (
          instrVal.includes("0") ||
          instrVal.includes("1") ||
          instrVal.includes("2") ||
          instrVal.includes("3") ||
          instrVal.includes("4") ||
          instrVal.includes("5") ||
          instrVal.includes("6") ||
          instrVal.includes("7") ||
          instrVal.includes("8") ||
          instrVal.includes("9")
        ) {
          alert("Please enter a word");
        } else {
          setInstrInput(instrVal);
        }
      };
    
      const addInstruction = () => {
        const newInstruction: Instruction = {
          id: Math.random(),
          name: instrInput
        };
        setInstructions([...instructions, newInstruction]);
        setPassedInstr([...passedInstr, newInstruction]);
        setInstrInput("");
      };
      
      
      const deleteInstruction = (id: number) => {
        setInstructions(
          instructions.filter((instruction) => instruction.id !== id),
        );
        if (passedInstr) {
          setPassedInstr(
            passedInstr.filter((instruction) => instruction.id !== id))
        }
      };
      
    return (
        <div>
            <div id="instructions-field" className="form-list">
              <label htmlFor="instructions" className="form-header">
                Instructions
              </label>
              <input
                type="text"
                placeholder="Please enter an instruction"
                id="instruction-input"
                onChange={handleInstrInputChange}
                value={instrInput}
                className="instruction-inputs"
                />
              <ul id="ingredient-list">
                {instructions.map((instruction: Instruction) => {
                  return (
                    <div className="added-ingredient">
                      <li key={instruction.id} className="ingredient-li">
                        {instruction.name}
                      </li>
                      <div title="Edit ingredient">
                        <svg
                          width="104"
                          height="107"
                          viewBox="0 0 104 107"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ingredient-icon"
                          id="edit-icon"
                          >
                          <rect
                            x="86.0303"
                            width="24"
                            height="95"
                            transform="rotate(43.1998 86.0303 0)"
                            fill="black"
                            />
                          <path
                            d="M7.77749 98.9411L20.6636 72.5828L34.1358 86.0549L7.77749 98.9411Z"
                            fill="black"
                            />
                        </svg>
                      </div>
                      <div
                        title="Delete ingredient"
                        onClick={() => deleteInstruction(instruction.id)}
                        >
                        <svg
                          width="81"
                          height="147"
                          viewBox="0 0 81 147"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ingredient-icon"
                          id="trash-icon"
                          >
                          <rect
                            y="36"
                            width="81"
                            height="111"
                            fill="black"
                            className="trash-svg"
                            />
                          <rect
                            y="13"
                            width="81"
                            height="16"
                            fill="black"
                            className="trash-svg"
                            />
                          <path
                            d="M17 0H64V13L40.5 0L17 13V0Z"
                            fill="black"
                            className="trash-svg"
                            />
                          <rect
                            x="13"
                            y="60"
                            width="8"
                            height="63"
                            fill="white"
                            />
                          <rect
                            x="37"
                            y="60"
                            width="8"
                            height="63"
                            fill="white"
                            />
                          <rect
                            x="61"
                            y="60"
                            width="8"
                            height="63"
                            fill="white"
                            />
                        </svg>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div id="add-ing-row" onClick={addInstruction}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="add-icon"
                >
                <path
                  d="M49 25C49 38.2548 38.2548 49 25 49C11.7452 49 1 38.2548 1 25C1 11.7452 11.7452 1 25 1C38.2548 1 49 11.7452 49 25Z"
                  stroke-width="2"
                  stroke="black"
                  className="add-icon-element"
                  />
                <path
                  d="M25.0001 17.5212V24.9999M25.0001 24.9999V32.4785M25.0001 24.9999H17.5215M25.0001 24.9999H32.4787"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#1E1E1E"
                  className="add-icon-element"
                  />
              </svg>
              <p id="ingredient-btn">Add Instruction</p>
            </div>
        </div>
    )
}

export default InstructionList;