import { ServiceContext } from "@/provider/ServiceProvider";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";

const Profile = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState<string>("");

  const { userService } = useContext(ServiceContext);

  const submitChange = () => userService.updateUsername(username);
  const updateUsername = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  updateUsername;
  return (
    <>
      <FormControl>
        <FormLabel>{t("Profile.form.username.label")}</FormLabel>
        <Input type="username" value={username} onChange={updateUsername} />
        <FormHelperText>{t("Profile.form.username.helperText")}</FormHelperText>
      </FormControl>
      <Button onClick={submitChange}>Valider</Button>
    </>
  );
};

export default Profile;
