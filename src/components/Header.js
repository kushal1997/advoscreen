// src/components/Header.js
import React from "react";
import {
  HStack,
  Text,
  Button,
  IconButton,
  Avatar,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaBell, FaCog } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlineChat, MdOutlineConnectWithoutContact } from "react-icons/md";
import advocaseImg from "../assets/images.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    { to: "/news-feed", icon: HiOutlineNewspaper, label: "News feed" },
    { to: "/find-lawyers", icon: GoPeople, label: "Find lawyers" },
    { to: "/", icon: LiaHomeSolid, label: "Home", gradient: true },
    {
      to: "/connections",
      icon: MdOutlineConnectWithoutContact,
      label: "Connections",
    },
    { to: "/chats", icon: MdOutlineChat, label: "Chats" },
  ];
  return (
    <HStack className="bg-white shadow-lg p-1 justify-between">
      <Box className="w-36 h-10 bg-transparent">
        <Image
          className="h-full w-full remove bg-transparent object-fill"
          src={advocaseImg}
          alt="Advocase Logo"
        />
      </Box>
      <HStack spacing={4}>
        {links.map(({ to, icon: Icon, label, gradient }) => (
          <Link
            key={to}
            to={to}
            p={1}
            rounded={30}
            className={`flex justify-center items-center gap-2 cursor-pointer rounded-md  w-40 font-bold ${
              gradient ? "" : "hover:bg-custom-blue"
            }`}
            style={
              gradient
                ? {
                    background:
                      "linear-gradient(to right, #025BD4 0%, #025BD4 50%,#013167 100%)",
                  }
                : {}
            }
            color={gradient ? "white" : "black"}
          >
            <Icon className="w-5 h-5" />
            {label}
          </Link>
        ))}
      </HStack>
      <HStack spacing={4}>
        <IconButton
          icon={<FaBell />}
          variant="ghost"
          className="text-gray-600"
        />
        <IconButton
          icon={<FaCog />}
          variant="ghost"
          className="text-gray-600"
        />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      </HStack>
    </HStack>
  );
};

export default Header;
