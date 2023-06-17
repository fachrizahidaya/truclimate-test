import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { loginUser } from "./features/userSlice";
import { DashboardAccount } from "./pages/DashboardAccount";

function App() {
  const dispatch = useDispatch();
  const tokenUser = localStorage.getItem("token");
  const keepLoginUser = async () => {
    try {
      const user = await axios.get(`http://localhost:8000/user/`, {
        headers: {
          Authorization: `Bearer ${tokenUser}`,
        },
      });
      dispatch(
        loginUser({
          id: user.data.id,
          userName: user.data.userName,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    tokenUser ? keepLoginUser() : console.log("Logged in to Twitter");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<DashboardAccount />}></Route>
      </Routes>
    </div>
  );
}

export default App;
