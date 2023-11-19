import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Image,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import BottomMenu from "../components/bottomMenu";
import { useEffect, useState } from "react";
import ColorTile from "../components/colorTile";
import Head from "next/head";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import BackButton from "@/components/backButton";

const ColorQuizPage = () => {
  const questionAudioPath = "/sounds/color-question-main.mp3";
  const blackQuestionAudioPath = "/sounds/black-question.mp3";
  const blackAudioPath = "/sounds/black.mp3";
  const brownAudioPath = "/sounds/brown.mp3";
  const blueAudioPath = "/sounds/blue.mp3";
  const greenAudioPath = "/sounds/green.mp3";
  const pinkAudioPath = "/sounds/pink.mp3";
  const purpleAudioPath = "/sounds/purple.mp3";
  const redAudioPath = "/sounds/red.mp3";
  const whiteAudioPath = "/sounds/white.mp3";
  const yellowAudioPath = "/sounds/yellow.mp3";

  const router = useRouter();

  const [questions, setQuestions] = useState([
    "purple",
    "black",
    "yellow",
    "white",
    "blue",
    "green",
    "brown",
    "pink",
    "red",
  ]);

  const [tiles, setTiles] = useState([
    {
      color: "black",
      name: "black",
    },

    {
      color: "#2192FF",
      name: "blue",
    },

    {
      color: "chocolate",
      name: "brown",
    },

    {
      color: "#38E54D",
      name: "green",
    },

    {
      color: "#FF55BB",
      name: "pink",
    },

    {
      color: "#9376E0",
      name: "purple",
    },

    {
      color: "red",
      name: "red",
    },
    {
      color: "white",
      name: "white",
    },

    {
      color: "yellow",
      name: "yellow",
    },
  ]);

  const [currentQuestionIndex, setCurrenQuestionIndex] = useState(0);

  useEffect(() => {
    return () => {
      if (currentQuestionIndex === questions.length - 1) {
        setCurrenQuestionIndex(0);
        setQuestions(questions.sort(() => Math.random() - 0.5));
        console.log("shuffled questions", questions);
      }
    };
  }, [currentQuestionIndex, questions]);

  const [canCloseModal, setCanCloseModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = () => {
    setCanCloseModal(false);
    onOpen();
    setTimeout(() => {
      setCanCloseModal(true);
    }, 2300);
  };

  const handleCloseModal = () => {
    onClose();
    playQuestionSound();
  };

  const playSound = (path: string) => {
    const sound = new Audio(path);
    sound.play();
  };

  const playQuestionSound = () => {
    console.log("/sounds/" + questions[currentQuestionIndex] + "-question.mp3");
    playSound("/sounds/" + questions[currentQuestionIndex] + "-question.mp3");
  };

  const playCorrectAnswerSound = () => {
    playSound("/sounds/answer-correct.mp3");
  };

  const playWrongAnswerSound = () => {
    playSound("/sounds/answer-wrong.mp3");
  };

  const resetSound = (path: string) => {
    const sound = new Audio(path);
    sound.pause();
    sound.currentTime = 0;
  };

  useEffect(() => {
    playQuestionSound();
  }, []);

  const handleAnswerClick = (name: string) => {
    if (name === questions[currentQuestionIndex]) {
      playCorrectAnswerSound();
      setCurrenQuestionIndex(currentQuestionIndex + 1);
      setTiles(tiles.sort(() => Math.random() - 0.5));
      setIsCorrectAnswer(true);
      handleOpenModal();
    } else {
      playWrongAnswerSound();
      setIsCorrectAnswer(false);
      handleOpenModal();
    }
  };

  return (
    <>
      <Head>
        <title>Bebe - Kuis Warna</title>
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
              playQuestionSound();
            }}
          >
            <Image src="/images/speak.png" alt="Speak" objectFit="fill" />
          </Box>

          <VStack height="full" flex="1">
            <HStack>
              <ColorTile
                color={tiles[0].color}
                name={tiles[0].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
              <ColorTile
                color={tiles[1].color}
                name={tiles[1].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
              <ColorTile
                color={tiles[2].color}
                name={tiles[2].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
            </HStack>
            <HStack>
              <ColorTile
                color={tiles[3].color}
                name={tiles[3].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
              <ColorTile
                color={tiles[4].color}
                name={tiles[4].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
              <ColorTile
                color={tiles[5].color}
                name={tiles[5].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
            </HStack>
            <HStack>
              <ColorTile
                color={tiles[6].color}
                name={tiles[6].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
              <ColorTile
                color={tiles[7].color}
                name={tiles[7].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
              <ColorTile
                color={tiles[8].color}
                name={tiles[8].name}
                onClick={(name) => {
                  handleAnswerClick(name);
                }}
              />
            </HStack>
          </VStack>
        </VStack>

        {isOpen && (
          <Modal
            onClose={handleCloseModal}
            size="xs"
            isOpen={isOpen}
            isCentered
            closeOnOverlayClick={false}
            motionPreset="slideInBottom"
          >
            <ModalOverlay />
            <ModalContent
              maxW="300px"
              alignItems="center"
              bgImage={
                isCorrectAnswer ? "/images/bg-1.jpg" : "/images/bg-2.jpg"
              }
              bgClip="padding-box"
            >
              <ModalHeader></ModalHeader>
              <ModalBody>
                <VStack>
                  <Image
                    src={
                      isCorrectAnswer
                        ? "/images/face-happy.png"
                        : "/images/face-sad.png"
                    }
                    alt="happy face"
                    objectFit="fill"
                  />
                  <Text
                    as="b"
                    fontSize="3xl"
                    color={isCorrectAnswer ? "green.400" : "red.400"}
                    fontFamily="Bayon"
                  >
                    {isCorrectAnswer ? "BETUL!" : "Yah Salah"}
                  </Text>
                  <Text as="b" color="black">
                    {isCorrectAnswer ? "Kamu hebat!" : "Ayo coba lagi"}
                  </Text>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={handleCloseModal}
                  colorScheme={isCorrectAnswer ? "whatsapp" : "red"}
                  borderRadius="full"
                  width="140px"
                  isLoading={!canCloseModal}
                >
                  {isCorrectAnswer ? "Lanjut" : "Ulangi"}
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
        <BottomMenu
          selectedIndex={1}
          onClick={(index) => {
            if (index === 0) {
              router.push("/color");
            } else {
              router.push("/color-quiz");
            }
          }}
        />
      </Container>
    </>
  );
};

export default ColorQuizPage;
