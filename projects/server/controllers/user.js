const db = require("../models");
const user = db.User;
const account = db.Account;
const post = db.Post;
const follow = db.Follow;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

module.exports = {
  register: async (req, res) => {
    try {
      const { userName, password } = req.body;
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      const t = await db.sequelize.transaction();
      try {
        var data = await user.create(
          {
            userName,
            password: hashPassword,
          },
          { transaction: t }
        );
        console.log(data);
        await account.create(
          {
            UserId: data.dataValues.id,
            desc: data.dataValues.userName,
          },
          { transaction: t }
        );
        await t.commit();
      } catch (error) {
        await t.rollback();
      }

      res.status(200).send({
        message: "Register success",
        data: data,
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
      // console.log(error)
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

  tweet: async (req, res) => {
    try {
      const result = await user.findOne({
        where: {
          id: req.params.id,
        },
      });
      const { content } = req.body;
      const data = await post.create({
        content: content,
        UserId: result.id,
      });
      res.status(200).send({
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  tweetList: async (req, res) => {
    try {
      const data = await post.findAll({
        include: [{ model: user }],
        order: [["createdAt", "DESC"]],
      });
      res.status(200).send(data);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  followAccount: async (req, res) => {
    try {
      const t = await db.sequelize.transaction();
      try {
        var result = await user.findOne(
          {
            where: {
              id: req.params.idUser,
            },
          },
          { transaction: t }
        );
        console.log(result);
        var result2 = await account.findOne(
          {
            where: {
              id: req.params.idAccount,
            },
          },
          { transaction: t }
        );
        console.log(result2);
        var data = await follow.create(
          {
            UserId: result.id,
            AccountId: result2.UserId,
            isFollow: 1,
          },
          { transaction: t }
        );
        console.log(data);
      } catch (error) {
        await t.rollback();
        console.log(error);
      }
      res.status(200).send({ data });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  follows: async (req, res) => {
    try {
      const result = await follow.update(
        { isFollow: true },
        {
          where: {
            UserId: req.params.idUser,
            AccountId: req.params.idAccount,
          },
        }
      );
      res.status(200).send({ message: "followed" });
    } catch (error) {
      res.status(400).send(error);
    }
  },

  unfollow: async (req, res) => {
    try {
      const result = await follow.update(
        { isFollow: false },
        {
          where: {
            UserId: req.params.idUser,
            AccountId: req.params.idAccount,
          },
        }
      );
      res.status(200).send({ message: "unfollowed" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
};
