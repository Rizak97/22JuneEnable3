import { useState } from "react";

const ProductTable = () => {
  const people = [
    {
      id: 1,
      name: "David de Gea",
      age: 31,
    },
    {
      id: 2,
      name: "Raphael Varane",
      age: 29,
    },
    {
      id: 3,
      name: "Jadon Sancho",
      age: 22,
    },
    {
      id: 4,
      name: "Bruno Fernandes",
      age: 27,
    },
    {
      id: 5,
      name: "Marcus Rashford",
      age: 24,
    }
  ];

  const [name, setName] = useState("");

  // the search result
  const [foundPeople, setFoundPeople] = useState(people);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = people.filter((person) => {
        return person.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundPeople(results);
    } else {
      setFoundPeople(people);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  return (
    <div className="Component">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter by Name"
      />

      <div className="">
        {foundPeople && foundPeople.length > 0 ? (
          foundPeople.map((person) => (
            <li key={person.id} className="">
              <span className="">{person.id} - </span>
              <span className="">{person.name} - </span>
              <span className="">{person.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No people found!</h1>
        )}
      </div>
    </div>
  );
};
export default ProductTable;
