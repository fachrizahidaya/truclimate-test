import React from "react";
import { LoginButton } from "./LoginButton";
import { ButtonRegister2 } from "./ButtonRegister2";
import { Box, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Flex bgColor={"skyblue"}>
        <Box pos={"relative"} left={"300px"}>
          <Text fontSize={"2xl"}>Don't miss what's happening</Text>
          <Text>Don't miss what's happening</Text>
        </Box>
        <ButtonGroup pos={"relative"} top={"8px"} right={"-1000px"}>
          <LoginButton />
          <ButtonRegister2 />
        </ButtonGroup>
      </Flex>
    </>
  );
};
