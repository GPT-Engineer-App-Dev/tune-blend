import { Container, Text, VStack, Box, Heading, Button, Image } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to MusicStream
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover and stream your favorite music anytime, anywhere.
        </Text>
        <Box boxSize="sm">
          <Image src="/images/music-streaming.jpg" alt="Music Streaming" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" rightIcon={<FaPlay />}>
          Start Listening
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;