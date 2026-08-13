import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react";
import { FiCheckCircle, FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const experience = {
  role: "Assistant Software Engineer",
  company: "PPS International Pvt Ltd",
  location: "Greater Noida, India",
  period: "December 2022 — Present",
  highlights: [
    "Developed & maintained 5+ production full-stack web and desktop apps (React.js, Node.js, Express.js, Electron, MySQL) for railway infrastructure & surveillance, deployed across multiple train fleets.",
    "Designed and shipped 20+ RESTful APIs with JWT authentication; optimized queries & caching to cut average API response time by ~30%.",
    "Built a library of 40+ reusable React components (Hooks, HTML5, CSS3), reducing new UI feature development time by ~25%.",
    "Implemented WebSocket / Socket.IO real-time layers achieving sub-second data sync for live monitoring dashboards used daily by operations teams.",
    "Integrated ONVIF IP cameras & RTSP streaming into NVR applications — stable concurrent live video from 16–64+ cameras with discovery, recording, playback & configuration.",
    "Architected the SPUT Electron desktop tool for secure transfer of content packages up to ~10GB to IoT boards & onboard infotainment systems.",
    "Resolved production defects & performed code reviews in Linux environments, contributing to a ~40% reduction in critical bugs during sprint cycles.",
    "Completed 100% of assigned sprint features on time across 30+ Agile/Scrum sprints while collaborating with product, QA, and hardware teams.",
    "Authored technical & API documentation that reduced new developer onboarding time by ~50%.",
  ],
};

function Experience({ expRef }) {
  return (
    <Box
      ref={expRef}
      id="experience"
      as="section"
      py={{ base: 16, md: 24 }}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
    >
      <Text className="section-label" mb={2}>
        Career
      </Text>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="800"
        mb={10}
        letterSpacing="-0.02em"
      >
        Experience
      </Heading>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="glass"
        borderRadius="2xl"
        p={{ base: 5, md: 8 }}
        border="1px solid"
        borderColor="whiteAlpha.100"
        position="relative"
        overflow="hidden"
      >
        {/* Accent bar */}
        <Box
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          w="4px"
          bgGradient="linear(to-b, teal.400, blue.500, purple.500)"
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={3}
          mb={5}
          pl={2}
        >
          <Box>
            <HStack spacing={2} mb={1}>
              <Box as={FiBriefcase} color="teal.300" />
              <Heading size="md" fontWeight="700">
                {experience.role}
              </Heading>
            </HStack>
            <Text color="teal.300" fontWeight="600" fontSize="md">
              {experience.company}
            </Text>
            <Text color="gray.500" fontSize="sm" mt={0.5}>
              {experience.location}
            </Text>
          </Box>
          <Badge
            colorScheme="teal"
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="600"
          >
            {experience.period}
          </Badge>
        </Flex>

        <List spacing={3} pl={2}>
          {experience.highlights.map((point, i) => (
            <ListItem key={i} display="flex" alignItems="flex-start" gap={2}>
              <ListIcon
                as={FiCheckCircle}
                color="teal.400"
                mt={1}
                flexShrink={0}
              />
              <Text color="gray.300" fontSize="sm" lineHeight="1.7">
                {point}
              </Text>
            </ListItem>
          ))}
        </List>
      </MotionBox>
    </Box>
  );
}

export default Experience;
