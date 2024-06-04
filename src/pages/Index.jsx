import { useState } from "react";
import { Container, Text, VStack, Box, Heading, Button, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Textarea, List, ListItem } from "@chakra-ui/react";
import { FaPlay, FaPlus } from "react-icons/fa";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");

  const handleCreatePlaylist = () => {
    setPlaylists([...playlists, { name: playlistName, description: playlistDescription }]);
    setPlaylistName("");
    setPlaylistDescription("");
    setIsModalOpen(false);
  };

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
        <Button colorScheme="blue" size="lg" rightIcon={<FaPlus />} onClick={() => setIsModalOpen(true)}>
          Create Playlist
        </Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a New Playlist</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl id="playlist-name" isRequired>
                <FormLabel>Playlist Name</FormLabel>
                <Input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
              </FormControl>
              <FormControl id="playlist-description" mt={4}>
                <FormLabel>Playlist Description</FormLabel>
                <Textarea value={playlistDescription} onChange={(e) => setPlaylistDescription(e.target.value)} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleCreatePlaylist}>
                Create
              </Button>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>Your Playlists</Heading>
          <List spacing={3}>
            {playlists.map((playlist, index) => (
              <ListItem key={index} p={3} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading as="h3" size="md">{playlist.name}</Heading>
                <Text mt={2}>{playlist.description}</Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;