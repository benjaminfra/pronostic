import { Box, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box>{t("ConfirmEmail.description")}</Box>
      <Box>
        <Button>
          <Link to="/">{t("ConfirmEmail.redirect")}</Link>
        </Button>
      </Box>
    </>
  );
};

export default ConfirmEmail;
