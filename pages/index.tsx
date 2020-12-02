import Navbar from "../components/Navbar";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <div className="h-screen dark:bg-black">
      <Navbar />
      <h1 className="text-red-500 dark:text-blue-500">Hello</h1>
    </div>
  );
}
