import { Box, Text, Flex, Icon } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience'
import { useContext, useEffect, useRef } from 'react'
import { ScrollContext } from './Context/ScrollContext'
import { MdCopyright } from 'react-icons/md'

function App() {
  const { scrollref } = useContext(ScrollContext)

  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const contactRef = useRef(null)
  const skillsRef = useRef(null)
  const expRef = useRef(null)

  useEffect(() => {
    scrollref?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [scrollref])

  return (
    <Box bg="#0a0a0f" minH="100vh" color="gray.100">
      <Navbar
        sections={{ aboutRef, projectRef, skillsRef, contactRef, expRef }}
      />

      <Box as="main">
        <Header aboutRef={aboutRef} />
        {/* <Profile /> */}
        <Experience expRef={expRef} />
        <Skills skillsRef={skillsRef} />
        <Projects projectRef={projectRef} />
        <Contact contactRef={contactRef} />
      </Box>

      <Flex
        as="footer"
        justify="center"
        align="center"
        gap={2}
        py={8}
        borderTop="1px solid"
        borderColor="whiteAlpha.100"
        color="gray.500"
        fontSize="sm"
      >
        <Icon as={MdCopyright} />
        <Text>{new Date().getFullYear()} Aman Modanwal · Built with React</Text>
      </Flex>
    </Box>
  )
}

export default App
