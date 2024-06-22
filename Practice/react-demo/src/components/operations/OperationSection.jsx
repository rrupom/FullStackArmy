import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import Button from "../ui/Button";

const OperationSection = ({ handleArithmaticOps, handleClearOps }) => {
  const operations = [
    {
      id: nanoid(),
      text: "+",
      onclick: () => handleArithmaticOps("+"),
    },
    {
      id: nanoid(),
      text: "-",
      onclick: () => handleArithmaticOps("-"),
    },
    {
      id: nanoid(),
      text: "*",
      onclick: () => handleArithmaticOps("*"),
    },
    {
      id: nanoid(),
      text: "/",
      onclick: () => handleArithmaticOps("/"),
    },
    {
      id: nanoid(),
      text: "Clear",
      onclick: handleClearOps,
    },
  ];
  return (
    <div>
      <p>Operations</p>
      <div>
        {operations.map((ops) => (
          <Button key={ops.id} text={ops.text} onClick={ops.onclick} />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleArithmaticOps: PropTypes.func.isRequired,
  handleClearOps: PropTypes.func.isRequired,
};

export default OperationSection;
