import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>Error fetching data</div>}

      {status === "error" && <div>Error fetching data</div>}
      <p>{status}</p>
    </div>
  );
};

export default Planets;
