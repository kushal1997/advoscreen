// src/App.js
import React from "react";
import { ChakraProvider, Box, HStack } from "@chakra-ui/react";
import theme from "./theme";
import Header from "./components/Header";
import CaseInfo from "./components/first/CaseInfo";
import RecentStudies from "./components/first/RecentStudies";
import CaseFlow from "./components/third/CaseFlow";
import ProgressBar from "./components/third/Progress";
import Navbar from "./components/Navbar";
import Questions from "./components/second/Content";
import GivenInformationForQuestions from "./components/second/GivenInformationForQuestions";
import { useAppData } from "./context/AppContext";
import GivenInformation from "./components/third/GivenInformation";
const App = () => {
  const { studyClicked, showCashFlow } = useAppData();
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box className=" bg-blue-100" px={"10%"} height={"90vh"}>
        <Box className="p-6" height={"100%"}>
          {!studyClicked ? (
            !showCashFlow && (
              <HStack spacing={3} align="flex-start" height={"100%"}>
                <RecentStudies />
                <CaseInfo />
              </HStack>
            )
          ) : (
            <HStack spacing={3} align="flex-start" height={"100%"}>
              <GivenInformationForQuestions />
              <Questions />
            </HStack>
          )}

          {showCashFlow && (
            <HStack spacing={3} align="flex-start" height={"100%"}>
              <GivenInformation />
              <CaseFlow />
              <ProgressBar />
            </HStack>
          )}
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default App;
