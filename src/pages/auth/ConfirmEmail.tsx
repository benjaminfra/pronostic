import { Box, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box>{t("ConfirmEmail.description")}</Box>
      <Box>
        <Link to="/">
          <Button>{t("ConfirmEmail.redirect")}</Button>
        </Link>
      </Box>
    </>
  );
};

export default ConfirmEmail;
