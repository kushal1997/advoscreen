// src/components/CaseInfo.js
import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Text,
  Input,
  Box,
  Button,
  Link,
  Textarea,
  Icon,
} from "@chakra-ui/react";
import { FaTimes } from "react-icons/fa";
import { LuFileInput, LuUpload } from "react-icons/lu";
import { useAppData } from "../../context/AppContext";
import { getColour, getFileIcon } from "../../utils/GlobalFunction";

const CaseInfo = () => {
  const { setshowCashFlow, setFiles, files, setTextArea, textArea } =
    useAppData();
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    // Whenever the 'files' array changes, update the 'uploadedFiles' state
    setUploadedFiles(files);
  }, [files]);
  const handleRemoveFile = (fileName) => {
    setUploadedFiles(uploadedFiles.filter((file) => file.name !== fileName));
  };

  const handleFileUpload = (event) => {
    if (files?.length === 5) {
      alert("Already five files are uploaded. You can't add more");
      return;
    }
    const newFiles = Array.from(event.target.files).map((file, index) => ({
      id: files.length + index + 1,
      name: file.name,
      extension: file.name.split(".").pop(),
    }));

    setFiles([...files, ...newFiles]);
  };

  const handleDrop = (event) => {
    if (files?.length === 5) {
      alert("Already five files are uploaded. You can't add more");
      return;
    }
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files).map(
      (file, index) => ({
        id: files.length + index + 1,
        name: file.name,
        extension: file.name.split(".").pop(),
      })
    );

    setFiles([...files, ...newFiles]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <VStack
      className="w-[70%]"
      spacing={4}
      p={4}
      bg="white"
      rounded="lg"
      boxShadow="md"
      height={"100%"}
    >
      <HStack spacing={2} className="mb-2" width={"100%"}>
        <Box as={LuFileInput} color="#025BD4" size="24px" />
        <Text className="font-semibold text-lg">
          Get Complete info about any case from AI-driven research assistance
        </Text>
      </HStack>

      <Textarea
        placeholder="Ex : Land dispute, Mumbai, recent judgments."
        size="lg"
        className="mb-2"
        borderColor="gray.300"
        value={textArea || ""}
        onChange={(e) => setTextArea(e.target.value)}
      />

      <Box
        className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg"
        borderColor="gray.300"
        bg="gray.50"
        width={"100%"}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Icon
          as={LuUpload}
          boxSize={"3rem"}
          color="gray-400"
          className=" text-gray-500"
        />
        <Text>
          Drag and drop here or click here to{" "}
          <Link href="#" color="blue.500">
            <Input
              type="file"
              onChange={handleFileUpload}
              multiple
              style={{ display: "none" }}
              id="file-input"
            />
            <label htmlFor="file-input" style={{ cursor: "pointer" }}>
              Upload a file
            </label>
          </Link>
        </Text>
        <br />
        <Text className="text-sm text-gray-500">Maximum uploads: 1</Text>
        <Text className="text-sm text-gray-500">
          File formats: JPG, PNG, docx, Pdf, etc.
        </Text>
      </Box>
      <VStack justifyContent={"space-between"} width={"100%"} height={"100%"}>
        <VStack
          className="w-full"
          align="stretch"
          spacing={2}
          width={"100%"}
          maxHeight={"250px"}
          overflowY={"scroll"}
        >
          <Box
            position="sticky"
            top="0"
            zIndex="sticky"
            bg="white"
            py={2}
            px={3}
            borderBottomWidth="1px"
            width="100%"
          >
            <HStack gap={3} w="full">
              <Text>Uploaded files</Text>
              <Text
                className="text-blue-500 bg-blue-100 rounded-lg text-sm"
                fontWeight={"600"}
                px={2}
              >
                {files?.length}/5
              </Text>
            </HStack>
          </Box>
          {uploadedFiles?.map((file, index) => (
            <HStack
              key={index}
              spacing={4}
              p={3}
              rounded="lg"
              className="bg-gray-100"
              _hover={{ bg: "gray.50" }}
              justifyContent="space-between"
            >
              <HStack>
                <Icon
                  as={getFileIcon(file.extension)}
                  size="20px"
                  color={getColour(file.extension)}
                />
                <Text>{file.name}</Text>
              </HStack>
              <Icon
                cursor="pointer"
                as={FaTimes}
                size="sm"
                onClick={() => handleRemoveFile(file.name)}
                aria-label="Remove file"
              />
            </HStack>
          ))}
        </VStack>

        <HStack width={"100%"} justifyContent={"flex-end"}>
          <Button
            onClick={() => {
              if (textArea) {
                setshowCashFlow(true);
              } else {
                alert("First type something in the search area");
              }
            }}
            colorScheme="blue"
            size="md"
            w="18rem"
            float={"right"}
            rounded={20}
            bgGradient="linear(to-r, #025BD4 0%, #013167 100%)" // Gradient from light to dark
            _hover={{ bgGradient: "linear(to-r, #0171FD 0%, #025BD4 100%)" }} // Optional: gradient on hover
          >
            Start
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default CaseInfo;
