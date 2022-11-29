import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { createRoot } from "react-dom/client";

// caution: not sure whether this page also visible on client side after publishing the page. If that so, remove this.
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
