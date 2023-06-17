import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { CenterDashboard } from "../components/CenterDashboard";
import { Footer } from "../components/Footer";

export const Dashboard = () => {
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
        <Flex
          borderWidth={"1px"}
          borderColor={"lightgray"}
          borderRadius={"20px"}
          w={"30%"}
          justify={"center"}
          mt={"10px"}
          mr={"20px"}
        >
          <RightSidebar />
        </Flex>
      </Flex>
      <Box w={"full"} pos={"fixed"} bottom={"0"}>
        <Footer />
      </Box>
    </>
  );
};
