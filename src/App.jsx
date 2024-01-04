import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1300,
    expectedReturn: 7,
    duration: 15,
  });

  const inputIsValid =
    userInput.duration > 0 &&
    userInput.initialInvestment >= 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn >= 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && (
        <p className="center">please enter valid input data </p>
      )}
      {/* <div className="center"></div> */}
    </div>
  );
}

export default App;
