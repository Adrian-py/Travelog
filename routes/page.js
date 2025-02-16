const express = require("express");
const router = express.Router();

const {
  getLoginPage,
  getRegisterPage,
  getDashboardPage,
  getDestinationPage,
  getComposePage,
  getHomePage,
} = require("../controllers/pageController");

router.route("/login").get(getLoginPage);
router.route("/register").get(getRegisterPage);
router.route("/dashboard").get(getDashboardPage);
router.route("/destination").get(getDestinationPage);
router.route("/compose").get(getComposePage);
router.route("/").get(getHomePage);

module.exports = router;
