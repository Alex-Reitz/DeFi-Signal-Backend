const express = require("express");
const router = express.Router();
const DefiPulse = require("../api-calls/DefiPulse");
const Messari = require("../api-calls/Messari");

//Get the market data from DeFiPulse API
router.get("/marketData", async function (req, res, next) {
  try {
    const marketData = await DefiPulse.getMarketData();
    console.log(marketData);
    return res.json({ marketData });
  } catch (err) {
    return next(err);
  }
});
//Get a list of lending tokens when the endpoint /data/lendingTokens is hit
router.get("/lendingTokens", async function (req, res, next) {
  try {
    const lendingTokens = await DefiPulse.getLendingTokens();
    console.log(lendingTokens);
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

module.exports = router;
