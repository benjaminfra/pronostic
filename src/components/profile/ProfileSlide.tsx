import { Profile } from "@/types/users";
import Button from "../button/Button";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

type ProfileSlideProps = {
  onClose: () => void;
  profile: Profile;
};

const ProfilSlide: React.FC<ProfileSlideProps> = ({ onClose, profile }) => {
  const { t } = useTranslation();
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSignOut = async () => {
    await signOut();
    onClose();
    navigate("/");
  };
  return (
    <div className="relative inset-y-0 right-0 grow max-sm:max-w-[320px] sm:absolute">
      <div className="absolute right-4 top-4 z-20 sm:right-auto sm:left-0 sm:-translate-x-1/2">
        <Button onClick={onClose}>X</Button>
      </div>
      <div className="bg-gray-300 relative flex h-full w-full flex-col overflow-y-auto overflow-x-hidden p-6">
        <div className="grow">{profile.username}</div>
        <div className="mt-8">
          <Button onClick={onSignOut}>{t("Auth.form.common.signOut")}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilSlide;
