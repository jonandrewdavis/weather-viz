import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Code,
  Heading,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

const About = ({ isOpen, onClose, finalRef }) => {
  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>About</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            React viz playground & weather tracker by{" "}
            <Link
              color="teal.500"
              href="https://www.jonandrewdavis.com"
              isExternal
            >
              Andrew Davis
            </Link>
            . Created with:
          </Text>
          <UnorderedList mb={10}>
            <ListItem>
              A "from scratch" mix of: <Code>npm init</Code>,{" "}
              <Code>yarn add react react-dom</Code>, babel & webpack. (Maybe try{" "}
              <Link
                color="teal.500"
                isExternal
                href="https://vitejs.dev/guide/why.html#the-problems"
              >
                Vite
              </Link>{" "}
              next time.)
            </ListItem>

            <ListItem>
              Async state management:{" "}
              <Link
                color="teal.500"
                href="https://tanstack.com/query/v4"
                isExternal
              >
                TanStack (React) Query <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              Timeseries charting:{" "}
              <Link
                color="teal.500"
                href="https://github.com/leeoniya/uPlot"
                isExternal
              >
                uPlot <ExternalLinkIcon mx="2px" />
              </Link>
              . Used at{" "}
              <Link href="https://grafana.com/" isExternal color="teal.500">
                Grafana <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              Components from:{" "}
              <Link color="teal.500" href="https://chakra-ui.com/" isExternal>
                Chakra UI <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              Forecast data from:{" "}
              <Link
                color="teal.500"
                href="https://openweathermap.org/api"
                isExternal
              >
                Open Weather API <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              Historical data from:{" "}
              <Link
                color="teal.500"
                href="https://dev.meteostat.net/"
                isExternal
              >
                Meteostat Developers <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              Colors by:{" "}
              <Link
                color="teal.500"
                href="https://gka.github.io/chroma.js/"
                isExternal
              >
                Chroma.js <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          </UnorderedList>
          <Heading size="md">FAQ</Heading>
          <Text as="i" py={10}>
            Why no TypeScript?
          </Text>
          <Text>
            I would have loved to have it, but I had some issues with the LSP.
            Likely due to my OS,{" "}
            <Link
              href="https://jonandrewdavis.com/wsl-zsh-workflow/"
              isExternal
              color="teal.500"
            >
              Alpine Linux on Windows
            </Link>
            . Sorted it out after, but too late to go back and add.
          </Text>
          <Text as="i" py={10}>
            Why isn't this responsive?
          </Text>
          <Text>
            Currently targeting a desktop monitor size. Responsive is low lift.
            Looking at options.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default About;
