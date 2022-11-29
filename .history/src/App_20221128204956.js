import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const App = () => {
  const { data } = useQuery(["unique"], () => {
    return Axios.get("https://api.jikan.moe/v4/anime/{id}/news&limit=10").then(
      (res) => res.data
    );
  });

  return <h1>test {data.fact}</h1>;
};

export default App;
