import { Button, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export type BottomMenuProps = {
  selectedIndex: number;
  onClick: (index: number) => void;
};

const BottomMenu = ({ selectedIndex, onClick, ...props }: BottomMenuProps) => {
  const router = useRouter();

  return (
    <HStack
      {...props}
      bg="white"
      borderRadius="full"
      h="20"
      shadow="base"
      spacing="4"
      px="5"
      py="4"
      align="center"
      position="fixed"
      bottom="4"
      left="4"
      right="4"
      zIndex="999"
    >
      <Button
        colorScheme="purple"
        variant={selectedIndex === 0 ? "solid" : "ghost"}
        flex="1"
        h="100%"
        onClick={() => {
          onClick(0);
        }}
      >
        BELAJAR
      </Button>
      <Button
        colorScheme="purple"
        variant={selectedIndex === 1 ? "solid" : "ghost"}
        flex="1"
        h="100%"
        onClick={() => {
          onClick(1);
        }}
      >
        KUIS
      </Button>
    </HStack>
  );
};

export default BottomMenu;
