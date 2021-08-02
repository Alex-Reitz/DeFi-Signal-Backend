"use strict";

const express = require("express");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const User = require("../models/User");

const router = express.Router();

/** GET / => { users: [ {username, firstName, lastName, email }, ... ] }
 * Returns list of all users.
 * Authorization required: admin
 **/
router.get("/", ensureAdmin, async function (req, res, next) {
  try {
    const users = await User.findAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
});

/** GET /[username] => { user }
 * Returns { username, firstName, lastName, isAdmin }
 * Authorization required: admin or same user-as-:username
 **/
router.get(
  "/:username",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const user = await User.get(req.params.username);
      return res.json({ user });
    } catch (err) {
      return next(err);
    }
  }
);

/** DELETE /[username]  =>  { deleted: username }
 * Authorization required: admin or same-user-as-:username
 **/

router.delete(
  "/:username",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      await User.remove(req.params.username);
      return res.json({ deleted: req.params.username });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
