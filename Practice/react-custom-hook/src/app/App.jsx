import useForm from "../hooks/useForm";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/Buttons/Button";
import Task from "../components/task/Task";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};

const App = () => {
  const {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  } = useForm({ init, validate });

  const cb = ({ hasError, errors, values }) => {
    if (hasError) {
      alert("[Error]" + JSON.stringify(errors));
    } else {
      alert("[SUCCESS]" + JSON.stringify(values));
    }
  };

  return (
    <div>
      <h1>Personal Information Form</h1>
      <form onSubmit={(e) => handleSubmit(e, cb)}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <InputGroup
            value={state.firstName.value}
            label={"First Name:"}
            name={"firstName"}
            placeholder={"John"}
            type={"text"}
            error={state.firstName.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.lastName.value}
            label={"Last Name:"}
            name={"lastName"}
            type={"text"}
            placeholder={"Doe"}
            error={state.lastName.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.email.value}
            label={"Email:"}
            name={"email"}
            type={"email"}
            placeholder={"john@test.com"}
            error={state.email.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <InputGroup
            value={state.password.value}
            label={"password:"}
            name={"password"}
            type={"password"}
            placeholder={"*****"}
            error={state.password.error}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <div style={{ display: "flex", gap: "0.5rem" }}>
            <Button type="reset" onClick={clear}>
              Clear
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
      <hr />
      <Task />
    </div>
  );
};

export default App;
