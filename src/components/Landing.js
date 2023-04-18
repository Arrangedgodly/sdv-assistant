import { Flex, Heading, Text } from "@chakra-ui/react";

function Landing() {
  return (
    <Flex direction='column' justify='center' align='center' minH='90vh'>
      <Heading>
        Welcome to SDV Assistant
      </Heading>
      <Text>
        Permenantly located on your secondary monitor from here on out
      </Text>
    </Flex>
  )
}

export default Landing;