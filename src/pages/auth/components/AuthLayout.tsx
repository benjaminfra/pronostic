import { Box, Text } from "@chakra-ui/react";
import React from "react";

const AuthLayout: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => {
  return (
    <>
      <Box
        maxWidth="560px"
        mx="auto"
        mt="10vh"
        border="1px"
        borderRadius="12px"
        pb="3em"
        borderColor="gray.400"
      >
        <Box
          py="1em"
          textAlign="center"
          borderBottom="1px"
          borderColor="gray.400"
        >
          <Text fontWeight="bold" fontSize="18px">
            {title}
          </Text>
        </Box>
        <Box px="2em">{children}</Box>
      </Box>
    </>
  );
};

export default AuthLayout;
