import { Profile } from "@/types/users";
import Button from "../button/Button";
import LinkButton from "../button/LinkButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProfilSlide from "./ProfileSlide";
import Loader from "../loader/Loader";

type ProfileButtonProps = {
  loggedUser: Profile | undefined;
  isLoading: boolean;
};

const ProfileButton: React.FC<ProfileButtonProps> = ({
  loggedUser,
  isLoading,
}) => {
  const { t } = useTranslation();

  const [isProfileSlideOpen, setIsProfileSlideOpen] = useState<boolean>(false);

  let buttonProfile;
  if (loggedUser) {
    buttonProfile = (
      <Button
        className="ease-in-out hover:-translate-y-1 hover:scale-110 transition-all"
        size="lg"
        onClick={() => setIsProfileSlideOpen(true)}
        dataTest="profile-button"
      >
        {loggedUser.username}
      </Button>
    );
  } else {
    buttonProfile = (
      <LinkButton
        to="/signIn"
        disabled={isLoading}
        size="lg"
        dataTest="signIn-button"
      >
        {isLoading ? (
          <Loader dataTest="signIn-loader" />
        ) : (
          t("Auth.form.common.signIn")
        )}
      </LinkButton>
    );
  }

  return (
    <>
      <div className="absolute top-0 right-0 z-10 m-6 inline-block">
        {buttonProfile}
      </div>
      {loggedUser && isProfileSlideOpen && (
        <ProfilSlide
          isOpen={isProfileSlideOpen}
          onClose={() => setIsProfileSlideOpen(false)}
          profile={loggedUser as Profile}
        />
      )}
    </>
  );
};

export default ProfileButton;
