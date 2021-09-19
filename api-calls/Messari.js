const axios = require("axios");
require("dotenv").config();
let MESSARI_KEY = process.env.MESSARI_KEY;
const BASE_URL = `https://data.messari.io/api/`;

class Messari {
  //Gets a long list of assets on the Messari exchange
  static async getAssets() {
    const result = await axios.get(`${BASE_URL}v2/assets`, {
      headers: {
        "x-messari-api-key": `${MESSARI_KEY}`,
      },
    });
    return result.data;
  }
  //Get news
  static async getNews() {
    const result = await axios.get(`${BASE_URL}v1/news`, {
      headers: {
        "x-messari-api-key": `${MESSARI_KEY}`,
      },
    });
    return result.data;
  }
  //Get Eth metrics
  static async getEthMetrics() {
    const result = await axios.get(`${BASE_URL}v1/assets/ethereum/metrics`, {
      headers: {
        "x-messari-api-key": `${MESSARI_KEY}`,
      },
    });
    return result.data;
  }
}

module.exports = Messari;
