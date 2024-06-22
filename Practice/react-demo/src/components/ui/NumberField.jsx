import PropTypes from "prop-types";

const NumberField = ({ value, onchange, name }) => {
  const style = {
    padding: "0.25rem 1rem",
    borderRadius: "0.1rem",
    border: "1px solid gray",
    background: "#fff",
    outline: "none",
  };
  return (
    <input
      style={style}
      type="number"
      value={value}
      onChange={onchange}
      name={name}
    />
  );
};

NumberField.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NumberField;
