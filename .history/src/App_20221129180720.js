import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { isLoading, error, data } = useQuery("anime", () =>
    axios("https://random.dog/woof.json")
  );

  if (error) return <h1> Error: {error.message}, try again!</h1>;
  if (isLoading) return <h1> Loading... </h1>;
  return (
    <div>
      <img src={data.url} />
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
