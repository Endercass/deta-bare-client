const express = require("express");
const path = require("path");

const bareServerNode = require("@tomphttp/bare-server-node");

const app = express();
const port = 4000;
const bare = bareServerNode.createBareServer("/bare/");

app.use(async (req, res, next) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
    return;
  }
  next();
});

const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

const distDir = "/dist";
const distPath = path.join(__dirname, "..", "dist");
app.use(distDir, express.static(distPath));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
