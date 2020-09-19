"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3001;
var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use((0, _cors2.default)({
  exposedHeaders: "*"
}));
var wwwPath = _path2.default.join(__dirname, "www");

app.use("/", _express2.default.static(wwwPath));

app.server.listen(process.env.PORT || PORT, function () {
  console.log("App is running on port " + app.server.address().port);
});

exports.default = app;
//# sourceMappingURL=index.js.map