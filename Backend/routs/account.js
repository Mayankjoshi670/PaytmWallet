// backend/routes/account.js
const express = require('express');
const jwt = require("jsonwebtoken")
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const {User} = require('../db')
const { default: mongoose } = require('mongoose');
const router = express.Router();
const { JWT_SECRET } = require("../config");
// const jwt = require("jsonwebtoken");
router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });
    res.json({
        balance: account.balance
    })
});
router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, to } = req.body;
    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);
    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }
    const toAccount = await Account.findOne({ userId: to }).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }
    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});
router.get('/name', async (req, res) => { 
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
          msg: 'Token is missing or not in the correct format.',
        });
      }
      const token = authHeader.split(' ')[1];
      const decoded = await jwt.verify(token, JWT_SECRET);
    //   const name = decoded;
      const userID = decoded.userId;
     const Name = await User.findOne({_id:userID});
     console.log(userID); 
      res.json({
       Name : Name.firstName
       })
  });
module.exports = router;