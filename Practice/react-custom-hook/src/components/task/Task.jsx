import useForm from "../../hooks/useForm";
import Button from "../UI/Buttons/Button";

const init = {
  text: "",
  checked: false,
  group: "home",
  priority: "medium",
  file: "",
};

const Task = () => {
  const { formState, handleChange, handleSubmit, clear } = useForm({
    init,
    validate: true,
  });

  const submitCB = ({ values }) => {
    alert("[VALUES]" + JSON.stringify(values));
  };

  return (
    <div>
      <h1>Task Form</h1>
      <form onSubmit={(e) => handleSubmit(e, submitCB)}>
        <input
          type={"checkbox"}
          name={"checked"}
          checked={formState.checked.value}
          onChange={handleChange}
        />
        <input
          type={"text"}
          name={"text"}
          value={formState.text.value}
          onChange={handleChange}
        />
        <select
          name={"group"}
          value={formState.group.value}
          onChange={handleChange}
        >
          <option value="">Select Option</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
        <input
          type={"radio"}
          name={"priority"}
          value={"low"}
          onChange={handleChange}
        />
        Low
        <input
          type={"radio"}
          name={"priority"}
          value={"medium"}
          onChange={handleChange}
        />
        Medium
        <input
          type={"radio"}
          name={"priority"}
          value={"high"}
          onChange={handleChange}
        />
        High
        <input
          type={"file"}
          name={"file"}
          value={formState.file.value}
          onChange={handleChange}
        />
        <hr />
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button type={"submit"}>Submit</Button>
          <Button type={"reset"} onClick={clear}>
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Task;
