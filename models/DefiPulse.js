const axios = require("axios");
require("dotenv").config();
let DefiPulseKey = process.env.DEFI_PULSE_KEY;

class DefiPulse {
  //returns a list of lending tokens, uses 1 API credit
  static async getLendingTokens() {
    const result = await axios.get(
      `https://data-api.defipulse.com/api/v1/defipulse/api/GetLendingTokens?api-key=${DefiPulseKey}`
    );
    console.log(result);
    return result;
  }
  //returns TVL in each category and their dominant projects
  static async getMarketData() {
    const result = await axios.get(
      `https://data-api.defipulse.com/api/v1/defipulse/api/MarketData?api-key=${DefiPulseKey}`
    );
    console.log(result);
    return result;
  }
}

module.exports = DefiPulse;
