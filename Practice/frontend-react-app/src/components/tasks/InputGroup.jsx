import { useState } from "react";

function InputGroup({ handleVisibility }) {
  const [visibility, setVisibility] = useState("all");
  const [checkbox, setChecked] = useState(false);
  return (
    <div>
      <div style={{ display: "inline-block", margin: "0 1rem" }}>
        <label htmlFor="input" style={{ padding: "0 0.5rem" }}>
          All
        </label>
        <input
          type="checkbox"
          id="input"
          checked={visibility === "all"}
          onChange={() => {
            setChecked(!checkbox);
            setVisibility("all");
            handleVisibility("all");
          }}
        />
      </div>
      <div style={{ display: "inline-block", margin: "0 1rem" }}>
        <label htmlFor="input" style={{ padding: "0 0.5rem" }}>
          Completed
        </label>
        <input
          type="checkbox"
          id="input"
          checked={visibility === "completed"}
          onChange={() => {
            setChecked(!checkbox);
            setVisibility("completed");
            handleVisibility("completed");
          }}
        />
      </div>
      <div style={{ display: "inline-block", margin: "0 1rem" }}>
        <label htmlFor="input" style={{ padding: "0 0.5rem" }}>
          Incomplete
        </label>
        <input
          type="checkbox"
          id="input"
          checked={visibility === "incomplete"}
          onChange={() => {
            setChecked(!checkbox);
            setVisibility("incomplete");
            handleVisibility("incomplete");
          }}
        />
      </div>
    </div>
  );
}

export default InputGroup;
