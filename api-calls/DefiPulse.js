const axios = require("axios");
require("dotenv").config();
let DefiPulseKey = process.env.DEFI_PULSE_KEY;
const BASE_URL = `https://data-api.defipulse.com/api/v1/defipulse/api/`;

class DefiPulse {
  //returns a list of lending tokens, uses 1 API credit
  static async getGasData() {
    const result = await axios.get(
      `https://data-api.defipulse.com/api/v1/egs/api/ethgasAPI.json?api-key=${DefiPulseKey}`
    );
    return result.data;
  }
  //returns a list of lending tokens, uses 1 API credit
  static async getLendingTokens() {
    const result = await axios.get(
      `${BASE_URL}GetLendingTokens?api-key=${DefiPulseKey}`
    );
    return result.data;
  }
  //returns TVL in each category and their dominant projects
  static async getMarketData() {
    const result = await axios.get(
      `${BASE_URL}MarketData?api-key=${DefiPulseKey}`
    );
    return result.data;
  }
  //returns data on all projects listed on DeFi Pulse's API
  static async getProjects() {
    const result = await axios.get(
      `${BASE_URL}GetProjects?api-key=${DefiPulseKey}`
    );
    return result.data;
  }
}

module.exports = DefiPulse;
