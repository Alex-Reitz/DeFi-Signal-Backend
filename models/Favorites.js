"use strict";

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

class Favorite {
  static async getFavorites(username) {
    //If favorite is not there for this user, add to the table
    const result = await db.query(
      `SELECT * FROM favorites WHERE username = $1`,
      [username]
    );
    return result.rows;
  }

  static async toggleFavorite(username, slug) {
    //Check to see if favorite is already there for this user, if so delete from table

    const duplicateCheck = await db.query(
      `SELECT *
               FROM favorites
               WHERE asset = $1`,
      [slug]
    );
    if (duplicateCheck.rows[0]) {
      //Delete from favorites table
      await db.query(
        `DELETE FROM favorites
        WHERE username = $1 and asset = $2`,
        [username, slug]
      );
    } else {
      //If favorite is not there for this user, add to the table
      const result = await db.query(
        `INSERT INTO favorites(asset, username)
    VALUES ($1, $2)
    RETURNING *`,
        [slug, username]
      );
    }
  }
}

module.exports = Favorite;
