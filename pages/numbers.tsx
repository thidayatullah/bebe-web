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
import TextTile from "@/components/textTile";
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
      id: "1",
      title: "1",
    },
    {
      id: "2",
      title: "2",
    },
    {
      id: "3",
      title: "3",
    },
    {
      id: "4",
      title: "4",
    },
    {
      id: "5",
      title: "5",
    },
    {
      id: "6",
      title: "6",
    },
    {
      id: "7",
      title: "7",
    },
    {
      id: "8",
      title: "8",
    },
    {
      id: "9",
      title: "9",
    },
    {
      id: "10",
      title: "10",
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

  const generateTiles = (start: number, end: number) => {
    var tiles = [];
    for (let i = start; i <= end; i++) {
      tiles.push(
        <TextTile
          key={i}
          id={i.toString()}
          title={i.toString()}
          onClick={(id) => {}}
        />
      );
    }
    return tiles;

    // return rowTiles.map((item, i) => {
    //   return (
    //     <TextTile
    //       key={i}
    //       id={item.id}
    //       title={item.title}
    //       onClick={(id) => {}}
    //     />
    //   );
    // });
  };

  // useEffect(() => {
  //   setTiles(tiles.sort(() => Math.random() - 0.5));
  // }, [shouldShuffle, tiles]);

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
          <VStack height="full" flex="1" spacing={4}>
            <HStack spacing={6}>{generateTiles(1, 3)}</HStack>
            <HStack spacing={6}>{generateTiles(4, 6)}</HStack>
            <HStack spacing={6}>{generateTiles(7, 9)}</HStack>
            <HStack spacing={6}>{generateTiles(10, 10)}</HStack>
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
              router.push("/numbers");
            } else {
              router.push("/numbers-quiz");
            }
          }}
        />
      </Container>
    </>
  );
};

export default NumbersPage;
