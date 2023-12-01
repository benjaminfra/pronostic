import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

const DividerWithText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box position="relative" my="2em">
      <Divider />
      <AbsoluteCenter bg="white" px="4">
        {text}
      </AbsoluteCenter>
    </Box>
  );
};

export default DividerWithText;
