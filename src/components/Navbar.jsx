import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FiDownload } from "react-icons/fi";
import { useContext } from "react";
import { ScrollContext } from "../Context/ScrollContext";

const RESUME_URL =
  "https://raw.githubusercontent.com/amanmodanwal28/amanmodanwal28/main/Aman-Modanwal-Resume.pdf";

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = RESUME_URL;
  link.download = "Aman-Modanwal-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const navItems = [
  { label: "About", key: "aboutRef" },
  { label: "Experience", key: "expRef" },
  { label: "Skills", key: "skillsRef" },
  { label: "Projects", key: "projectRef" },
  { label: "Contact", key: "contactRef" },
];

export default function Navbar({ sections }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setscroll } = useContext(ScrollContext);

  const handleClick = (ref) => {
    if (!ref?.current) return;
    setscroll(ref);
    ref.current.scrollIntoView({ behavior: "smooth" });
    onClose();
  };

  return (
    <Box
      as="nav"
      id="nav-menu"
      position="fixed"
      top={0}
      w="100%"
      zIndex={100}
      className="glass"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Flex
        h={{ base: 14, md: 16 }}
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        align="center"
        justify="space-between"
      >
        <Text
          fontWeight="800"
          fontSize="lg"
          className="gradient-text"
          cursor="pointer"
          onClick={() => handleClick(sections.aboutRef)}
          letterSpacing="-0.02em"
        >
          AM
        </Text>

        <HStack spacing={1} display={{ base: "none", md: "flex" }}>
          {navItems.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              size="sm"
              className="nav-link-item"
              color="gray.300"
              _hover={{ color: "white", bg: "whiteAlpha.100" }}
              onClick={() => handleClick(sections[item.key])}
              fontWeight="500"
            >
              {item.label}
            </Button>
          ))}
          <Button
            ml={3}
            size="sm"
            leftIcon={<FiDownload />}
            bg="teal.500"
            color="white"
            _hover={{ bg: "teal.400" }}
            onClick={handleDownloadResume}
            fontWeight="600"
          >
            Resume
          </Button>
        </HStack>

        <IconButton
          display={{ base: "flex", md: "none" }}
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle menu"
          variant="ghost"
          color="gray.200"
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} px={4} display={{ md: "none" }} borderTop="1px solid" borderColor="whiteAlpha.100">
          <Stack as="nav" spacing={1} pt={2}>
            {navItems.map((item) => (
              <Button
                key={item.key}
                variant="ghost"
                justifyContent="flex-start"
                color="gray.300"
                _hover={{ color: "white", bg: "whiteAlpha.100" }}
                onClick={() => handleClick(sections[item.key])}
              >
                {item.label}
              </Button>
            ))}
            <Button
              leftIcon={<FiDownload />}
              bg="teal.500"
              color="white"
              _hover={{ bg: "teal.400" }}
              onClick={handleDownloadResume}
              mt={2}
            >
              Download Resume
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
