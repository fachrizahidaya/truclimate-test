import {  Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";

export const LeftSidebar = () => {
  return (
    <>
      <Stack pos={"relative"} left={"-50px"}>
        <Icon as={FaTwitter} color={"skyblue"} boxSize={"50px"} />
        <Flex>
          <Icon as={SearchIcon} boxSize={"20px"} pos={"relative"} top={"8px"} />
          <Text fontSize={"2xl"}>Explore</Text>
        </Flex>
        <Flex>
          <Icon
            as={SettingsIcon}
            boxSize={"20px"}
            pos={"relative"}
            top={"8px"}
          />
          <Text fontSize={"2xl"}>Settings</Text>
        </Flex>
      </Stack>
    </>
  );
};
