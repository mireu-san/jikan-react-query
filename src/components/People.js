import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";
import axios from "axios";

// const fetchPeople = async () => {
//   const res = await fetch("http://swapi.dev/api/people/");
//   return res.json();
// };

const fetchPeople = async () => {
  return await axios.get("https://swapi.dev/api/people/").then((respond) => {
    return respond.data;
  });
};

const People = () => {
  const { data, status } = useQuery("People", fetchPeople);
  console.log(data);

  return (
    <div>
      <h2>People</h2>

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fetching data!</div>}

      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
