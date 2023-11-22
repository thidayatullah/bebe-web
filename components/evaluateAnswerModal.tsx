import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Image,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

export type EvaluateAnswerModalProps = {
  isOpen: boolean;
  isCorrectAnswer: boolean;
  voice?: string;
  onClose: () => void;
};

const EvaluateAnswerModal = (props: EvaluateAnswerModalProps) => {
  const [canCloseModal, setCanCloseModal] = useState(false);

  const playSound = (path: string) => {
    const sound = new Audio(path);
    sound.play();
  };

  const playCorrectAnswerSound = () => {
    if (props.voice == "anizah") {
      playSound("/sounds/" + props.voice + "/answer-correct.mp3");
    } else {
      playSound("/sounds/answer-correct.mp3");
    }
  };

  const playWrongAnswerSound = () => {
    if (props.voice == "anizah") {
      playSound("/sounds/" + props.voice + "/answer-wrong.mp3");
    } else {
      playSound("/sounds/answer-wrong.mp3");
    }
  };

  const evaluateAnswer = () => {
    if (props.isCorrectAnswer) {
      playCorrectAnswerSound();
    } else {
      playWrongAnswerSound();
    }
  };

  useEffect(() => {
    setCanCloseModal(false);
    evaluateAnswer();
    setTimeout(() => {
      setCanCloseModal(true);
    }, 2400);
  }, []);

  return (
    <Modal
      onClose={props.onClose}
      size="xs"
      isOpen={props.isOpen}
      isCentered
      closeOnOverlayClick={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent
        maxW="300px"
        alignItems="center"
        bgImage={
          props.isCorrectAnswer ? "/images/bg-1.jpg" : "/images/bg-2.jpg"
        }
        bgClip="padding-box"
      >
        <ModalHeader></ModalHeader>
        <ModalBody>
          <VStack>
            <Image
              src={
                props.isCorrectAnswer
                  ? "/images/face-happy.png"
                  : "/images/face-sad.png"
              }
              alt="happy face"
              objectFit="fill"
            />
            <Text
              as="b"
              fontSize="3xl"
              color={props.isCorrectAnswer ? "green.400" : "red.400"}
              fontFamily="Bayon"
            >
              {props.isCorrectAnswer ? "BETUL!" : "Yah Salah"}
            </Text>
            <Text as="b" color="black">
              {props.isCorrectAnswer ? "Kamu hebat!" : "Ayo coba lagi"}
            </Text>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={props.onClose}
            colorScheme={props.isCorrectAnswer ? "whatsapp" : "red"}
            borderRadius="full"
            width="140px"
            isLoading={!canCloseModal}
          >
            {props.isCorrectAnswer ? "Lanjut" : "Ulangi"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EvaluateAnswerModal;
