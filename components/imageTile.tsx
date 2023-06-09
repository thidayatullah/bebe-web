import { Box } from "@chakra-ui/react";

export type ImageTileProps = {
  id: string;
  soundFileDuration?: number;
  onClick?: (id: string, soundFileDuration?: number) => void;
};

const ImageTile = (props: ImageTileProps) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.id, props.soundFileDuration);
    }
  };

  return (
    <Box
      width="110px"
      height="140px"
      bgImage={"/images/animals/thumbnail/" + props.id + ".jpg"}
      shadow="md"
      borderRadius="xl"
      _active={{
        transform: "scale(0.98)",
      }}
      onClick={handleClick}
    ></Box>
  );
};

export default ImageTile;
