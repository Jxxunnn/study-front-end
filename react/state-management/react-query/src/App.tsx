import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { isRouteErrorResponse } from "react-router-dom";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

interface UsersProps {
  id: number;
  name: string;
  [key: string]: string | number;
}

function Users() {
  const fetchUsers = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    return res.json();
  };

  const { isLoading, isError, data, error } = useQuery<UsersProps[]>(
    "users",
    fetchUsers
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;

    return <span>Error: {message}</span>;
  }

  console.log(data);

  return (
    <ul>
      {data?.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
}

export default App;
