import { Link as CharkaLink, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const LinkButton: React.FC<{ buttonText: string; to: string }> = ({
  buttonText,
  to,
}) => {
  return (
    <CharkaLink as={ReactRouterLink} to={to}>
      <Button size="md" width="100%" colorScheme="yellow">
        {buttonText}
      </Button>
    </CharkaLink>
  );
};

export default LinkButton;
