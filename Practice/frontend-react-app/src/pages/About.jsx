import { useState } from "react";
import Layout from "../components/layout/Layout";
import DisplayCount from "../components/display-count/DisplayCount";
import Buttons from "../components/buttons/Buttons";
import UpdateIncrementDecrement from "../components/update-inc/UpdateIncrementDecrement";

function About() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const [decrementValue, setDecrementValue] = useState(1);

  function increment() {
    setCount(count + incrementValue);
  }

  function decrement() {
    setCount(count - decrementValue);
  }

  function handleIncrementChange(e) {
    setIncrementValue(+e.target.value);
  }

  function handleDecrementChange(e) {
    setDecrementValue(+e.target.value);
  }

  return (
    <Layout>
      <h1>Hello.. I am About Page</h1>
      <DisplayCount count={count} />
      <UpdateIncrementDecrement
        increment={incrementValue}
        decrement={decrementValue}
        handleIncrementChange={handleIncrementChange}
        handleDecrementChange={handleDecrementChange}
      />
      <Buttons increment={increment} decrement={decrement} />
    </Layout>
  );
}

export default About;
