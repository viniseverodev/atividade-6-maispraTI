import { useNavigate } from "react-router-dom";

const styles = [
  { id: "css-global", name: "CSS Global", path: "/01-css-global" },
  { id: "css-modules", name: "CSS Modules", path: "/02-css-modules" },
  { id: "tailwind", name: "Tailwind", path: "/03-tailwind" },
  {
    id: "css-styled-components",
    name: "CSS Styled Components",
    path: "/04-css-styled-components",
  },
];

const SelectorStyles = ({ activeStyle, onStyleChange }) => {
  const navigate = useNavigate();

  const handleStyles = (stylesID, path) => {
    onStyleChange = stylesID;
    navigate(path);
  };

  return (
    <section className="dark:bg-neutral-900 py-3">
      <div className="flex flex-col w-120 m-auto justify-center items-center rounded-md py-3 border-1 border-zinc-300 dark:border-zinc-600">
        <h2 className="m-2 dark:text-zinc-100">
          Selecione a Abordagem de Estilização
        </h2>
        <div className="flex gap-1">
          {styles.map((style) => (
            <button
              key={style.id}
              className={`bg-blue-400 text-zinc-100 rounded-md px-1.5 py-0.5 cursor-pointer shadow transition duration-300 ease-in-out hover:scale-125 ${
                activeStyle === style.id ? "active" : ""
              }`}
              onClick={() => handleStyles(style.id, style.path)}
            >
              <span className="text-sm font-semibold">{style.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectorStyles;
