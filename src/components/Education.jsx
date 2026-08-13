import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  Tag,
  Icon,
} from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    place: "Dr. A.P.J. Abdul Kalam Technical University, Meerut, India",
    period: "2024 - Present",
  },
  {
    degree: "Full Stack Development",
    place: "Apna College (Hybrid), India",
    period: "01/2023 - 08/2023",
  },
  {
    degree: "Diploma, Computer Science and Engineering (74%)",
    place: "Board of Technical Education, Jaunpur, India",
    period: "2019 - 2022",
  },
];

const certifications = [
  "Problem Solving (Basic) - HackerRank",
  "DSA with Java - Apna College",
  "Master JavaScript - GeeksforGeeks",
];

const languages = ["Hindi", "English"];

const Education = ({ educationRef }) => {
  return (
    <Box ref={educationRef} padding={'10px'} mt={10}>
      <Center>
        <Heading
          display={"flex"}
          flexDirection="row"
          gap="10px"
          justifyContent={"center"}
          alignItems="center"
          fontSize="3xl"
          mb="6"
        >
          <Icon as={FaGraduationCap} />
          <Text>Education</Text>
        </Heading>
      </Center>

      <VStack spacing="6">
        {education.map((item) => (
          <Center key={item.degree} width="full">
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }}>
              <Heading fontSize="lg" mb="1">
                {item.degree}
              </Heading>
              <Text color="gray.600" mb="1">
                {item.place}
              </Text>
              <Text color="gray.500" fontSize="sm">
                {item.period}
              </Text>
            </Box>
          </Center>
        ))}
      </VStack>

      <Center mt={10}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} textAlign="center">
          <Heading fontSize="lg" mb="3">
            Certifications
          </Heading>
          <Wrap justify="center" spacing="3">
            {certifications.map((cert) => (
              <WrapItem key={cert}>
                <Tag size="lg" colorScheme="cyan" borderRadius="full" px="4" py="2">
                  {cert}
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Center>

      <Center mt={10}>
        <Box textAlign="center">
          <Heading fontSize="lg" mb="3">
            Languages
          </Heading>
          <HStack justify="center" spacing="3">
            {languages.map((lang) => (
              <Tag key={lang} size="lg" colorScheme="purple" borderRadius="full" px="4" py="2">
                {lang}
              </Tag>
            ))}
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Education;
