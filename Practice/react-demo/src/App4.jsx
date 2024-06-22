/**
 * DONE: Handle user input fields
 * DONE: Handle Operations
 * DONE: Handle a list of histories
 * DONE: Render history list
 * TODO: Restore the history
 *
 */

import { useState } from "react";
import InputSection from "./components/inputs/InputSection";
import OperationSection from "./components/operations/OperationSection";
import HistorySection from "./components/history/HistorySection";

function* generateId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idGenerator = generateId();

const initialInputState = {
  a: 10,
  b: 20,
};

const App3 = () => {
  const [inputState, setInputState] = useState({ ...initialInputState });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleInputFields = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: parseInt(event.target.value),
    });
  };

  const handleClearOps = () => {
    setInputState(initialInputState);
    setResult(0);
  };

  const handleArithmaticOps = (operation) => {
    if (!inputState.a || !inputState.b) {
      alert("Invalid input");
      return;
    }

    const dynamicFunction = new Function(
      `return ${inputState.a} ${operation} ${inputState.b}`
    );

    // setResult(eval(`${inputState.a} ${operation} ${inputState.b};`));

    const result = dynamicFunction();

    setResult(result);

    const historyItem = {
      id: idGenerator.next().value,
      inputs: { ...inputState },
      operation,
      result,
      date: new Date(),
    };
    console.log(historyItem);
    setHistories([historyItem, ...histories]);
  };

  const handleRestoreBtn = (historyItem) => {
    setInputState({ ...historyItem.inputs });
    handleArithmaticOps(historyItem.operation);
  };

  return (
    <div>
      <h1>Result: {result}</h1>
      <InputSection
        inputState={inputState}
        handleInputFields={handleInputFields}
      />
      <OperationSection
        handleArithmaticOps={handleArithmaticOps}
        handleClearOps={handleClearOps}
      />
      <HistorySection
        histories={histories}
        handleRestoreBtn={handleRestoreBtn}
      />
    </div>
  );
};

export default App3;
