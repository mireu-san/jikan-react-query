import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
