import React from "react";
import { Box, VStack, Icon, Button, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { FaCheckCircle } from "react-icons/fa";
import { steps } from "../../data";

const ProgressBar = () => {
  return (
    <VStack
      w="20%"
      p={4}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      height={"100%"}
      justifyContent={"space-between"}
    >
      <VStack align="stretch" spacing={0} position="relative">
        {steps?.map((step, index) => (
          <Box key={index} position="relative">
            <Box display="flex" alignItems="flex-start" mb={2}>
              <VStack>
                <Icon
                  position={"relative"}
                  as={step.checked ? CheckCircleIcon : FaCheckCircle}
                  color={step.checked ? "#025BD4" : "gray.400"}
                  boxSize={5}
                  mr={2}
                  mb={5}
                />
                {index + 1 === steps?.length ? (
                  ""
                ) : (
                  <Box
                    position={"absolute"}
                    top={5}
                    left={2}
                    borderLeft={"2px"}
                    height={"29px"}
                    borderColor={step.checked ? "#b3cef2" : "gray.200"}
                  ></Box>
                )}
              </VStack>

              <Text
                fontWeight={step.checked ? "bold" : "normal"}
                color={step.checked ? "#025BD4" : "gray.400"}
              >
                {step.label}
              </Text>
            </Box>
            {index < steps.length - 1 && (
              <Box
                position="absolute"
                top="50%"
                left="10px"
                width="1px"
                height="calc(100% + 16px)" // Adjusting for spacing
                bg={steps[index + 1].checked ? "#025BD4" : "gray.400"}
                zIndex="-1"
              />
            )}
          </Box>
        ))}
      </VStack>
      <Button mt={4} colorScheme="blue" w="full" bg={"#025BD4"} variant="solid">
        Continue
      </Button>
    </VStack>
  );
};

export default ProgressBar;
