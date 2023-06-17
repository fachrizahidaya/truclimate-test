const db = require("../models");
const user = db.User;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports = {
  register: async (req, res) => {
    try {
      const { userName, password } = req.body;
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      const data = await user.create({
        userName,
        password: hashPassword,
      });
      const payload = {
        userName: data.userName,
        password: data.password,
      };
      //   const token = jwt.sign(payload, "twitter", { expiresIn: "1h" });
      res.status(200).send({
        message: "Register success",
        data,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async (req, res) => {
    try {
      const { userName, password } = req.body;
      const isAccountExist = await user.findOne({
        where: {
          userName: userName || "",
        },
      });
      if (!isAccountExist) throw "Account not found";
      const isValid = await bcrypt.compare(password, isAccountExist.password);
      if (!isValid) throw "Incorrect password";
      const payload = {
        userName: isAccountExist.userName,
      };
      const token = jwt.sign(payload, "twitter");
      res.status(200).send({
        message: "Welcome to twitter",
        isAccountExist,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  keepLogin: async (req, res) => {
    try {
      const verify = jwt.verify(req.token, "twitter");
      const result = await user.findOne({
        where: {
          userName: verify.userName,
        },
      });
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
