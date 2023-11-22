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
// import ImageTile from "../components/imageTile";
import TextTile from "@/components/textTile";
import Head from "next/head";
import { useRouter } from "next/router";
import BackButton from "@/components/backButton";
import EvaluateAnswerModal from "@/components/evaluateAnswerModal";

const NumbersQuizPage = () => {
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
    "1-question",
    "7-question",
    "4-question",
    "2-question",
    "9-question",
    "6-question",
    "3-question",
    "8-question",
    "5-question",
    "10-question",
  ]);

  const [currentQuestionIndex, setCurrenQuestionIndex] = useState(0);

  const [tiles, setTiles] = useState([
    {
      id: "1",
    },

    {
      id: "7",
    },

    {
      id: "4",
    },
    {
      id: "2",
    },

    {
      id: "9",
    },

    {
      id: "6",
    },

    {
      id: "3",
    },

    {
      id: "8",
    },

    {
      id: "5",
    },
    {
      id: "10",
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
      "/sounds/numbers/questions/" + questions[currentQuestionIndex] + ".mp3"
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
      setCurrenQuestionIndex(currentQuestionIndex + 1);
      setTiles(tiles.sort(() => Math.random() - 0.5));
      setIsCorrectAnswer(true);
      onOpen();
    } else {
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
    } else if (forRow === 4) {
      rowTiles = tiles.slice(9, 10);
    }

    return rowTiles.map((item, i) => {
      return (
        <TextTile
          key={item.id}
          id={item.id}
          title={item.id}
          bgColor="#FF55BB"
          onClick={handleAnswerClick}
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
          <VStack height="full" flex="1" spacing={4}>
            <HStack spacing={6}>{generateTiles(1)}</HStack>
            <HStack spacing={6}>{generateTiles(2)}</HStack>
            <HStack spacing={6}>{generateTiles(3)}</HStack>
            <HStack spacing={6}>{generateTiles(4)}</HStack>
          </VStack>
        </VStack>
        {isOpen && (
          <EvaluateAnswerModal
            isOpen={isOpen}
            onClose={handleCloseEvaluationModal}
            isCorrectAnswer={isCorrectAnswer}
            voice="anizah"
          />
        )}
        <BottomMenu
          selectedIndex={1}
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

export default NumbersQuizPage;
