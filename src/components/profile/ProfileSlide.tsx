import { Profile } from "@/types/users";
import Button from "../button/Button";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type ProfileSlideProps = {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
};

const ProfilSlide: React.FC<ProfileSlideProps> = ({
  isOpen,
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

  const mainClasses = `
    ${
      isOpen
        ? "transform translate-x-0 ease-in duration-300"
        : "transform translate-x-full easy-out duration-300"
    }  
    grow
    sm:absolute z-20
    transition-transform
    sm:fixed sm:top-0 sm:h-screen xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 sm:right-0
  `;

  const buttonClasses = `
    ${isOpen ? "" : "hidden"}
    absolute 
    right-4 top-4 z-20
    sm:right-auto
    sm:left-0 sm:-translate-x-1/2
  `;

  return (
    <div data-test="profile-slide" className={mainClasses}>
      <div className={buttonClasses}>
        <Button onClick={onClose}>X</Button>
      </div>
      <div className="bg-slate-800 relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden p-6 sm:z-25">
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
