import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-blue-500 flex flex-1">
        <h2>Main</h2>
      </main>

      <footer className="bg-green-500">
        <h3>Footer</h3>
      </footer>
    </>
  );
}
