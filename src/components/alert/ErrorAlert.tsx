import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type ErrorAlert = {
  description: string;
};

const ErrorAlert = ({ description }: ErrorAlert) => {
  const { t } = useTranslation();
  return (
    <Alert status="error" rounded="5px">
      <AlertIcon />
      <Box>
        <AlertTitle>{t("common.error.title")}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Box>
    </Alert>
  );
};

export default ErrorAlert;
