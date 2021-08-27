const axios = require("axios");

const BASE_URL = `https://api.llama.fi`;

class DeFiLlama {
  //Get's information on all listed protocols
  static async getProtocols() {
    const result = await axios.get(`${BASE_URL}/protocols`);
    return result.data;
  }

  //Get's TVL for all chains and returns charts data
  static async getCharts() {
    const result = await axios.get(`${BASE_URL}/charts`);
    return result.data;
  }
  //Get Eth TVL chart only
  static async ethChart() {
    const result = await axios.get(`${BASE_URL}/charts/ethereum`);
    return result.data;
  }
  //Get binance TVL chart only
  static async binanceChart() {
    const result = await axios.get(`${BASE_URL}/charts/binance`);
    return result.data;
  }
  //Get solana TVL chart only
  static async solanaChart() {
    const result = await axios.get(`${BASE_URL}/charts/solana`);
    return result.data;
  }
  //Get polygon TVL chart only
  static async polygonChart() {
    const result = await axios.get(`${BASE_URL}/charts/polygon`);
    return result.data;
  }
}

module.exports = DeFiLlama;
