import { useTranslation } from "react-i18next";
import Ball from "../icons/Ball";
import UserGroup from "../icons/UserGroup";
import MenuItem from "./MenuItem";
import Trophy from "../icons/Trophy";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div
      className="fixed  w-screen  bg-dark-night-blue  flex  justify-around
        lg:h-screen xl:w-1/6 lg:w-1/5 lg:top-0 lg:left-0 lg:ml-5 lg:flex-col lg:justify-start 
        max-lg:bottom-0 max-lg:border max-lg:border-t-white"
    >
      <div className="max-md:flex-1">
        <MenuItem icon={<Ball />} link="/pronostic" name={t("Menu.play")} />
      </div>
      <div className="max-md:flex-1">
        <MenuItem icon={<UserGroup />} link="/" name={t("Menu.leagues")} />
      </div>
      <div className="max-md:flex-1">
        <MenuItem icon={<Trophy />} link="/" name={t("Menu.ranking")} />
      </div>
    </div>
  );
};

export default Menu;
