import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Box,
  CloseButton,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type ErrorAlert = {
  description: string;
};

const ErrorAlert = ({ description }: ErrorAlert) => {
  const { isOpen: isVisible, onClose } = useDisclosure({ defaultIsOpen: true });

  const { t } = useTranslation();
  return isVisible ? (
    <Alert status="error">
      <AlertIcon />
      <Box>
        <AlertTitle>{t("common.error.title")}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    <></>
  );
};

export default ErrorAlert;
