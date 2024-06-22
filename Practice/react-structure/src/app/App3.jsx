import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/buttons/Button";
import { deepClone } from "../utils/object-utils";

const init = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

const App = () => {
  const [state, setState] = useState({ ...init });
  const [hasError, setHasError] = useState(false);

  const mapStateToValues = (state) => {
    return Object.keys(state).reduce((acc, cur) => {
      acc[cur] = state[cur].value;
      return acc;
    }, {});
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const oldState = deepClone(state);
    const values = mapStateToValues(oldState);
    const { errors } = checkValidity(values);
    oldState[name].value = value;

    if (oldState[name].focus && errors[name]) {
      oldState[name].error = errors[name];
    } else {
      oldState[name].error = "";
    }

    setState(oldState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = mapStateToValues(state);

    const { errors, isValid } = checkValidity(values);
    if (isValid) {
      console.log(state);
    } else {
      const oldState = deepClone(state);
      Object.keys(errors).forEach((key) => {
        oldState[key].error = errors[key];
      });

      setState(oldState);
    }
  };

  const handleFocus = (event) => {
    const { name } = event.target;
    const oldState = deepClone(state);
    oldState[name].focus = true;
    setState(oldState);
  };

  const handleBlur = (event) => {
    const key = event.target.name;
    const values = mapStateToValues(state);
    const { errors } = checkValidity(values);
    const oldState = deepClone(state);

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

  const checkValidity = (values) => {
    const errors = {
      title: "",
      bio: "",
      skills: "",
    };
    const { title, bio, skills } = values;
    if (!title) {
      errors.title = "Invalid title";
    }
    if (!bio) {
      errors.bio = "Invalid bio";
    }
    if (!skills) {
      errors.skills = "Invalid skills";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div className="root">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <InputGroup
            value={state.title.value}
            name={"title"}
            placeholder={"Software Engineer"}
            label={"Title:"}
            error={state.title.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.bio.value}
            name={"bio"}
            placeholder={"I am a software engineer"}
            label={"Bio:"}
            error={state.bio.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.skills.value}
            name={"skills"}
            placeholder={"javascript, react"}
            label={"Skills:"}
            error={state.skills.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button type="submit" disabled={hasError}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default App;
