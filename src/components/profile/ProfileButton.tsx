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

  const transitionClasses = `transition-all  duration-300 
    ${
      isProfileSlideOpen ? "translate-x-0 ease-out" : "translate-x-full ease-in"
    }`;

  const profilSlideDivClasses = `${transitionClasses} h-full bg-slate-800 `;

  const mainDivClasses = isProfileSlideOpen
    ? "fixed inset-0 z-50 flex h-full w-full justify-end bg-black/80"
    : "";

  const widthClasses = `grow md:fixed absolute top-0 h-screen right-0 ${
    isProfileSlideOpen
      ? "2xl:w-1/5 xl:w-1/4 lg:w-1/3 sm:w-2/3 max-sm:w-screen"
      : "w-0"
  }`;

  const divContent = (
    <div className={mainDivClasses}>
      <div className={widthClasses}>
        <div className="absolute top-0 right-0 m-6 inline-block ">
          {buttonProfile}
        </div>
        <div className={profilSlideDivClasses}>
          {loggedUser && (
            <ProfilSlide
              isOpened={isProfileSlideOpen}
              onClose={() => setIsProfileSlideOpen(false)}
              profile={loggedUser as Profile}
            />
          )}
        </div>
      </div>
    </div>
  );

  return divContent;
};

export default ProfileButton;
