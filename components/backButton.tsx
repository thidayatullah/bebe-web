import { Box } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  return (
    <Box
      position="fixed"
      left="4"
      top="4"
      borderColor="blackAlpha.200"
      _active={{
        transform: "scale(0.98)",
      }}
      p="2"
      borderRadius="full"
      bg="white"
      shadow="base"
      onClick={() => {
        router.push("/");
      }}
    >
      <ArrowBackIcon
        width="24px"
        height="24px"
        color="gray"
        objectFit="scale-down"
      />
    </Box>
  );
};

export default BackButton;
