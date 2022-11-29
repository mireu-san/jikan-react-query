import React from "react";
import { setQuery, useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("movieList", () =>
    fetch("https://yts.mx/api/v2/list_movies.json?with_images=true").then(
      (res) => res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul>
        {data.data.movies.map((movie, idx) => (
          <li key={idx}>
            <h5>{movie.title_long}</h5>
            <img src={movie.large_cover_image} alt="" />
            <p>장르 : {movie.genres[0]}</p>
            <p>상영시간 : {movie.runtime}분</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./Home";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// function App() {
//   const client = new QueryClient({
//     defaultOptions: {
//       queries: {
//         refetchOnWindowFocus: true,
//       },
//     },
//   });
//   return (
//     <div className="App">
//       <QueryClientProvider client={client}>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
//           </Routes>
//         </Router>
//       </QueryClientProvider>
//     </div>
//   );
// }

// export default App;
