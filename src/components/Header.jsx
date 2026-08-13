import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  HStack,
  Badge,
  Image,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react'
import { FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useGitHub, FALLBACK_AVATAR } from '../Context/GitHubContext'

const MotionBox = motion(Box)

const RESUME_URL =
  'https://raw.githubusercontent.com/amanmodanwal28/amanmodanwal28/main/Aman-Modanwal-Resume.pdf'

const handleViewResume = () => {
  window.open(
    `https://docs.google.com/viewer?url=${encodeURIComponent(RESUME_URL)}&embedded=true`,
    '_blank',
  )
}

const metrics = [
  { value: '4+', label: 'Years Experience' },
  { value: '5+', label: 'Production Apps' },
  { value: '20+', label: 'REST APIs' },
  { value: '64+', label: 'Camera Streams' },
]

function Header({ aboutRef }) {
  const { loading, avatar } = useGitHub()

  return (
    <Box
      ref={aboutRef}
      id="home"
      as="section"
      position="relative"
      minH={{ base: 'auto', md: '92vh' }}
      pt={{ base: 24, md: 28 }}
      pb={{ base: 12, md: 20 }}
      overflow="hidden"
      className="bg-grid"
    >
      <Box
        className="glow-orb"
        w="420px"
        h="420px"
        bg="teal.500"
        top="-10%"
        left="-5%"
        opacity={0.2}
      />
      <Box
        className="glow-orb"
        w="360px"
        h="360px"
        bg="purple.600"
        bottom="10%"
        right="-5%"
        opacity={0.18}
      />

      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        direction={{ base: 'column', lg: 'row' }}
        align="center"
        justify="space-between"
        gap={{ base: 10, lg: 16 }}
      >
        <MotionBox
          flex={1}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            colorScheme="teal"
            variant="subtle"
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            letterSpacing="0.06em"
            mb={4}
          >
            Available for opportunities
          </Badge>

          <Text className="section-label" mb={3}>
            Full-Stack Developer
          </Text>

          <Heading
            as="h1"
            id="user-detail-name"
            fontSize={{ base: '3.2xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="800"
            lineHeight="1.1"
            letterSpacing="-0.03em"
            mb={4}
          >
            Aman{' '}
            <Box as="span" className="gradient-text">
              Modanwal
            </Box>
          </Heading>

          <Text
            id="user-detail-intro"
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.400"
            maxW="540px"
            lineHeight="1.7"
            mb={6}
          >
            Assistant Software Engineer with{' '}
            <Box as="span" color="teal.300" fontWeight="600">
              4 years
            </Box>{' '}
            of experience shipping production full-stack web &amp; desktop
            applications. Specialized in React, Node.js, real-time systems, and
            high-concurrency video platforms for railway infrastructure.
          </Text>

          <HStack spacing={3} mb={8} flexWrap="wrap">
            <Button
              size="md"
              leftIcon={<FiFileText />}
              bg="teal.500"
              color="white"
              _hover={{ bg: 'teal.400', transform: 'translateY(-1px)' }}
              onClick={handleViewResume}
              id="resume-button-view"
            >
              View Resume
            </Button>
            <Button
              size="md"
              variant="outline"
              borderColor="whiteAlpha.300"
              color="gray.200"
              _hover={{ bg: 'whiteAlpha.100', borderColor: 'teal.400' }}
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View Projects
            </Button>
          </HStack>

          <HStack spacing={4} color="gray.400">
            <Box
              as="a"
              href="https://github.com/amanmodanwal28"
              target="_blank"
              rel="noreferrer"
              _hover={{ color: 'teal.300' }}
              transition="color 0.2s"
            >
              <FiGithub size={22} />
            </Box>
            <Box
              as="a"
              href="https://www.linkedin.com/in/aman-modanwal-28"
              target="_blank"
              rel="noreferrer"
              _hover={{ color: 'teal.300' }}
              transition="color 0.2s"
            >
              <FiLinkedin size={22} />
            </Box>
            <Box
              as="a"
              href="mailto:itisaman28@gmail.com"
              _hover={{ color: 'teal.300' }}
              transition="color 0.2s"
            >
              <FiMail size={22} />
            </Box>
          </HStack>
        </MotionBox>

        <MotionBox
          flexShrink={0}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          w={{ base: '100%', lg: '380px' }}
        >
          <Box
            className="glass"
            borderRadius="2xl"
            p={6}
            border="1px solid"
            borderColor="whiteAlpha.100"
          >
            <Flex justify="center" mb={6} minH="160px" align="center">
              {loading ? (
                <Spinner color="teal.300" size="lg" />
              ) : (
                <Box
                  position="relative"
                  borderRadius="full"
                  p="3px"
                  bgGradient="linear(to-br, teal.400, blue.500, purple.500)"
                >
                  <Image
                    className="home-img"
                    src={avatar}
                    fallbackSrc={FALLBACK_AVATAR}
                    alt="Aman Modanwal"
                    boxSize={{ base: '140px', md: '160px' }}
                    borderRadius="full"
                    objectFit="cover"
                    bg="surface.100"
                  />
                </Box>
              )}
            </Flex>

            <SimpleGrid columns={2} spacing={3}>
              {metrics.map((m) => (
                <Box
                  key={m.label}
                  textAlign="center"
                  p={3}
                  borderRadius="xl"
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                >
                  <Text
                    fontSize="2xl"
                    fontWeight="800"
                    className="gradient-text"
                    lineHeight="1"
                  >
                    {m.value}
                  </Text>
                  <Text fontSize="xs" color="gray.500" mt={1} fontWeight="500">
                    {m.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </MotionBox>
      </Flex>
    </Box>
  )
}

export default Header
