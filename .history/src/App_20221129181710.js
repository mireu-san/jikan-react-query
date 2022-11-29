import React from "react";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isLoading, error, data } = useQuery("movieList", () =>
    fetch("https://yts.mx/api/v2/list_movies.json?with_images=true").then(
      (res) => res.json()
    )
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
