import { useState } from "react";

function SingleTask({ task, updateTask }) {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked);
          updateTask(task.id, !checked);
        }}
      />
      <li style={{ display: "inline-block" }}>{task.text}</li>
    </div>
  );
}

export default SingleTask;
