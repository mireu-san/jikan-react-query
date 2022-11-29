import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export default function App = () => {
  const { data, isLoading } = useQuery(["unique"], () => {
    return Axios.get("https://api.jikan.moe/v4/anime?q=genshin&sfw").then(
      (res) => res.data
    );
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return <h1>{data.id}</h1>;
};
