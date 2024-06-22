import { Flex, Box, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HiOutlineNewspaper } from "react-icons/hi";
import { GoPeople } from "react-icons/go";
import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlineConnectWithoutContact, MdOutlineChat } from "react-icons/md";
import { CiSettings, CiBellOn } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import advocaseImg from "../assets/images.png"; // Adjust the import to the correct path

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

const Navbar = () => {
  return (
    <Flex className="w-full h-12 shadow-2xl items-center bg-gray-200 justify-between">
      <Box className="w-36 h-10 bg-transparent">
        <Image
          className="h-full w-full remove bg-transparent object-fill"
          src={advocaseImg}
          alt="Advocase Logo"
        />
      </Box>
      <Flex className="w-[60%] h-10 justify-around font-inter">
        {links.map(({ to, icon: Icon, label, gradient }) => (
          <NavLink
            key={to}
            to={to}
            className={`flex justify-center items-center gap-2 cursor-pointer rounded-md w-32 ${
              gradient ? "" : "hover:bg-custom-blue"
            }`}
            style={
              gradient
                ? {
                    background:
                      "linear-gradient(to right, #025BD4 0%, #013167 100%)",
                  }
                : {}
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </Flex>
      <Flex className="w-[20%] h-10 gap-8 items-center justify-center">
        <CiSettings className="w-7 h-7" />
        <CiBellOn className="w-7 h-7" />
        <CgProfile className="w-7 h-7" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
