import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  HStack,
  Badge,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import { FiVideo, FiUploadCloud, FiServer } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Network Video Recorder (NVR)",
    subtitle: "Real-Time Video Monitoring System",
    icon: FiVideo,
    description:
      "Production web-based NVR that monitors and manages ONVIF IP cameras with stable concurrent live streams from 64+ cameras and low-latency playback. Full camera lifecycle: discovery, live streaming, recording, playback, and configuration dashboards used daily by operations.",
    metrics: [
      "64+ concurrent cameras",
      "~35% faster discovery→stream",
      "~40% faster failure detection",
    ],
    tech: ["React.js", "Node.js", "Express", "WebSocket", "RTSP", "ONVIF", "JWT"],
    accent: "teal",
  },
  {
    title: "SPUT Tool",
    subtitle: "Secure Content Deployment for IoT Boards",
    icon: FiUploadCloud,
    description:
      "Electron desktop tool for continuous monitoring of IoT Web Server Board modules via IP pinging, plus secure folder validation and reliable transfer of content packages up to ~10GB to single or multiple target devices on train systems.",
    metrics: [
      "~10GB package support",
      "~60% fewer deploy errors",
      "Multi-device deployment",
    ],
    tech: ["Electron", "React.js", "Node.js", "Offline-first"],
    accent: "blue",
  },
  {
    title: "IOB Server",
    subtitle: "Train Infotainment Platform",
    icon: FiServer,
    description:
      "Full-stack offline-first server so passengers can access journey info, entertainment (movies, music, videos, kids zone), tourist places, and railway services even in low/no-network conditions. Fully compatible with SPUT packages for zero-friction content rollout.",
    metrics: [
      "Offline-first architecture",
      "~50% faster content rollout",
      "Secure auth flows",
    ],
    tech: ["React.js", "Node.js", "Express", "Electron", "MySQL"],
    accent: "purple",
  },
];

function Projects({ projectRef }) {
  return (
    <Box
      ref={projectRef}
      id="projects"
      as="section"
      py={{ base: 16, md: 24 }}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
    >
      <Text className="section-label" mb={2}>
        Selected Work
      </Text>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="800"
        mb={3}
        letterSpacing="-0.02em"
      >
        Projects
      </Heading>
      <Text color="gray.400" maxW="560px" mb={10} fontSize="md">
        Production systems shipped for railway infrastructure, surveillance, and
        onboard passenger experience.
      </Text>

      <SimpleGrid columns={{ base: 1, lg: 1 }} spacing={6}>
        {projects.map((p, i) => (
          <MotionBox
            key={p.title}
            className="project-card project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            borderRadius="2xl"
            border="1px solid"
            borderColor="whiteAlpha.100"
            bg="whiteAlpha.50"
            p={{ base: 5, md: 7 }}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              h="3px"
              bgGradient={
                p.accent === "teal"
                  ? "linear(to-r, teal.400, cyan.400)"
                  : p.accent === "blue"
                  ? "linear(to-r, blue.400, cyan.400)"
                  : "linear(to-r, purple.400, pink.400)"
              }
            />

            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 4, md: 8 }}
              align="flex-start"
            >
              <Box
                p={3}
                borderRadius="xl"
                bg={`${p.accent}.500`}
                bgGradient={
                  p.accent === "teal"
                    ? "linear(to-br, teal.500, cyan.600)"
                    : p.accent === "blue"
                    ? "linear(to-br, blue.500, cyan.600)"
                    : "linear(to-br, purple.500, pink.600)"
                }
                color="white"
                flexShrink={0}
              >
                <Box as={p.icon} size={24} />
              </Box>

              <Box flex={1}>
                <Heading
                  className="project-title"
                  size="md"
                  fontWeight="700"
                  mb={1}
                >
                  {p.title}
                </Heading>
                <Text color="gray.500" fontSize="sm" mb={3} fontWeight="500">
                  {p.subtitle}
                </Text>
                <Text
                  className="project-description"
                  color="gray.300"
                  fontSize="sm"
                  lineHeight="1.7"
                  mb={4}
                >
                  {p.description}
                </Text>

                <HStack spacing={2} mb={4} flexWrap="wrap">
                  {p.metrics.map((m) => (
                    <Text key={m} className="metric-pill">
                      {m}
                    </Text>
                  ))}
                </HStack>

                <HStack className="project-tech-stack" spacing={2} flexWrap="wrap">
                  {p.tech.map((t) => (
                    <Tag
                      key={t}
                      size="sm"
                      variant="subtle"
                      colorScheme="gray"
                      borderRadius="full"
                    >
                      <TagLabel>{t}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Flex>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
