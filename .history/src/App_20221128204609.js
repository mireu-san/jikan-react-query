import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const App = () => {
  const {} = useQuery(["unique"], () => {
    return Axios.get("https://api.jikan.moe/v4/anime/?limit=10").then(
      (res) => res.data
    );
  });

  return <h1>test</h1>;
};
