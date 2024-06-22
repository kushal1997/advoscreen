// src/components/RecentStudies.js
import React from "react";
import { VStack, HStack, Text, Box, Badge, Link } from "@chakra-ui/react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RiProgress3Line } from "react-icons/ri";
import { BsExclamationCircle } from "react-icons/bs";
import { useAppData } from "../../context/AppContext";
const RecentStudies = () => {
  const { setStudyClicked } = useAppData();

  const studies = [
    {
      title: "Dog Bite Complaint",
      status: "Completed",
      date: "2 days ago",
      statusColor: "green",
      statusBgColors: "green",
      icon: FaCheckCircle,
      link: "#",
    },
    {
      title: "The Cyberbullying Conspiracy",
      status: "Completed",
      date: "2 days ago",
      statusColor: "green",
      statusBgColors: "green",
      icon: FaCheckCircle,
      link: "#",
    },
    {
      title: "The Data Breach Dilemma",
      status: "Completed",
      date: "2 days ago",
      statusColor: "green",
      statusBgColors: "green",
      icon: FaCheckCircle,
      link: "#",
    },
    {
      title: "The Data Breach Dilemma",
      status: "In progress",
      date: "2 days ago",
      statusColor: "orange",
      statusBgColors: "orange",
      icon: RiProgress3Line,
      link: "#",
    },
    {
      title: "The Data Breach Dilemma",
      status: "Failed",
      date: "2 days ago",
      statusColor: "red",
      statusBgColors: "red",
      icon: BsExclamationCircle,
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
      className="w-[30%]"
      spacing={3}
      align="stretch"
      p={4}
      bg="white"
      rounded="lg"
      boxShadow="md"
      height={"100%"}
    >
      <Text className="font-semibold text-lg mb-2">Recent Studies</Text>
      {studies.map((study, index) => (
        <HStack
          width={"100%"}
          key={index}
          spacing={4}
          className="p-3 rounded-lg border border-gray-200"
          _hover={{ bg: "gray.50" }}
        >
          <VStack align="flex-start" spacing={3} width={"100%"}>
            <Link
              onClick={() => setStudyClicked(true)}
              fontSize="md"
              className="font-semibold"
              color="#025BD4"
            >
              "{study.title}"
            </Link>
            <HStack width={"100%"} justifyContent={"space-between"}>
              <Text className="text-gray-500 text-sm">{study.date}</Text>
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
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default RecentStudies;
