import {
  Avatar,
  Button,
  Flex,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { CiUser, CiMail, CiBellOn, CiSettings, CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

export const LeftSidebar = () => {
  const { userName } = useSelector((state) => state.userSlice.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = async () => {
    try {
      dispatch(logoutUser());
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack pos={"relative"} left={"-50px"}>
        <Icon as={FaTwitter} color={"skyblue"} boxSize={"50px"} />
        <Flex>
          <Icon as={CiSearch} boxSize={"20px"} pos={"relative"} top={"8px"} />
          <Text fontSize={"2xl"}>Explore</Text>
        </Flex>
        <Flex>
          <Icon as={CiBellOn} boxSize={"20px"} pos={"relative"} top={"8px"} />
          <Text fontSize={"2xl"}>Notifications</Text>
        </Flex>
        <Flex>
          <Icon as={CiMail} boxSize={"20px"} pos={"relative"} top={"8px"} />
          <Text fontSize={"2xl"}>Messages</Text>
        </Flex>
        <Flex>
          <Icon as={CiUser} boxSize={"20px"} pos={"relative"} top={"8px"} />
          <Text fontSize={"2xl"}>Profile</Text>
        </Flex>
        <Flex>
          <Icon as={CiSettings} boxSize={"20px"} pos={"relative"} top={"8px"} />
          <Text fontSize={"2xl"}>Settings</Text>
        </Flex>
        <Popover>
          <PopoverTrigger>
            <Button variant={"unstyled"}>
              <Avatar name={userName}></Avatar>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />

              {/* <PopoverBody> */}
              <Button onClick={onLogout} w={"auto"} colorScheme="red">
                Logout
              </Button>
              {/* </PopoverBody> */}
            </PopoverContent>
          </Portal>
        </Popover>
      </Stack>
    </>
  );
};
