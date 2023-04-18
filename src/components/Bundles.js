import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
} from '@chakra-ui/react';

function Bundles() {
  return (
    <Tabs align="center">
      <TabList>
        <Tab>Crafts Room</Tab>
        <Tab>Pantry</Tab>
        <Tab>Fish Tank</Tab>
        <Tab>Boiler Room</Tab>
        <Tab>Bulletin Board</Tab>
        <Tab>Vault</Tab>
        <Tab>Abandoned JojaMart</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Accordion allowToggle="true" allowMultiple="true" maxW="75vw">
            <AccordionItem>
              <h3>
                <AccordionButton>
                  Spring Foraging
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel>
                <SimpleGrid></SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Bundles;
