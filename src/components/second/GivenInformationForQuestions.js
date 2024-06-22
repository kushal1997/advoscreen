// src/components/RecentStudies.js
import React from "react";
import {
  VStack,
  HStack,
  Text,
  Box,
  Badge,
  Link,
  Tooltip,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";

import { IoIosArrowBack } from "react-icons/io";
import { FaFile, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";
import { useAppData } from "../../context/AppContext";
import { getColour, getFileIcon } from "../../utils/GlobalFunction";

const GivenInformationForQuestions = () => {
  const { setStudyClicked, files, textArea } = useAppData();
  return (
    <VStack
      className="w-[25%]"
      spacing={3}
      align="stretch"
      px={4}
      py={2}
      bg="white"
      rounded="lg"
      boxShadow="md"
      height={"100%"}
    >
      <HStack>
        <Box
          color={"gray"}
          bg={"gray.200"}
          rounded={"100%"}
          p={2}
          as={IoIosArrowBack}
          size="38px"
        />
        <Button
          colorScheme="blue"
          bg={"#025BD4"}
          variant="solid"
          size="md"
          alignSelf="flex-start"
          width={"100%"}
          onClick={() => setStudyClicked(false)}
        >
          Back to home
        </Button>
      </HStack>

      <Box p={5} bg="white" width="100%">
        <Text fontSize="xl" fontWeight="bold">
          Given information
        </Text>
        <hr />
        {textArea ? (
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="medium">
              Your search
            </Text>
            <Text fontSize="sm" color="gray.500" ml={2}>
              {textArea}
            </Text>
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Text className="font-semibold text-lg">Recents</Text>
      <Box className="p-4">
        <Box className="bg-gray-100 p-4 rounded-lg shadow-md">
          <Text className="font-bold mb-2">Uploads</Text>
          <HStack gap={3} w="full" mb={1}>
            <Text>Uploaded files</Text>
            <Text
              className="text-blue-500 bg-blue-100 rounded-lg text-sm"
              fontWeight={"600"}
              px={2}
            >
              {files?.length}/5
            </Text>
          </HStack>
          {files?.map((file) => (
            <Flex
              key={file.id}
              className="bg-white p-2 mb-2 rounded-lg shadow-sm items-center"
            >
              <Box className="text-red-500 mr-4">
                <Icon
                  as={getFileIcon(file.extension)}
                  size="2x"
                  color={getColour(file.extension)}
                />
              </Box>
              <Text>{file.name}</Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </VStack>
  );
};

export default GivenInformationForQuestions;
