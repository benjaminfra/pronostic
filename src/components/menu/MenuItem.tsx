import { Link } from "react-router-dom";

type MenuItemProps = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ name, icon, link }) => {
  return (
    <Link
      to={link}
      className="flex flex-row items-center px-4 py-2 my-10 ease-in-out hover:-translate-y-1 hover:scale-110 transition-all"
    >
      <div className="mr-3">{icon}</div>
      <span className="2xl:text-3xl xl:text-2xl font-medium">{name}</span>
    </Link>
  );
};

export default MenuItem;
