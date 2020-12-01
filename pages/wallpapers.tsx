import { useTheme } from "../components/theme";

const { STRAPI_URL } = process.env;

export const getStaticProps = async () => {
  const res = await fetch(`${STRAPI_URL}/wallpapers`);
  const wallpapers = await res.json();

  return {
    props: {
      wallpapers,
    },
  };
};

const Wallpapers = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="bg-red-500 h-screen dark:bg-blue-500">
      <h1 className="">Wallpapers</h1>
      <button type="button" onClick={toggleTheme}>
        Toggle
      </button>
    </div>
  );
};

export default Wallpapers;
