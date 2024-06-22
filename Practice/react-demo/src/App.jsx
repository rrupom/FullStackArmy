import AppHook from "./AppHook";

const App = () => {
  const { user, currentId, prevHandler, nextHandler, maxId, minId } = AppHook();
  return (
    <div>
      <h1>User Details - {currentId}</h1>
      {user && (
        <div>
          name: {user.name}
          <br />
          email: {user.email}
          <br />
          phone: {user.phone}
        </div>
      )}
      <div>
        <button onClick={prevHandler} disabled={currentId === minId}>
          Previous
        </button>
        <button onClick={nextHandler} disabled={currentId === maxId}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
