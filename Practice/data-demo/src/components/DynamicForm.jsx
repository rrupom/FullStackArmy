import { useState } from "react";

const formFiedls = {
  name: {
    label: "What is your name?",
    type: "text",
    placeholder: "Rakib Talukder",
  },
  email: {
    label: "What is your email?",
    type: "email",
    placeholder: "rakib@example.com",
  },
  phone: {
    label: "What is your phone number?",
    type: "tel",
    placeholder: "+8801100000",
  },
  password: {
    label: "Type your password",
    type: "password",
    placeholder: "**",
  },
  birthDay: {
    label: "What is your Birth Date?",
    type: "date",
    placeholder: "1-1-1971",
  },
  age: {
    type: "number",
    label: "What is your age?",
    placeholder: 20,
  },
};

const transformObject = (obj) => {
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = {
      ...obj[cur],
      value: "",
      name: cur,
    };

    return acc;
  }, {});
};

function DynamicForm() {
  const [formState, setFormState] = useState(transformObject(formFiedls));
  console.log(formState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: {
        ...formState[event.target.name],
        value: event.target.value,
      },
    });
  };
  return (
    <div>
      <h1>Hello Dynamic Form</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formState).map((item, index) => (
          <div>
            <label>{formState[item].label}</label>
            <input
              name={formState[item].name}
              type={formState[item].type}
              placeholder={formState[item].placeholder}
              value={formState[item].value}
              onChange={handleChange}
            />
          </div>
        ))}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default DynamicForm;
