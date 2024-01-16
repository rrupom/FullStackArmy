import PropTypes from "prop-types";
import HistoryItem from "./HistoryItem";

const HistorySection = ({ histories, handleRestoreBtn }) => {
  return (
    <div>
      {histories.length == 0 ? (
        <p>
          <small>There is no history</small>
        </p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <HistoryItem
              key={historyItem.id}
              historyItem={historyItem}
              handleRestoreBtn={handleRestoreBtn}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

HistorySection.propTypes = {
  histories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
      }).isRequired,
      operation: PropTypes.string.isRequired,
      result: PropTypes.number.isRequired,
      date: PropTypes.object.isRequired,
    })
  ),
  handleRestoreBtn: PropTypes.func.isRequired,
};

export default HistorySection;
