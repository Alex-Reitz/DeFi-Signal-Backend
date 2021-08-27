const CoinGecko = require("coingecko-api");

const CoinGeckoClient = new CoinGecko();

class coinGecko {
  //Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data
  static async getGlobalDefiData() {
    const res = await CoinGeckoClient.global();
    return res;
  }
}

module.exports = coinGecko;
