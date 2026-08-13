import { Box, Center, Heading, Icon, Text } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import Styles from "../styles/stats.module.css";

const Githubstat = () => {


  return (
    <Box width="90%" margin="auto">
      <br />
      <Center>
        {' '}
        <Heading>
          <Icon as={SiGithub}></Icon> Github Stats
        </Heading>
      </Center>
      <div className={Styles.stats}>
        <div>
          <Center>
            <Text>⚡Activity Graph:</Text>
          </Center>

          <img
            style={{ display: 'block', margin: 'auto', width: '80%' }}
            alt="Aman Modanwal's GitHub Activity Graph"
            src="https://github-readme-activity-graph.vercel.app/graph?username=amanmodanwal28&bg_color=000000&color=1dc2d7&line=42fffc&point=faffff&area=true&hide_border=true"
          />
        </div>
      </div>
    </Box>
  )
};

export default Githubstat;
