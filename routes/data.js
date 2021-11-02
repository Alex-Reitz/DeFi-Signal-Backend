const express = require("express");
const router = express.Router();
const DefiPulse = require("../api-calls/DefiPulse");
const Messari = require("../api-calls/Messari");
const DeFiLlama = require("../api-calls/DeFi-Llama");
const coinGecko = require("../api-calls/coin-gecko");

//Variety of endpoints to show users different sets of information, pulled from different api's

//Get Gas Data from DeFiPulse
router.get("/gasdata", async function (req, res, next) {
  try {
    const gas = await DefiPulse.getGasData();
    return res.json({ gas });
  } catch (err) {
    return next(err);
  }
});

//Get all projects from DeFiPulse
router.get("/allprojects", async function (req, res, next) {
  try {
    const projects = await DefiPulse.getProjects();
    return res.json({ projects });
  } catch (err) {
    return next(err);
  }
});

//Get the market data from DeFiPulse
router.get("/marketdata", async function (req, res, next) {
  try {
    const marketData = await DefiPulse.getMarketData();
    return res.json({ marketData });
  } catch (err) {
    return next(err);
  }
});
//Get a list of lending tokens - DefiPulse
router.get("/lendingTokens", async function (req, res, next) {
  try {
    const lendingTokens = await DefiPulse.getLendingTokens();
    return res.json({ lendingTokens });
  } catch (err) {
    return next(err);
  }
});
//Get a list of assets from messari
router.get("/assets", async function (req, res, next) {
  try {
    const assets = await Messari.getAssets();
    return res.json({ assets });
  } catch (err) {
    return next(err);
  }
});
//Get a list of news articles - messari
router.get("/news", async function (req, res, next) {
  try {
    const news = await Messari.getNews();
    return res.json({ news });
  } catch (err) {
    return next(err);
  }
});
//Get ethereum metrics  - messari
router.get("/ethmetrics", async function (req, res, next) {
  try {
    const metrics = await Messari.getEthMetrics();
    return res.json({ metrics });
  } catch (err) {
    return next(err);
  }
});
//Get solana metrics  - messari
router.get("/solanametrics", async function (req, res, next) {
  try {
    const metrics = await Messari.getSolMetrics();
    return res.json({ metrics });
  } catch (err) {
    return next(err);
  }
});
//Get polygon metrics  - messari
router.get("/polygonmetrics", async function (req, res, next) {
  try {
    const metrics = await Messari.getPolygonMetrics();
    return res.json({ metrics });
  } catch (err) {
    return next(err);
  }
});
//Get bsc metrics  - messari
router.get("/binancemetrics", async function (req, res, next) {
  try {
    const metrics = await Messari.getBinanceCoinMetrics();
    return res.json({ metrics });
  } catch (err) {
    return next(err);
  }
});
//Get data on all protocols - DeFi Llama
router.get("/protocols", async function (req, res, next) {
  try {
    const protocols = await DeFiLlama.getProtocols();
    return res.json({ protocols });
  } catch (err) {
    return next(err);
  }
});
//Get data on all global DeFi Data - CoinGecko
router.get("/globalDefiData", async function (req, res, next) {
  try {
    const data = await coinGecko.getGlobalDefiData();
    return res.json({ data });
  } catch (err) {
    return next(err);
  }
});
//Get data on charts - DeFi Llama
router.get("/charts", async function (req, res, next) {
  try {
    const charts = await DeFiLlama.getCharts();
    return res.json({ charts });
  } catch (err) {
    return next(err);
  }
});
//Get data on Eth chart - DeFi Llama
router.get("/ethchart", async function (req, res, next) {
  try {
    const charts = await DeFiLlama.ethChart();
    return res.json({ charts });
  } catch (err) {
    return next(err);
  }
});
//Get data on binance chart - DeFi Llama
router.get("/binancechart", async function (req, res, next) {
  try {
    const charts = await DeFiLlama.binanceChart();
    return res.json({ charts });
  } catch (err) {
    return next(err);
  }
});
//Get data on solana chart - DeFi Llama
router.get("/solanachart", async function (req, res, next) {
  try {
    const charts = await DeFiLlama.solanaChart();
    return res.json({ charts });
  } catch (err) {
    return next(err);
  }
});
//Get data on polygon chart - DeFi Llama
router.get("/polygonchart", async function (req, res, next) {
  try {
    const charts = await DeFiLlama.polygonChart();
    return res.json({ charts });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;
