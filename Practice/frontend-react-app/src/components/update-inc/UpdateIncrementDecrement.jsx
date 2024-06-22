function UpdateIncrementDecrement({
  increment,
  decrement,
  handleIncrementChange,
  handleDecrementChange,
}) {
  return (
    <div>
      <label htmlFor="increment">Increment</label>
      <input
        type="number"
        id="increment"
        value={increment}
        onChange={handleIncrementChange}
      />
      <br />
      <label htmlFor="decrement">Decrement</label>
      <input
        type="number"
        id="decrement"
        value={decrement}
        onChange={handleDecrementChange}
      />
      <br />
    </div>
  );
}

export default UpdateIncrementDecrement;
