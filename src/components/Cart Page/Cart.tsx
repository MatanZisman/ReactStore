import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useCartStore } from "../Zustand/Store";
import CartItems from "./CartItems";
import OrderDialog from "./OrderDialog";
import { CartProps } from "../../types/CartProps";

const Cart: React.FC<CartProps> = ({ wallet, setWallet, setLoading}) => {

  const [dialogStatus, setDialogStatus] = useState<"open" | "close">("close");

  const items = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleOrder = () => {
    
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
    if (wallet < total) {
      alert("אין מספיק כסף");
      return;
    }

    setLoading(true);
    items.forEach((item, index) => {
      setTimeout(() => {
        removeFromCart(item);
        setWallet(prev => prev - ( item.price * item.quantity ));
        if (index === items.length - 1) {
          setLoading(false);
          setDialogStatus("open");
        }
      }, index * 200); // 0ms, 200ms, 400ms, etc.
    });

  };
  
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
        <CartItems key={index} item={item} />
      ))}
    </Box>
  );
};

export default Cart;