import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/breeds").then((res) => res.data);
  });

  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <h1>
      This is the home page <p>{data?.breeds}</p>
      <button onClick={refetch}> Update Data </button>
    </h1>
  );
};
