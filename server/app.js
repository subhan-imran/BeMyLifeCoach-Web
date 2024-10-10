const express = require("express");
const config = require("config");
const cors = require("cors");

const PORT = config.get("server.port");

const contactForm = require("./routes/contactForm");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("Api is Working");
});

app.use("/", contactForm);

app.listen(PORT, () => {
  console.log(`🚀 App is listening on ${PORT}`);
});
