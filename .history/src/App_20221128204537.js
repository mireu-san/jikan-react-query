import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const App = () => {
  const {} = useQuery(["unique"], () => {
    Axios.get("https://api.jikan.moe/v4/anime/?limit=10");
  });

  return <h1>test</h1>;
};
