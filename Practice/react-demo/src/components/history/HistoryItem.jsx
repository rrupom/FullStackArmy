import PropTypes from "prop-types";
import Button from "../ui/Button";

const HistoryItem = ({ historyItem, disabled, handleRestoreBtn }) => {
  return (
    <li key={historyItem.id}>
      <p>
        Operation :{" "}
        {`${historyItem.inputs.a} ${historyItem.operation} ${historyItem.inputs.b}`}
        , Result: {historyItem.result}
      </p>
      <small>{historyItem.date.toLocaleTimeString()}</small>
      <br />
      <Button
        text="Restore"
        onClick={() => handleRestoreBtn(historyItem)}
        disabled={disabled}
      />
    </li>
  );
};

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    inputs: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
    }).isRequired,
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    date: PropTypes.object.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
  handleRestoreBtn: PropTypes.func.isRequired,
};

HistoryItem.defaultProps = {
  disabled: false,
};

export default HistoryItem;
