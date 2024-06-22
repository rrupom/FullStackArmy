import { useEffect, useState } from "react";

let timeInterval = null;

const App = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [timeCount, setTimeCount] = useState(5);

  useEffect(() => {
    if (count == 5) {
      setLock(true);
    }
  }, [count]);

  /**
   * 1.create an interval for timecount
   * 2. set count to 0, set lock to false and timecount to 5
   */

  useEffect(() => {
    if (lock && timeInterval === null) {
      timeInterval = setInterval(() => {
        setTimeCount((prevState) => prevState - 1);
      }, 1000);
    }
  }, [lock]);

  useEffect(() => {
    if (timeCount === 0) {
      clearInterval(timeInterval);
      setCount(0);
      setLock(false);
      setTimeCount(5);
    }
  }, [timeCount]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={(e) => setCount(count + 1)} disabled={lock}>
        ADD {lock && `(locked - ${timeCount}`}
      </button>
    </div>
  );
};

export default App;
