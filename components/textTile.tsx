import { Box, Text, Center, AbsoluteCenter } from "@chakra-ui/react";

export type TextTileProps = {
  id: string;
  title: string;
  bgColor?: string;
  textColor?: string;
  onClick?: (id: string) => void;
};

const TextTile = (props: TextTileProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.id);
    }
  };

  return (
    <Box
      width="100px"
      height="100px"
      bg={props.bgColor ? props.bgColor : "#2192FF"}
      shadow="md"
      borderRadius="full"
      _active={{
        transform: "scale(0.98)",
      }}
      onClick={handleClick}
      display="flex"
      alignItems="center"
      justifyContent="center"

      // p={4}
    >
      <Text
        // fontSize="6xl"
        // as="b"
        textStyle="textTile"
        color={props.textColor ? props.textColor : "white"}
      >
        {props.title}
      </Text>
    </Box>
  );
};

export default TextTile;
