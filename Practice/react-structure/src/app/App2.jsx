import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/buttons/Button";

const init = {
  title: "",
  bio: "",
  skills: "",
};

const init_2 = {
  title: "",
  bio: "",
  skills: "",
};

const App = () => {
  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focuses, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });

    /**
     * When we start typing in the input box, error message must have gone. To solve this problem the below code will help
     */

    const key = event.target.name;
    const { errors } = checkValidity(values);

    if (!errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { errors, isValid } = checkValidity(values);
    if (isValid) {
      console.log(values);
      setErrors({ ...errors });
    } else {
      setErrors({ ...errors });
    }

    console.log(values);
  };

  const handleFocus = (event) => {
    setFocuses((prev) => ({
      ...prev,
      [event.target.name]: true,
    }));
  };

  const handleBlur = (event) => {
    const key = event.target.name;
    const { errors } = checkValidity(values);
    if (errors[key] && focuses[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
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
            value={values.title}
            name={"title"}
            placeholder={"Software Engineer"}
            label={"Title:"}
            error={errors.title}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={values.bio}
            name={"bio"}
            placeholder={"I am a software engineer"}
            label={"Bio:"}
            error={errors.bio}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={values.skills}
            name={"skills"}
            placeholder={"javascript, react"}
            label={"Skills:"}
            error={errors.skills}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default App;
