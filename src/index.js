import http from "http";
import express from "express";
import cors from "cors";
import path from "path";

const PORT = 3002;
const app = express();
app.server = http.createServer(app);

app.use(
  cors({
    exposedHeaders: "*",
  })
);
const wwwPath = path.join(__dirname, "www");

app.use("/", express.static(wwwPath));

app.server.listen(process.env.PORT || PORT, () => {
  console.log(`App is running on port ${app.server.address().port}`);
});

export default app;
