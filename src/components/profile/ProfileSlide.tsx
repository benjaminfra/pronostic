import { Profile } from "@/types/users";
import Button from "../button/Button";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type ProfileSlideProps = {
  isOpened: boolean;
  onClose: () => void;
  profile: Profile;
};

const ProfilSlide: React.FC<ProfileSlideProps> = ({
  isOpened,
  onClose,
  profile,
}) => {
  const { t } = useTranslation();
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSignOut = async () => {
    await signOut();
    onClose();
    navigate("/");
  };

  const buttonClasses = `
  ${isOpened ? "block" : "hidden"}
    absolute
    right-4 top-4 z-20
    sm:right-auto
    sm:left-0 sm:-translate-x-1/2
  `;

  return (
    <div data-test="profile-slide">
      <div className={buttonClasses}>
        <Button onClick={onClose}>X</Button>
      </div>
      <div className="flex h-full w-full flex-col overflow-y-auto overflow-x-hidden p-6 sm:z-25">
        <div className="mt-8 grow">
          <div className="text-xl font-bold">{profile.username}</div>
        </div>
        <div className="text-center mt-8">
          <Button size="full" onClick={onSignOut}>
            {t("Auth.form.common.signOut")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilSlide;
