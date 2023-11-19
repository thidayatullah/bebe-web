import {
  Container,
  Box,
  HStack,
  VStack,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import BottomMenu from "../components/bottomMenu";
import { useEffect, useState } from "react";
import ImageTile from "../components/imageTile";
import Head from "next/head";
import { useRouter } from "next/router";
import BackButton from "@/components/backButton";
import DetailModal from "@/components/detailModal";

const NumbersPage = () => {
  const questionAudioPath = "/sounds/color-question-main.mp3";

  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const playSound = (path: string) => {
    const sound = new Audio(path);
    sound.play();
  };

  const resetSound = (path: string) => {
    const sound = new Audio(path);
    sound.pause();
    sound.currentTime = 0;
  };

  const handleTileClick = (id: string, soundFileDuration: number) => {
    //punculin modal
    setClickedTile({
      id: id,
      soundFileDuration: soundFileDuration,
    });
    onOpen();
  };

  const [tiles, setTiles] = useState([
    {
      id: "cat",
      soundFileDuration: 3500,
    },

    {
      id: "cow",
      soundFileDuration: 3250,
    },

    {
      id: "horse",
      soundFileDuration: 3300,
    },

    {
      id: "bird",
      soundFileDuration: 3100,
    },

    {
      id: "dog",
      soundFileDuration: 2700,
    },

    {
      id: "goat",
      soundFileDuration: 2320,
    },

    {
      id: "frog",
      soundFileDuration: 3250,
    },

    {
      id: "rooster",
      soundFileDuration: 4500,
    },

    {
      id: "duck",
      soundFileDuration: 2250,
    },
  ]);

  const [shouldShuffle, setShouldShuffle] = useState(false);

  const [clickedTile, setClickedTile] = useState({
    id: "",
    soundFileDuration: 0,
  });

  const handleTopButtonClicked = () => {
    setShouldShuffle(!shouldShuffle);
  };

  useEffect(() => {
    setTiles(tiles.sort(() => Math.random() - 0.5));
  }, [shouldShuffle, tiles]);

  const generateTiles = (forRow: number) => {
    let rowTiles = tiles.slice(0, 3);
    if (forRow === 2) {
      rowTiles = tiles.slice(3, 6);
    } else if (forRow === 3) {
      rowTiles = tiles.slice(6, 9);
    }

    return rowTiles.map((item, i) => {
      return (
        <ImageTile
          key={i}
          id={item.id}
          soundFileDuration={item.soundFileDuration}
          onClick={(id, soundFileDuration) => {
            handleTileClick(id, soundFileDuration ?? 0);
          }}
        />
      );
    });
  };

  return (
    <>
      <Head>
        <title>Bebe - Warna</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <Container
        bg="blue.50"
        maxW="full"
        mx="auto"
        height="100vh"
        position="relative"
        p="4"
      >
        <VStack spacing="4">
          <BackButton />
          <Box
            width="80px"
            bg="purple.400"
            shadow="md"
            height="20"
            borderRadius="full"
            alignContent="center"
            padding="2"
            border="2px"
            borderColor="blackAlpha.200"
            _active={{
              bg: "purple.500",
              transform: "scale(0.98)",
            }}
            onClick={() => {
              handleTopButtonClicked();
            }}
          >
            <Image src="/images/shuffle.png" alt="Shuffle" objectFit="fill" />
          </Box>
          <VStack height="full" flex="1">
            <HStack>{generateTiles(1)}</HStack>
            <HStack>{generateTiles(2)}</HStack>
            <HStack>{generateTiles(3)}</HStack>
          </VStack>
        </VStack>
        {isOpen && (
          <DetailModal
            isOpen={isOpen}
            id={clickedTile.id}
            onClose={onClose}
            shouldPlaySound={true}
            soundFileDuration={clickedTile.soundFileDuration}
          />
        )}
        <BottomMenu
          selectedIndex={0}
          onClick={(index) => {
            if (index === 0) {
              router.push("/animal");
            } else {
              router.push("/animal-quiz");
            }
          }}
        />
      </Container>
    </>
  );
};

export default NumbersPage;
