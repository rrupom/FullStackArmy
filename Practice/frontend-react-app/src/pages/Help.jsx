import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

function Help() {
  const [state, setState] = useState({ name: "" });
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setState({ name: "RT Rupom" });
    }, 5 * 1000);
    console.log("set timeout");
  }, []);

  console.log("Rendering");

  const data = [
    {
      name: "Rakib Talukder Rupom",
      email: "rakib@gmail.com",
    },
    {
      name: "Mahbub Talukder",
      email: "mahbub@gmail.com",
    },
    {
      name: "Talukder Rakib Rupom",
      email: "talukder@gmail.com",
    },
    {
      name: "Marajul Islam Shawn",
      email: "marajul@gmail.com",
    },
  ];

  return (
    <Layout>
      {/* {name && <h1> Hello {name}... I am Help Page</h1>}
      {!name && <h1>Hello Guest... I am Help Page</h1>} */}
      {state.name ? (
        <h1>Hello {state.name}... I am Help Page</h1>
      ) : (
        <h1>Hello Guest... I am Help Page</h1>
      )}
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      ) : (
        <h1>No Data Provided</h1>
      )}
    </Layout>
  );
}

export default Help;
