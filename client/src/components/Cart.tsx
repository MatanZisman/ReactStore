import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { CartItem } from "../types/CartItem";
import CartItems from "./CartItems";

const Cart: React.FC = () => {
  
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const renderEmptyMessage = () => {
    if (items.length === 0) {
      return <Typography>Your cart is empty.</Typography>;
    }
    return null;
  }

  const calculatePrice = () => (
    <Typography variant="h6">
      Total: ${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
    </Typography>
  )
  
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        🛒 Your Cart
      </Typography>

      {items.map((item, index) => (
        <CartItems key={index} item={item} />
      ))}

      {renderEmptyMessage()}

      {calculatePrice()}

    </Box>
  );
};

export default Cart;