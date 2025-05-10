import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { CartItem } from "../types/CartItem";
import CartItems from "./CartItems";

const Cart: React.FC<{ wallet: number, setWallet: React.Dispatch<React.SetStateAction<number>> }> = ({ wallet, setWallet}) => {

  const [items, setItems] = useState<CartItem[]>([]);

  const refreshCart = async () => {
    fetch("http://localhost:5000/cart")
    .then((res) => res.json())
    .then((data) => setItems(data))
    .catch((err) => console.error("Error fetching cart:", err));
  }

  const handleOrder = async () => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
    if (wallet < total) {
      alert("❌ Not enough money!");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:5000/order", {
        method: "POST",
      });
  
      if (!res.ok) throw new Error("Order failed");
  
      setWallet(prev => prev - total); // 💸 Deduct!
      refreshCart();
      alert("✅ Order placed!");
    } catch (err) {
      console.error("❌", err);
      alert("Order failed.");
    }
  };
  
  useEffect(() => {
    refreshCart();
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
        <CartItems key={index} item={item} refreshCart={refreshCart} />
      ))}

      {renderEmptyMessage()}

      {calculatePrice()}


      { items.length > 0 && (
      <Button variant= "contained" onClick={handleOrder}>
        Order
      </Button> )}

    </Box>
  );
};

export default Cart;