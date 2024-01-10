import { useTranslation } from "react-i18next";
import Ball from "../icons/Ball";
import UserGroup from "../icons/UserGroup";
import MenuItem from "./MenuItem";
import Trophy from "../icons/Trophy";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed md:h-screen lg:w-1/6 md:w-1/5 w-screen md:top-0 md:left-0 max-md:bottom-0 bg-dark-night-blue md:ml-5 flex md:flex-col justify-around md:justify-start max-md:border max-md:border-t-white">
      <div>
        <MenuItem icon={<Ball />} link="/pronostic" name={t("Menu.play")} />
      </div>
      <div>
        <MenuItem icon={<UserGroup />} link="/" name={t("Menu.leagues")} />
      </div>
      <div>
        <MenuItem icon={<Trophy />} link="/" name={t("Menu.ranking")} />
      </div>
    </div>
  );
};

export default Menu;
