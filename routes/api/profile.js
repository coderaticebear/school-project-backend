const express = require("express")
const router = express.Router();
const Profile = requrie("../../models/Profile")
const settings = require("../../config/settings")
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jsonwt = require("jsonwebtoken");
router.use(express.json());
router.use(express.urlencoded());


/**
 * @async
 * 
 * Add profile
 * 
 */

router.post("/addProfile", [
    body("firstname").notEmpty().trim(),
    body("lastname").notEmpty().trim(),
    body("phone").isMobilePhone(),
    body("adressOne").notEmpty().trim(),
    body("addressTwo").trim(),
    body("city").notEmpty().trim(),
    body("province").notEmpty().trim(),
    body("zip").notEmpty().trim(),


], async (req, res) => {


})