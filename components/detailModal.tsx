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
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

export type DetailModalProps = {
  isOpen: boolean;
  id: string;
  shouldPlaySound?: boolean;
  soundFileDuration?: number;
  onClose?: () => void;
};

const DetailModal = (props: DetailModalProps) => {
  const [canCloseModal, setCanCloseModal] = useState(false);

  useEffect(() => {
    setCanCloseModal(false);

    if (props.shouldPlaySound === true) {
      playSound("/sounds/animals/" + props.id + ".wav");
    } else {
      setCanCloseModal(true);
    }
  }, [props.id, props.shouldPlaySound]);

  const delayCanClose = () => {
    setTimeout(() => {
      setCanCloseModal(true);
    }, props.soundFileDuration);
  };

  const playSound = (path: string) => {
    const sound = new Audio(path);
    delayCanClose();
    sound.play();
  };

  return (
    <Modal
      size="xs"
      onClose={() => {
        props.onClose;
      }}
      isOpen={true}
      isCentered
      closeOnOverlayClick={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent maxW="300px" alignItems="center">
        <ModalBody paddingTop="4">
          <VStack>
            <Image
              src={"/images/animals/detail/" + props.id + ".jpg"}
              alt={props.id}
              objectFit="cover"
              borderRadius="md"
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={props.onClose}
            colorScheme="red"
            borderRadius="full"
            width="140px"
            isLoading={!canCloseModal}
          >
            Tutup
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;
