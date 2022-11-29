import React, { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState();

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar />
      <div className="content"></div>
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
