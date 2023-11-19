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
import EvaluateAnswerModal from "@/components/evaluateAnswerModal";

const AnimalQuizPage = () => {
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

  const [questions, setQuestions] = useState([
    "cat-question",
    "cow-question",
    "horse-question",
    "bird-question",
    "dog-question",
    "goat-question",
    "frog-question",
    "rooster-question",
    "duck-question",
  ]);

  const [currentQuestionIndex, setCurrenQuestionIndex] = useState(0);

  const [tiles, setTiles] = useState([
    {
      id: "cat",
      soundFileDuration: 3100,
    },

    {
      id: "cow",
      soundFileDuration: 2100,
    },

    {
      id: "horse",
      soundFileDuration: 3000,
    },

    {
      id: "bird",
      soundFileDuration: 2100,
    },

    {
      id: "dog",
      soundFileDuration: 2100,
    },

    {
      id: "goat",
      soundFileDuration: 1100,
    },

    {
      id: "frog",
      soundFileDuration: 2100,
    },

    {
      id: "rooster",
      soundFileDuration: 4100,
    },

    {
      id: "duck",
      soundFileDuration: 1100,
    },
  ]);

  useEffect(() => {
    playQuestionSound();
  }, []);

  const [shouldShuffleTiles, setShouldShuffleTiles] = useState(false);

  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleTopButtonClicked = () => {
    playQuestionSound();
  };

  const playQuestionSound = () => {
    playSound(
      "/sounds/animals/questions/" + questions[currentQuestionIndex] + ".mp3"
    );
  };

  const handleCloseEvaluationModal = () => {
    onClose();
    playQuestionSound();
  };

  useEffect(() => {
    setTiles(tiles.sort(() => Math.random() - 0.5));
  }, [shouldShuffleTiles, tiles]);

  const handleAnswerClick = (name: string) => {
    if (name + "-question" === questions[currentQuestionIndex]) {
      console.log("hawaban benar");
      setCurrenQuestionIndex(currentQuestionIndex + 1);
      setTiles(tiles.sort(() => Math.random() - 0.5));
      setIsCorrectAnswer(true);
      onOpen();
    } else {
      console.log("jawaban salah");
      setIsCorrectAnswer(false);
      onOpen();
    }
  };

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
          key={item.id}
          id={item.id}
          soundFileDuration={item.soundFileDuration}
          onClick={(id, soundFileDuration) => {
            handleAnswerClick(id);
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
            <Image src="/images/speak.png" alt="Speak" objectFit="fill" />
          </Box>
          <VStack height="full" flex="1">
            <HStack>{generateTiles(1)}</HStack>
            <HStack>{generateTiles(2)}</HStack>
            <HStack>{generateTiles(3)}</HStack>
          </VStack>
        </VStack>
        {isOpen && (
          <EvaluateAnswerModal
            isOpen={isOpen}
            onClose={handleCloseEvaluationModal}
            isCorrectAnswer={isCorrectAnswer}
          />
        )}
        <BottomMenu
          selectedIndex={1}
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

export default AnimalQuizPage;
