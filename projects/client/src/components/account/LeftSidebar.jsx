import { Avatar, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { CiUser, CiMail, CiBellOn, CiSettings, CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

export const LeftSidebar = () => {
  const { userName } = useSelector((state) => state.userSlice.value);
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
        <Avatar name={userName}></Avatar>
      </Stack>
    </>
  );
};
