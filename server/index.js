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

app.get("/cart", (req, res) => {
  fs.readFile("cart.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Failed to read cart." });
    }
    res.status(200).json(JSON.parse(data));
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

    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === newItem.name);

    if (existingItem) {
      // If found, increase the quantity
      existingItem.quantity += 1;
    } else {
      // If not found, add the item with quantity = 1
      newItem.quantity = 1;
      cart.push(newItem);
    }

    fs.writeFile("cart.json", JSON.stringify(cart, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Failed to add item." });
      }

      res.status(200).json({ message: "Item added to cart." });
    });
  });
});

app.post("/decrease-from-cart", (req, res) => {
  const { name } = req.body;
  
  fs.readFile("cart.json", "utf8", (err, data) => {
    let cart = [];
    if (!err && data) {
      cart = JSON.parse(data);
    }

    const existingItem = cart.find(item => item.name === name);

    if (existingItem.quantity === 1) {

      cart = cart.filter((item) => item.name !== name);

    } else {

      existingItem.quantity = existingItem.quantity - 1;
    }

    fs.writeFile("cart.json", JSON.stringify(cart, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Failed to add item." });
      }

      res.status(200).json({ message: "Item quantity in cart decreased." });
    });
  });
});

app.post("/increase-in-cart", (req, res) => {
  const { name } = req.body;
  
  fs.readFile("cart.json", "utf8", (err, data) => {
    let cart = [];
    if (!err && data) {
      cart = JSON.parse(data);
    }

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {

      existingItem.quantity = existingItem.quantity + 1;

    } else {

      return res.status(500).json({ message: "Item was not found."})
    }

    fs.writeFile("cart.json", JSON.stringify(cart, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ message: "Failed to increase item quantity." });
      }

      res.status(200).json({ message: "Item quantity in cart was increased." });
    });
  });
});

app.post("/remove-from-cart", (req, res) => {
  const { name } = req.body;

  fs.readFile("cart.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Read error" });

    let cart = JSON.parse(data);

    cart = cart.filter((item) => item.name !== name);

    fs.writeFile("cart.json", JSON.stringify(cart, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Write error"});

      res.status(200).json({ message: "Item removed" });
    } )
  })
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
