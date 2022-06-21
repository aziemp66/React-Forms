import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isCorrectInput, setIsCorrectInput] = useState(true);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangedHandler = (event) => {
    setEnteredNameTouched(true);
    const { value } = event.target;
    const input = value.trim();

    if (input === "" || input.length < 1) {
      setIsCorrectInput(false);
    } else {
      setIsCorrectInput(true);
    }

    setEnteredName(input);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName === "" || enteredName.length < 1) {
      return setIsCorrectInput(false);
    }
    setIsCorrectInput(true);

    setEnteredName("");
  };

  const nameInputIsInvalid = !isCorrectInput && enteredNameTouched;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${nameInputIsInvalid && `invalid`}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangedHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name Must Not Be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
