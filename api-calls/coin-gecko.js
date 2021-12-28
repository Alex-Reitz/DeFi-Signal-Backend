const BASE_URL = "https://api.coingecko.com/api/v3/coins/";
const CoinGecko = require("coingecko-api");
const axios = require("axios");

class coinGecko {
  //get data on specific project
  static async getProjectData(geckoID) {
    const result = await axios.get(`${BASE_URL}/${geckoID}`);
    return result.data;
  }
}

module.exports = coinGecko;
