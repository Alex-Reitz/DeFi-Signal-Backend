const express = require("express");
const router = express.Router();
const DefiPulse = require("../api-calls/DefiPulse");
const Messari = require("../api-calls/Messari");
const DeFiLlama = require("../api-calls/DeFi-Llama");

//Variety of endpoints to show users different sets of information, pulled from different api's

//Get the market data from DeFiPulse API
router.get("/marketData", async function (req, res, next) {
  try {
    const marketData = await DefiPulse.getMarketData();
    return res.json({ marketData });
  } catch (err) {
    return next(err);
  }
});
//Get a list of lending tokens when the endpoint /data/lendingTokens is hit - DefiPulse
router.get("/lendingTokens", async function (req, res, next) {
  try {
    const lendingTokens = await DefiPulse.getLendingTokens();
    return res.json({ lendingTokens });
  } catch (err) {
    return next(err);
  }
});
//Get a list of assets from messari when /data/assets is hit
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
//Get data on all protocols - DeFi Llama
router.get("/protocols", async function (req, res, next) {
  try {
    const protocols = await DeFiLlama.getProtocols();
    return res.json({ protocols });
  } catch (err) {
    return next(err);
  }
});
module.exports = router;