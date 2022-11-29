import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const App = () => {
  const { data, isLoading } = useQuery(["unique"], () => {
    return Axios.get(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return <h1>{data.id}</h1>;
};

export default App;
