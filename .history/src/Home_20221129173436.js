// import { useQuery } from "@tanstack/react-query";
// import Axios from "axios";

// export const Home = () => {
//   const { data, refetch } = useQuery(["cat"], () => {
//     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
//   });

//   return (
//     <h1>
//       This is the home page <p>{data?.fact}</p>
//       <button onClick={refetch}> Update Data </button>
//     </h1>
//   );
// };
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const { data, refetch } = useQuery("anime", () => {
    return Axios.get("https://api.jikan.moe/v4/top/anime?sfw=true").then(
      (res) => res.data
    );
  });

  return (
    <h1>
      This is the home page <p>{data?.streaming}</p>
      <button onClick={refetch}> Update Data </button>
    </h1>
  );
};

// https://documenter.getpostman.com/view/1946054/S11HvKSz#6e0a9a7f-c8aa-42c8-b968-bd7717b4ce12
