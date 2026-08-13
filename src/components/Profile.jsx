import React from 'react'
import { useMediaQuery, Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)')

  return (
    <>
      <Flex
        direction={isNotSmallerScreen ? 'row' : 'column'}
        w="100%"
        maxWidth={{ base: '100vh', md: '130vh', lg: '130vh', xl: '130vh' }}
        alignItems="center"
        justifyContent="center"
        gap="10"
      >
        <Image
          src="/profile-photo.jpg"
          alt="Aman Modanwal"
          borderRadius="full"
          boxSize={{ base: '180px', md: '220px' }}
          objectFit="cover"
          border="4px solid"
          borderColor="purple.400"
          fallbackSrc="https://via.placeholder.com/220?text=Add+Photo"
        />
        <Box alignSelf="center" px={{ base: '4', md: '16' }} py="16" textAlign={{ base: 'center', md: 'left' }}>
          <Heading
            bgGradient="linear(to-r, green.400, blue.500, purple.600)"
            bgClip="text"
            fontWeight="extrabold"
            size="4xl"
          >
            Since 2022
          </Heading>
          <Text fontSize="2xl" color="gray.400">
            building embedded Linux, industrial IoT, and hardware
            communication systems — this is my portfolio of real-world
            engineering work and growth.
          </Text>
        </Box>
      </Flex>
    </>
  )
}

export default Profile
