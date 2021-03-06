"use strict";

const express = require("express");
const jsonschema = require("jsonschema");
const { BadRequestError } = require("../expressError");
const { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const User = require("../models/User");
const Favorites = require("../models/Favorites");
const userUpdateSchema = require("../schemas/userUpdate.json");

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

//Patch a user's profile information
//Data can include firstName, lastName, email
//Returns

router.patch(
  "/:username",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const validator = jsonschema.validate(req.body, userUpdateSchema);
      if (!validator.valid) {
        const errs = validator.errors.map((e) => e.stack);
        throw new BadRequestError(errs);
      }
      const user = await User.update(req.params.username, req.body);
      return res.json({ user });
    } catch (error) {
      return next(error);
    }
  }
);

//Get a user's favorites
router.get(
  "/:username/favorites",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const selected = await Favorites.getFavorites(req.params.username);
      return res.json({ selected });
    } catch (err) {
      return next(err);
    }
  }
);

//Update a user's favorites
router.patch(
  "/:username/favorites",
  ensureCorrectUserOrAdmin,
  async function (req, res, next) {
    try {
      const selected = await Favorites.toggleFavorite(
        req.params.username,
        req.body.slug
      );
      return res.json({ selected });
    } catch (err) {
      return next(err);
    }
  }
);

module.exports = router;
