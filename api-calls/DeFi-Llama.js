const axios = require("axios");

const BASE_URL = `https://api.llama.fi`;

class DeFiLlama {
  //Get's information on all listed protocols
  static async getProtocols() {
    const result = await axios.get(`${BASE_URL}/protocols`);
    return result.data;
  }

  //Get's charts
  static async getCharts() {
    const result = await axios.get(`${BASE_URL}/charts`);
    return result.data;
  }
}

module.exports = DeFiLlama;
