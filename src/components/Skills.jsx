import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiElectron,
  SiGit,
  SiLinux,
  SiChakraui,
  SiBootstrap,
} from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { TbApi, TbBrandVite } from "react-icons/tb";
import { MdSecurity, MdVideocam } from "react-icons/md";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const categories = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DBFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#efd81d" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764abc" },
      { name: "HTML5", icon: SiHtml5, color: "#dd4b25" },
      { name: "CSS3 / SCSS", icon: IoLogoCss3, color: "#254bdd" },
      { name: "Chakra UI", icon: SiChakraui, color: "#4fd1c5" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Backend & Real-time",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#70a861" },
      { name: "Express.js", icon: SiExpress, color: "#e2e8f0" },
      { name: "REST APIs", icon: TbApi, color: "#63b3ed" },
      { name: "JWT Auth", icon: MdSecurity, color: "#f6ad55" },
      { name: "WebSocket", icon: SiSocketdotio, color: "#a0aec0" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
    ],
  },
  {
    title: "Data & Desktop",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#00ee65" },
      { name: "Electron", icon: SiElectron, color: "#9FEAF9" },
      { name: "Vite", icon: TbBrandVite, color: "#646cff" },
    ],
  },
  {
    title: "Protocols & Ops",
    items: [
      { name: "ONVIF / RTSP", icon: MdVideocam, color: "#fc8181" },
      { name: "Linux", icon: SiLinux, color: "#fcc419" },
      { name: "Git / GitHub", icon: SiGit, color: "#f05032" },
    ],
  },
];

function Skills({ skillsRef }) {
  return (
    <Box
      ref={skillsRef}
      id="skills"
      as="section"
      py={{ base: 16, md: 24 }}
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
    >
      <Text className="section-label" mb={2}>
        Tech Stack
      </Text>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="800"
        mb={3}
        letterSpacing="-0.02em"
      >
        Skills & Tools
      </Heading>
      <Text color="gray.400" maxW="560px" mb={10} fontSize="md">
        Production-grade stack used daily across web, desktop, and real-time
        surveillance systems.
      </Text>

      <VStack spacing={10} align="stretch">
        {categories.map((cat, idx) => (
          <MotionBox
            key={cat.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Text
              fontSize="sm"
              fontWeight="700"
              color="gray.300"
              mb={4}
              letterSpacing="0.04em"
            >
              {cat.title}
            </Text>
            <SimpleGrid
              columns={{ base: 2, sm: 3, md: 4, lg: 4 }}
              spacing={3}
            >
              {cat.items.map((skill) => (
                <Flex
                  key={skill.name}
                  className="skill-card skills-card"
                  direction="column"
                  align="center"
                  justify="center"
                  gap={2}
                  p={4}
                  borderRadius="xl"
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  minH="100px"
                >
                  <Icon
                    as={skill.icon}
                    boxSize={8}
                    color={skill.color}
                    className="skills-card-img"
                  />
                  <Text
                    className="skills-card-name"
                    fontSize="sm"
                    fontWeight="600"
                    color="gray.200"
                    textAlign="center"
                  >
                    {skill.name}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </MotionBox>
        ))}
      </VStack>
    </Box>
  );
}

export default Skills;
