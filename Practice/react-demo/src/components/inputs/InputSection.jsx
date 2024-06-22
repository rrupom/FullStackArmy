import PropTypes from "prop-types";
import NumberField from "../ui/NumberField";

const InputSection = ({ inputState, handleInputFields }) => {
  return (
    <div>
      <p>Inputs</p>
      <NumberField value={inputState.a} onchange={handleInputFields} name="a" />
      <NumberField value={inputState.b} onchange={handleInputFields} name="b" />
    </div>
  );
};

InputSection.propTypes = {
  inputState: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputFields: PropTypes.func.isRequired,
};

export default InputSection;
