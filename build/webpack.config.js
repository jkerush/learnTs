const merge = require("webpack-merge");
const basecfg = require("./webpack.base.config");
const devcfg = require("./webpack.dev.config");
const procfg = require("./webpack.pro.config");

let config = process.NODE_ENV === "development" ? devcfg : procfg;

module.exports = merge(basecfg,config)