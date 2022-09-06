import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ChakraProvider } from "@chakra-ui/react";

import Error from "./components/Error";
import MainPage from "./components/MainPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ErrorBoundary FallbackComponent={Error}>
          <MainPage />
        </ErrorBoundary>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
