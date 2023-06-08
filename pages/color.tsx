import { Container, Box, HStack, VStack, Image } from "@chakra-ui/react";
import BottomMenu from "../components/bottomMenu";
import { useEffect } from "react";
import ColorTile from "../components/colorTile";
import Head from "next/head";
import { useRouter } from "next/router";
import BackButton from "@/components/backButton";

const ColorPage = () => {
  const questionAudioPath = "/sounds/color-question-main.mp3";
  const blackAudioPath = "/sounds/black.mp3";
  const brownAudioPath = "/sounds/brown.mp3";
  const blueAudioPath = "/sounds/blue.mp3";
  const greenAudioPath = "/sounds/green.mp3";
  const pinkAudioPath = "/sounds/pink.mp3";
  const purpleAudioPath = "/sounds/purple.mp3";
  const redAudioPath = "/sounds/red.mp3";
  const whiteAudioPath = "/sounds/white.mp3";
  const yellowAudioPath = "/sounds/yellow.mp3";

  useEffect(() => {
    // Clean up the audio element when the component unmounts
    return () => {
      resetSound(questionAudioPath);
      resetSound(blackAudioPath);
      resetSound(brownAudioPath);
      resetSound(blueAudioPath);
      resetSound(greenAudioPath);
      resetSound(pinkAudioPath);
      resetSound(purpleAudioPath);
      resetSound(redAudioPath);
      resetSound(whiteAudioPath);
      resetSound(yellowAudioPath);
    };
  }, []);

  const router = useRouter();

  const playSound = (path: string) => {
    const sound = new Audio(path);
    sound.play();
  };

  const resetSound = (path: string) => {
    const sound = new Audio(path);
    sound.pause();
    sound.currentTime = 0;
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
              playSound(questionAudioPath);
            }}
          >
            <Image src="/images/speak.png" alt="Speak" objectFit="fill" />
          </Box>
          <VStack height="full" flex="1">
            <HStack>
              <ColorTile
                color="black"
                name="black"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
              <ColorTile
                color="#2192FF"
                name="blue"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
              <ColorTile
                color="chocolate"
                name="brown"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
            </HStack>
            <HStack>
              <ColorTile
                color="#38E54D"
                name="green"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
              <ColorTile
                color="#FF55BB"
                name="pink"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
              <ColorTile
                color="#9376E0"
                name="purple"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
            </HStack>
            <HStack>
              <ColorTile
                color="red"
                name="red"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
              <ColorTile
                color="white"
                name="white"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
              <ColorTile
                color="yellow"
                name="yellow"
                onClick={(name) => {
                  playSound("/sounds/" + name + ".mp3");
                }}
              />
            </HStack>
          </VStack>
        </VStack>

        <BottomMenu selectedIndex={0} />
      </Container>
    </>
  );
};

export default ColorPage;
