import {
  Text,
  Container,
  Box,
  HStack,
  VStack,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const IndexPage = () => {
  const toast = useToast();
  const router = useRouter();
  return (
    <Container
      bg="blue.50"
      maxW="full"
      mx="auto"
      height="100vh"
      position="relative"
      p="4"
      bgImage="/images/bg-home-small.jpg"
    >
      <VStack h="100vh" p="6">
        <Box shadow="xl" borderRadius="3xl" border="1px" borderColor="blue.200">
          <Image
            src="/images/bebe-icon.png"
            borderRadius="3xl"
            alt="bebe icon"
          />
        </Box>
        <Text fontSize="lg" fontWeight="600">
          Teman Bermain & Belajar
        </Text>
        <Box shadow="xl" borderRadius="xl" bg="blue.50" h="90%" w="full" p="6">
          <VStack spacing="4">
            <Box
              shadow="xl"
              borderRadius="2xl"
              bg="red.400"
              px="4"
              py="4"
              as="button"
              w="full"
              _active={{
                transform: "scale(0.98)",
              }}
              onClick={() => {
                router.push("/color");
              }}
            >
              <HStack spacing="4">
                <Image src="/images/pencil.png" alt="pencil"></Image>
                <Text color="white" fontWeight="700" textAlign="left">
                  BELAJAR WARNA
                </Text>
              </HStack>
            </Box>
            <Box
              shadow="xl"
              borderRadius="2xl"
              bg="teal.400"
              px="4"
              py="4"
              as="button"
              w="full"
              _active={{
                transform: "scale(0.98)",
              }}
              onClick={() => {
                toast({
                  title: `Segera Hadir`,
                  status: "info",
                  isClosable: true,
                });
              }}
            >
              <HStack spacing="4">
                <Image src="/images/tiger.png" w="64px" alt="tiger"></Image>
                <Text color="white" fontWeight="700" textAlign="left">
                  SUARA HEWAN
                </Text>
              </HStack>
            </Box>
            <Box
              shadow="xl"
              borderRadius="2xl"
              bg="yellow.400"
              px="4"
              py="4"
              as="button"
              w="full"
              _active={{
                transform: "scale(0.98)",
              }}
              onClick={() => {
                toast({
                  title: `Segera Hadir`,
                  status: "info",
                  isClosable: true,
                });
              }}
            >
              <HStack spacing="4">
                <Image src="/images/numbers.png" w="64px" alt="numbers"></Image>
                <Text color="white" fontWeight="700" textAlign="left">
                  MENGENAL ANGKA
                </Text>
              </HStack>
            </Box>
            <Box
              shadow="xl"
              borderRadius="2xl"
              bg="green.400"
              px="4"
              py="4"
              as="button"
              w="full"
              _active={{
                transform: "scale(0.98)",
              }}
              onClick={() => {
                toast({
                  title: `Segera Hadir`,
                  status: "info",
                  isClosable: true,
                });
              }}
            >
              <HStack spacing="4">
                <Image src="/images/letters.png" w="64px" alt="letter"></Image>
                <Text color="white" fontWeight="700" textAlign="left">
                  MENGENAL HURUF
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default IndexPage;
