import { useState } from "react";

const CONTACT_FORM_INIT_STATE = {
  name: "",
  email: "",
  group: "",
};
const ContactFrom = ({ getContact }) => {
  const [values, setValues] = useState({ ...CONTACT_FORM_INIT_STATE });
  const { name, email, group } = values;

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getContact(values);
    setValues({ ...CONTACT_FORM_INIT_STATE });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="group">Group:</label>
        <select name="group" id="group" onChange={handleChange} value={group}>
          <option value="">Select Group</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
      </div>
      <br />
      <input type="submit" value="Create New Contact" />
    </form>
  );
};

export default ContactFrom;
