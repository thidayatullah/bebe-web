import { Box } from "@chakra-ui/react";

export type ColorTileProps = {
  color: string;
  name: string;
  onClick?: (name: string) => void;
};

const ColorTile = (props: ColorTileProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.name);
    }
  };

  return (
    <Box
      width="110px"
      height="140px"
      bg={props.color}
      shadow="md"
      borderRadius="xl"
      border="2px"
      borderColor="blackAlpha.200"
      _active={{
        transform: "scale(0.98)",
      }}
      onClick={handleClick}
    ></Box>
  );
};

export default ColorTile;
