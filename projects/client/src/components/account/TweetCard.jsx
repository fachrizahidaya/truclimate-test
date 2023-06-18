import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const TweetCard = () => {
  const [data, setData] = useState([]);
  const tweetPost = async () => {
    const result = await axios.get(`http://localhost:8000/user/list`);
    setData(result.data);
  };
  console.log(data);

  useEffect(() => {
    tweetPost();
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <Card
            mt={"10px"}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Avatar ml={"20px"} mt={"10px"} name={item?.User?.userName}></Avatar>

            <Stack>
              <CardBody>
                <Heading size="md">{item?.User?.userName}</Heading>

                <Text py="2">
                  {item?.content}
                </Text>
              </CardBody>

              <CardFooter></CardFooter>
            </Stack>
          </Card>
        );
      })}
    </>
  );
};
