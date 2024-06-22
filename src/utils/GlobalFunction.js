import { FaFile, FaFileImage, FaFilePdf, FaFileWord } from "react-icons/fa";

export const getFileIcon = (extension) => {
  switch (extension) {
    case "pdf":
      return FaFilePdf;
    case "docx":
      return FaFileWord;
    case "jpg":
    case "jpeg":
    case "png":
      return FaFileImage;
    default:
      return FaFile;
  }
};
export const getColour = (extension) => {
  switch (extension) {
    case "pdf":
      return "red.500";
    case "docx":
      return "blue.500";
    case "jpg":
    case "jpeg":
    case "png":
      return "green.500";
    default:
      return "gray.500";
  }
};
