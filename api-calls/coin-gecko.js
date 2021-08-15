const CoinGecko = require("coingecko-api");

const CoinGeckoClient = new CoinGecko();

console.log(CoinGecko);

class coinGecko {
  //Get Top 100 Cryptocurrency Global Eecentralized Finance(defi) data
  static async getGlobalDefiData() {
    const res = await CoinGeckoClient.global();
    console.log(res);
    return res;
  }
}

module.exports = coinGecko;
