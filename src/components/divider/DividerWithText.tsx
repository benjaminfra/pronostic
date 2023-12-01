import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

const DividerWithText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Box position="relative" my="2em" data-test="dividerBox">
      <Divider data-test="divider" />
      <AbsoluteCenter bg="white" px="4" data-test="absoluteCenter">
        {text}
      </AbsoluteCenter>
    </Box>
  );
};

export default DividerWithText;
