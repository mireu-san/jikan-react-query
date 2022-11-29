import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data } = useQuery(["unique"], () => {
    return Axios.get("https://api.jikan.moe/v4/anime?q=genshin&sfw").then(
      (res) => res.data
    );
  });

  return <h1>{data.fact}</h1>;
};

export default Home;
