import ClientUsers from "./components/ClientUsers";

async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.json();
}

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Next.js Rendering
        </h1>

        <p className="mb-8 text-gray-600">
          Server-Side Rendering and Client-Side Rendering
        </p>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">
            Server-Side Rendering
          </h2>

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
                  {user.company.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ClientUsers />
      </div>
    </main>
  );
}