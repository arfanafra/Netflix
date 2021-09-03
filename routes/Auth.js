const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register (Create)
// Post new User
router.post("/register", async (req, res) => {
  // with this value
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // password Crtypted and hashed by CryptoJS
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  })

  try {
    // if the input correct then save the data
    const user = await newUser.save();
    res.status(201).json(user)
  } catch (err) {
    // if not then show error
    res.status(500).json(err)
  }
});

// Login
router.post("/login", async (req, res) => {

  try {
    //if email is exist then acces granted
    const user = await User.findOne({
        email: req.body.email
      })
      // but if email didn't exist then show message
      !user && res.status(401).json("Wrong Password or Username!")

    // Decrypt the password at the DMBS
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    // if the original password not match with password the user input show
    originalPassword !== req.body.password &&
      res.status(401).json("Wrong Password or Username!")


    const accessToken = jwt.sign({
        id: user._id,
        isAdmin: user.isAdmin
      },
      process.env.SECRET_KEY, {
        expiresIn: "5d"
      });

    // destruct
    const {
      password,
      ...info
    } = user._doc;

    // if match then acces granted
    res.status(200).json({
      ...info,
      accessToken
    })

  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;