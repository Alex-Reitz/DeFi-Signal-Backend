"use strict";

const db = require("../db");
const {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} = require("../expressError");

class Favorite {
  static async toggleFavorite(favorite) {
    //Check to see if favorite is already there for this user, if so delete from table
    const duplicateCheck = await db.query(
      `SELECT username
               FROM users
               WHERE username = $1`,
      [favorite]
    );
    if (duplicateCheck.rows[0]) {
      //Delete from favorites table
    }
    //If favorite is not there for this user, add to the table
    const result = await db.query(
      `INSERT INTO favorites
              
               `,
      []
    );
  }
}

module.exports = Favorite;
