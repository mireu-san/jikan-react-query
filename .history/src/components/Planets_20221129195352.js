import React from "react";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = fetch("http://swapi.dev/api/planets");
};

const Planets = () => {
  const {} = useQuery("planets", fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>
    </div>
  );
};

export default Planets;
