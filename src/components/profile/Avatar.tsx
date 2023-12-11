import { Profile } from "@/types/users";
import Button from "../button/Button";
import LinkButton from "../button/LinkButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProfilSlide from "./ProfileSlide";

type AvatarProps = {
  loggedUser: Profile | undefined;
};

const Avatar: React.FC<AvatarProps> = ({ loggedUser }) => {
  const { t } = useTranslation();

  const [showSlide, setShowSlide] = useState<boolean>(false);

  let buttonProfile;
  if (loggedUser && !showSlide) {
    buttonProfile = (
      <Button onClick={() => setShowSlide(true)}>{loggedUser.username}</Button>
    );
  } else if (!loggedUser) {
    buttonProfile = (
      <LinkButton to="/signIn">{t("Auth.form.common.signIn")}</LinkButton>
    );
  }

  return (
    <>
      <div className="absolute top-0 right-0 z-10 m-4 inline-block">
        {buttonProfile}
      </div>
      {showSlide && (
        <ProfilSlide
          onClose={() => setShowSlide(false)}
          profile={loggedUser as Profile}
        />
      )}
    </>
  );
};

export default Avatar;
