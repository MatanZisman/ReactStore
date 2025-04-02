import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { CartItem } from "../types/CartItem";
import CartItems from "./CartItems";
import OrderDialog from "./OrderDialog";

const Cart: React.FC<{ wallet: number, setWallet: React.Dispatch<React.SetStateAction<number>> }> = ({ wallet, setWallet}) => {

  const [items, setItems] = useState<CartItem[]>([]);

  const [dialogStatus, setDialogStatus] = useState<"open" | "close">("close");

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
      setDialogStatus("open");
    } catch (err) {
      console.error("❌", err);
      alert("Order failed.");
    }
  };
  
  useEffect(() => {
    refreshCart();
  }, []);
  
  return (
    <Box>
      { items.length === 0 && (
         <Typography>העגלה ריקה</Typography>)
      }

      { items.length > 0 && (
      <Button variant= "contained" onClick={handleOrder}>
        הזמן {items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}₪
      </Button> )}

      {dialogStatus === "open" && <OrderDialog setDialogStatus={setDialogStatus} />} 

      {items.map((item, index) => (
        <CartItems key={index} item={item} refreshCart={refreshCart} />
      ))}
    </Box>
  );
};

export default Cart;