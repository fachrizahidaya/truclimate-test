import { Flex } from "@chakra-ui/react";
import React from "react";
import { LeftSidebar } from "../components/account/LeftSidebar";
import { CenterDashboard } from "../components/account/CenterDashboard";
import { RightSidebar } from "../components/account/RightSidebar";

export const DashboardAccount = () => {
  return (
    <>
      <Flex gap={"5px"}>
        <Flex justify={"center"} w={"30%"} ml={"20px"}>
          <LeftSidebar />
        </Flex>
        <Flex
          borderWidth={"1px"}
          borderColor={"lightgray"}
          borderTop={"none"}
          borderBottom={"none"}
          justify={"center"}
          w={"40%"}
          pos={"relative"}
          right={"20px"}
        >
          <CenterDashboard />
        </Flex>
        <Flex w={"30%"} justify={"center"} mt={"10px"} mr={"20px"}>
          <RightSidebar />
        </Flex>
      </Flex>
    </>
  );
};
