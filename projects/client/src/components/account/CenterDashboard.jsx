import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { TweetCard } from "./TweetCard";

export const CenterDashboard = () => {
  return (
    <>
      <Box
        mt={"20px"}
        w={"full"}
        bgColor={"transparent"}
        height={"fit-content"}
      >
        <Input
          borderTop={"none"}
          borderLeft={"none"}
          borderRight={"none"}
          borderBottom={"1px"}
          borderColor={"gray.100"}
          variant={"ghost"}
          borderRadius={"0"}
          placeholder="What's Happening?"
        />
        <TweetCard />
      </Box>
    </>
  );
};
