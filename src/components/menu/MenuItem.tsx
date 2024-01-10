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
      className="flex flex-col md:flex-row items-center px-4 py-2 md:my-10 my-2 ease-in-out hover:-translate-y-1 hover:scale-110 transition-all"
    >
      <div className="md:mr-3">{icon}</div>
      <div className="2xl:text-3xl xl:text-2xl font-medium">{name}</div>
    </Link>
  );
};

export default MenuItem;
