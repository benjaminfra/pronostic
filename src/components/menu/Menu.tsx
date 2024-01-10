import { useTranslation } from "react-i18next";
import Ball from "../icons/Ball";
import UserGroup from "../icons/UserGroup";
import MenuItem from "./MenuItem";
import Trophy from "../icons/Trophy";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed h-screen lg:w-1/6 md:w-1/5 top-0 left-0 bg-dark-night-blue ml-5">
      <MenuItem icon={<Ball />} link="/pronostic" name={t("Menu.play")} />
      <MenuItem icon={<UserGroup />} link="/" name={t("Menu.leagues")} />
      <MenuItem icon={<Trophy />} link="/" name={t("Menu.ranking")} />
    </div>
  );
};

export default Menu;
