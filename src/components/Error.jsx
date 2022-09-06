import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Code,
  Container,
} from "@chakra-ui/react";
import React from "react";

const Error = ({ error }) => (
  <Container>
    <Alert
      mt={12}
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="30px" mr={0} />
      <AlertTitle mt={1} mb={1} fontSize="lg">
        Something went wrong:
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        <Code colorScheme="red" children={`error.message: ${error.message}`} />
      </AlertDescription>
    </Alert>
  </Container>
);

export default Error;
