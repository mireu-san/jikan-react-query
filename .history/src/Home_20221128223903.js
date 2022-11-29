import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  //   https://documenter.getpostman.com/view/1946054/S11HvKSz#b5e4e9b6-96c0-4690-8a2a-274ac2d1020c
  if (isError) {
    return <h1> Sorry, there was an error </h1>;
  }

  if (isLoading) {
    return <h1> Loading...</h1>;
  }

  return (
    <h1>
      This is the home page <p>{catData?.fact}</p>
      <button onClick={refetch}> Update Data </button>
    </h1>
  );
};

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
