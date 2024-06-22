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
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RiProgress3Line } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useAppData } from "../../context/AppContext";

const GivenInformation = () => {
  const { setshowCashFlow, textArea } = useAppData();
  const studies = [
    {
      title: "The Cyberbullying Conspiracy",
      status: "Completed",
      type: "DEEDS",
      period: "10 min",
      statusColor: "green",
      statusBgColors: "green",
      icon: FaCheckCircle,
      link: "#",
    },
    {
      title: "The Data Breach Dilemma",
      status: "In progress",
      type: "CONTRACT",
      period: "1 hour ago",
      statusColor: "orange",
      statusBgColors: "orange",
      icon: RiProgress3Line,
      link: "#",
    },
    {
      title: "The Data Breach Dilemma",
      status: "Failed",
      type: "COURT ORDER",
      period: "1 Day ago",
      statusColor: "red",
      statusBgColors: "red",
      icon: BsExclamationCircle,
      link: "#",
    },
    {
      title: "The Data Breach Dilemma",
      status: "Completed",
      type: "DEEDS",
      period: "2 Days ago",
      statusColor: "green",
      statusBgColors: "green",
      icon: FaCheckCircle,
      link: "#",
    },
  ];

  const statusColors = {
    green: "#28a745",
    orange: "#FC4C02",
    red: "#f44336",
  };

  const statusBgColors = {
    green: "#d4edda",
    orange: "#fedbcc",
    red: "#fdd9d7",
  };

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
          onClick={() => setshowCashFlow(false)}
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
      {studies.map((study, index) => (
        <HStack
          width={"100%"}
          key={index}
          spacing={1}
          className="p-1 rounded-lg border border-gray-200"
          _hover={{ bg: "gray.50" }}
        >
          <VStack align="flex-start" spacing={1} width={"100%"}>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Text className="text-gray-500 font-bold text-sm">
                {study.type}
              </Text>
              <HStack
                bg={statusBgColors[study.statusBgColors]}
                rounded="lg"
                py={"1px"}
                px={3}
              >
                <Box
                  color={statusColors[study.statusColor]}
                  as={study.icon}
                  size="20px"
                />
                <Text
                  color={statusColors[study.statusColor]}
                  fontWeight={"600"}
                >
                  {study.status}
                </Text>
              </HStack>
            </HStack>
            <Tooltip label={study.title}>
              <Link
                href={study.link}
                fontSize="md"
                className="font-semibold"
                color="#025BD4"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                display="inline-block"
                maxWidth="80%"
              >
                {study.title}
              </Link>
            </Tooltip>
            <Text className="text-gray-500 text-sm">{study.period}</Text>
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default GivenInformation;
