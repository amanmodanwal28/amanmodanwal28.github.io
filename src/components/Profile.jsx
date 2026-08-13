import React from 'react'
import {
  useMediaQuery,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Spinner,
  Center,
} from '@chakra-ui/react'
import { useGitHub, FALLBACK_AVATAR } from '../Context/GitHubContext'

export { FALLBACK_AVATAR, FALLBACK_BIO } from '../Context/GitHubContext'

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')
  const { loading, avatar, bio, name, sinceYear, user } = useGitHub()

  if (loading) {
    return (
      <Center py={16}>
        <Spinner color="teal.300" size="lg" />
      </Center>
    )
  }

  return (
    <Flex
      direction={isNotSmallerScreen ? 'row' : 'column'}
      w="100%"
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
      alignItems="center"
      justifyContent="center"
      gap={{ base: 6, md: 10 }}
      py={{ base: 10, md: 16 }}
    >
      <Image
        src={avatar}
        alt={name}
        borderRadius="full"
        boxSize={{ base: '160px', md: '200px' }}
        objectFit="cover"
        border="3px solid"
        borderColor="teal.400"
        fallbackSrc={FALLBACK_AVATAR}
      />
      <Box
        alignSelf="center"
        textAlign={{ base: 'center', md: 'left' }}
        maxW="560px"
      >
        <Heading
          bgGradient="linear(to-r, teal.300, blue.400, purple.400)"
          bgClip="text"
          fontWeight="extrabold"
          size={{ base: '2xl', md: '3xl' }}
          mb={3}
        >
          Since {sinceYear}
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="gray.400"
          lineHeight="1.7"
        >
          {bio}
        </Text>
        {user?.public_repos != null && (
          <Text mt={3} fontSize="sm" color="gray.500">
            {user.public_repos} public repos · {user.followers} followers on
            GitHub
          </Text>
        )}
      </Box>
    </Flex>
  )
}

export default Profile
