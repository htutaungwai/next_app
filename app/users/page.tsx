import React from "react";
import ProductCard from "../components/ProductCard";

interface User {
  id: number;
  name: string;
}
const UsersPage = async () => {
  const rest = await fetch("https://jsonplaceholder.typicode.com/users/", {
    next: { revalidate: 10 },
  });
  const users: User[] = await rest.json();
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
