const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req, res) => { 
    res.send("Hello from the backend!");
});

app.get("/cart", (req, res) => {
  fs.readFile("cart.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading cart.json:", err);
      return res.status(500).json({ message: "Failed to load cart." });
    }

    const cart = JSON.parse(data || "[]");
    res.status(200).json(cart);
  });
});


// API route
app.post("/add-to-cart", (req, res) => {
  const newItem = req.body;

  fs.readFile("cart.json", "utf8", (err, data) => {
    let cart = [];
    if (!err && data) {
      cart = JSON.parse(data);
    }

    cart.push(newItem);

    fs.writeFile("cart.json", JSON.stringify(cart, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Failed to add item." });
      }

      res.status(200).json({ message: "Item added to cart." });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
