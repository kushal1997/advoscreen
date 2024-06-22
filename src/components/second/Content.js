import React, { useState } from "react";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useTab,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { questions, tabs } from "../../data";

const CustomTab = React.forwardRef((props, ref) => {
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps["aria-selected"];

  return (
    <button
      {...tabProps}
      className={`px-8 py-2 focus:outline-none ${
        isSelected
          ? "bg-gradient-to-r from-blue-500 to-blue-900 text-white"
          : "text-gray-600"
      }`}
      style={
        isSelected
          ? {
              background: "linear-gradient(to right, #025BD4 0%, #013167 100%)",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }
          : {}
      }
    >
      {tabProps.children}
    </button>
  );
});

const App = () => {
  const [tabIndex, setTabIndex] = useState(4);
  const [showData, setShowData] = useState(true);

  return (
    <VStack
      className="w-[70%]"
      spacing={4}
      p={4}
      bg="white"
      rounded="lg"
      boxShadow="md"
      height={"100%"}
      alignItems={"center"}
    >
      <Tabs
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}
        variant="enclosed"
        size="md"
        width={"100%"}
        isFitted
      >
        <TabList>
          {tabs?.map((tab) => (
            <CustomTab key={tab.id}>{tab.label}</CustomTab>
          ))}
        </TabList>
        <TabPanels>
          {tabs?.map((tab) => (
            <TabPanel key={tab.id}>
              {tab.id === "questions" && (
                <VStack alignItems={"flex-start"}>
                  <VStack alignItems={"flex-start"}>
                    <Text fontSize={"xl"} fontWeight={"600"}>
                      Questions
                    </Text>
                    <HStack ml={6} width={"100%"} justifyContent={"flex-start"}>
                      <Button
                        colorScheme="blue"
                        size="md"
                        w="15rem"
                        float={"right"}
                        rounded={20}
                        onClick={() => setShowData(true)}
                        bgGradient="linear(to-r, #025BD4 0%, #013167 100%)" // Gradient from light to dark
                        _hover={{
                          bgGradient: "linear(to-r, #0171FD 0%, #025BD4 100%)",
                        }} // Optional: gradient on hover
                      >
                        By Petioner
                      </Button>
                      <Button
                        colorScheme="gray"
                        size="md"
                        w="15rem"
                        float={"right"}
                        rounded={20}
                        onClick={() => setShowData(false)}
                      >
                        By Respondant
                      </Button>
                    </HStack>
                  </VStack>
                  {showData ? (
                    <Box maxH={"62vh"} overflowY={"scroll"}>
                      {questions
                        ?.filter(
                          (q) => q.tab === tab.id && q.type === "petitioner"
                        )
                        .map((q, i) => (
                          <Box key={q.id} className="mb-1 p-4 border-b">
                            <Box className="font-bold text-lg">
                              {i + 1}. {q.question}
                            </Box>
                            <Text fontWeight={"600"}>Reason -</Text>
                            <Box className="text-sm mt-1">{q.reason}</Box>
                          </Box>
                        ))}
                    </Box>
                  ) : (
                    <Text>Nothing to show here</Text>
                  )}
                </VStack>
              )}
              {tab.id !== "questions" && <Box>Content for {tab.label} tab</Box>}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default App;
