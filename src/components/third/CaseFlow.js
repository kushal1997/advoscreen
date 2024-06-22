import React from "react";
import { Box, VStack, Text, Link, Icon, HStack } from "@chakra-ui/react";
import { FaFileAlt, FaCircle } from "react-icons/fa";
import { sections } from "../../data";

const CaseFlow = () => {
  return (
    <VStack
      className="w-[55%]"
      py={4}
      px={5}
      bg="white"
      rounded="lg"
      boxShadow="md"
      height={"fit-content"}
      alignItems={"flex-start"}
    >
      <VStack alignItems={"flex-start"} gap={0}>
        <Text fontSize="xl" fontWeight="bold">
          Case flow
        </Text>
        <Link color="blue.500" fontWeight={"bold"}>
          Select the document for drafting
        </Link>
      </VStack>

      <VStack align="stretch" spacing={3} width={"90%"}>
        {sections?.map((section, sectionIndex) => (
          <Box key={sectionIndex}>
            <HStack alignItems="center" mb={2} width={"90%"}>
              <Icon
                as={FaCircle}
                color={
                  section.items.some((item) => item.checked)
                    ? "#025BD4"
                    : "gray.400"
                }
              />
              {/* <Box
                position={"absolute"}
                borderLeft={"200px"}
                height={"290px"}
                borderColor={"gray.200"}
              /> */}

              <Text fontSize="md" fontWeight="bold">
                {section.title}
              </Text>
            </HStack>
            <HStack>
              <Box border={"1rem"} height={"90%"} borderColor={"gray"} />
              <VStack align="stretch" spacing={4} pl={6} width={"100%"} ml={1}>
                {section.items.map((item, itemIndex) => (
                  <HStack
                    key={itemIndex}
                    alignItems="flex-start"
                    border={"1px"}
                    borderColor={"gray"}
                    rounded={10}
                    px={2}
                    py={1}
                  >
                    <Icon
                      as={FaFileAlt}
                      color={item.checked ? "#025BD4" : "gray.400"}
                      mt={1}
                    />
                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight={"bold"}
                        color={"gray.700"}
                      >
                        {item.label}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {item.description}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </VStack>
  );
};

export default CaseFlow;
