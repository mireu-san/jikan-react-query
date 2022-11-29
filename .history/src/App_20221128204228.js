import { useQuery } from "@tanstack/react-query";

export const App = () => {
  const {} = useQuery(["unique"], test);

  return <h1>test</h1>;
};
