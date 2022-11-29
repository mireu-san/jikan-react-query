import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const { data } = useQuery(["anime"], () => {
    return Axios.get("https://api.jikan.moe/v4/anime?q=genshin").then(
      (res) => res.data
    );
  });

  return <h1>{data.pagination}</h1>;
};

export default Home;

// import { useQuery } from "@tanstack/react-query";
// import Axios from "axios";

// export const Home = () => {
//   const {
//     data: catData,
//     isLoading,
//     isError,
//     refetch,
//   } = useQuery(["cat"], () => {
//     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
//   });

//   if (isError) {
//     return <h1> Sorry, there was an error </h1>;
//   }

//   if (isLoading) {
//     return <h1> Loading...</h1>;
//   }

//   return (
//     <h1>
//       This is the home page <p>{catData?.fact}</p>
//       <button onClick={refetch}> Update Data </button>
//     </h1>
//   );
// };
