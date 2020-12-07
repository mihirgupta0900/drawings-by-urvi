import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-screen bg-bgc">
      <Navbar />
      <h1 className="text-red-500 dark:text-blue-500">Hello</h1>
    </div>
  );
}
