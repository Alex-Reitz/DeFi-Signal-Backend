const axios = require("axios");
require("dotenv").config();
let MESSARI_KEY = process.env.MESSARI_KEY;
const BASE_URL = `https://data.messari.io/api/`;

class Messari {
  //Gets a long list of assets listed on the Messari exchange
  static async getAssets() {
    const result = await axios.get(`${BASE_URL}v2/assets`, {
      headers: {
        "x-messari-api-key": `${MESSARI_KEY}`,
      },
    });
    console.log(result);
    return result.data;
  }
}

module.exports = Messari;
