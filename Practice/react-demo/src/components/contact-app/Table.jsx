import { useState } from "react";

const Table = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  let filteredContacts = [];

  if (filter === "All") {
    filteredContacts = contacts;
  } else {
    filteredContacts = contacts.filter((contact) => contact.group === filter);
  }

  let finalList = filteredContacts.filter(
    (item) =>
      item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
      item.email.toLowerCase().indexOf(query.toLowerCase()) > -1
  );

  return (
    <>
      <div>
        Filter:
        <select value={filter} onChange={handleChange}>
          <option value="All">All</option>
          <option value="">None</option>
          <option value="home">Home</option>
          <option value="office">Office</option>
        </select>
        <input
          type="search"
          placeholder="search with name or email"
          value={query}
          onChange={handleQueryChange}
          style={{ width: "200px" }}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {finalList.map((contact, id) => (
            <tr key={id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
