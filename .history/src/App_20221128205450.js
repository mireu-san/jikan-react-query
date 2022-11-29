import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const App = () => {
  const { data } = useQuery(["unique"], () => {
    return Axios.get("https://api.jikan.moe/v4/anime").then((res) => res.data);
  });

  return <h1>{data.id}</h1>;
};

export default App;
