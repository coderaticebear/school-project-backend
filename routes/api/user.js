const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const settings = require("../../config/settings");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

router.use(express.json());
router.use(express.urlencoded());

/**
 *
 * @async
 *
 * add logn entry
 */
router.post(
  "/setLogin",
  [
    body("username").notEmpty().trim(),
    body("email").notEmpty().isEmail().normalizeEmail(),
    body("password").notEmpty(),
    body("role").notEmpty().trim(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          status: false,
          message: "validation error",
          errors: errors.array(),
        });
      }

      const { username, email, password, role } = req.body;
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const user = new User({
        username,
        email,
        password: hashedPassword,
        role,
      });
      user.createdAt = new Date().toISOString();

      //need to check if user already exists or not
      //Unique would be email and user name

      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        return res.status(400).json({
          status: false,
          message: "Username already exists!",
          errors: [],
        });
      }

      const existingEmail = await User.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({
          status: false,
          message: "Email already exists!",
          errors: [],
        });
      }
      await Promise.all([user.save()]);

      res.status(200).json({
        status: true,
        data: {
          username: user.username,
        },
        message: "User details added successfully",
      });
    } catch (err) {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        errors: errors.array(),
      });
    }
  }
);

/**
 * @async
 *
 * Login
 */

router.post("/login", [

  body("username").notEmpty().trim(),
  boyd("password").notEmpty()
],async (req, res) => {
  

  try {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json({

        status: false,
        message: "Username or password cannot be empty!",
        errors: errors.array()
      })
    }

    const {username, password} = req.body;
    const user = await User.findOne({username})

    if(user) {

      const passwordCheck = await bcrypt.compare(password, user.password)
      if(passwordCheck) {
        
      }
    }

  } catch(err) {

    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      errors: []
    })
  }
  
});

module.exports = router;
