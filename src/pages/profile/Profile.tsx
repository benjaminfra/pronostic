import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type ProfileProps = {
  user_id: string;
};

const Profile = ({ userId }: ProfileProps) => {
  const { t } = useTranslation();

  return (
    <FormControl>
      <FormLabel>{t("Profile.form.username.label")}</FormLabel>
      <Input type="username" />
      <FormHelperText>{t("Profile.form.username.helperText")}</FormHelperText>
    </FormControl>
  );
};

export default Profile;
