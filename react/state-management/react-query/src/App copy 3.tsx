import axios from "axios";
import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res.data)
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occured";

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
