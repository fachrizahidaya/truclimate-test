import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/userSlice";

export const LoginButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const inputUsername = useRef("");
  const inputPassword = useRef("");
  const navigate = useNavigate();
  const onLogin = async () => {
    try {
      const user = {
        userName: inputUsername.current.value,
        password: inputPassword.current.value,
      };
      const result = await axios.post(`http://localhost:8000/user/login`, user);
      console.log(result)
      dispatch(
        loginUser({
          userName: result.data.isAccountExist.userName,
          id: result.data.isAccountExist.id,
        })
      );
      localStorage.setItem("token", result.data.token);
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Sign In</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
            <Text>Login to your Account</Text>
          </ModalHeader>
          <ModalBody>
            <FormControl>
              <Stack>
                <Input ref={inputUsername} type="text" placeholder="Username" />
                <Input
                  ref={inputPassword}
                  type="password"
                  placeholder="Password"
                />
                <Button
                  onClick={onLogin}
                  mt={"50px"}
                  colorScheme="blue"
                  borderRadius={"20px"}
                >
                  Login
                </Button>
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter pos={"relative"} left={"-220px"}>
            Don't have an account?
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
