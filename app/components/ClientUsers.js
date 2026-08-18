"use client";

import { useEffect, useState } from "react";

export default function ClientUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold text-green-600">
        Client-Side Rendering
      </h2>

      {loading ? (
        <p className="text-gray-600">Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div
              key={user.id}
              className="rounded-lg bg-white p-5 shadow"
            >
              <h3 className="text-lg font-bold text-gray-800">
                {user.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {user.email}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {user.address.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}