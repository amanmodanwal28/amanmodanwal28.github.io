import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Link,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

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

const contacts = [
  {
    icon: FiMail,
    label: "Email",
    value: "itisaman28@gmail.com",
    href: "mailto:itisaman28@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 8423194569",
    href: "tel:+918423194569",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Greater Noida, India",
    href: null,
  },
];

function Contact({ contactRef }) {
  return (
    <Box
      ref={contactRef}
      id="contact"
      as="section"
      py={{ base: 16, md: 24 }}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
    >
      <Text className="section-label" mb={2}>
        Get in touch
      </Text>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="800"
        mb={3}
        letterSpacing="-0.02em"
      >
        Contact
      </Heading>
      <Text color="gray.400" maxW="520px" mb={10} fontSize="md">
        Open to full-stack roles, interesting product problems, and
        collaborations. Feel free to reach out.
      </Text>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass"
        borderRadius="2xl"
        p={{ base: 6, md: 10 }}
        border="1px solid"
        borderColor="whiteAlpha.100"
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
          {contacts.map((c) => (
            <Flex
              key={c.label}
              direction="column"
              align="flex-start"
              gap={2}
              p={4}
              borderRadius="xl"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <Icon as={c.icon} color="teal.300" boxSize={5} />
              <Text fontSize="xs" color="gray.500" fontWeight="600" letterSpacing="0.06em">
                {c.label.toUpperCase()}
              </Text>
              {c.href ? (
                <Link
                  href={c.href}
                  color="gray.200"
                  fontWeight="500"
                  fontSize="sm"
                  _hover={{ color: "teal.300" }}
                >
                  {c.value}
                </Link>
              ) : (
                <Text color="gray.200" fontWeight="500" fontSize="sm">
                  {c.value}
                </Text>
              )}
            </Flex>
          ))}
        </SimpleGrid>

        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={3}
          align={{ base: "stretch", sm: "center" }}
          justify="space-between"
        >
          <Flex gap={3}>
            <Button
              as="a"
              href="https://github.com/amanmodanwal28"
              target="_blank"
              rel="noreferrer"
              leftIcon={<FiGithub />}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="gray.200"
              size="sm"
              _hover={{ bg: "whiteAlpha.100", borderColor: "teal.400" }}
            >
              GitHub
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/aman-modanwal-28"
              target="_blank"
              rel="noreferrer"
              leftIcon={<FiLinkedin />}
              variant="outline"
              borderColor="whiteAlpha.300"
              color="gray.200"
              size="sm"
              _hover={{ bg: "whiteAlpha.100", borderColor: "teal.400" }}
            >
              LinkedIn
            </Button>
          </Flex>
          <Button
            leftIcon={<FiDownload />}
            bg="teal.500"
            color="white"
            size="sm"
            _hover={{ bg: "teal.400" }}
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
        </Flex>
      </MotionBox>
    </Box>
  );
}

export default Contact;
