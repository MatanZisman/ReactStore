import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useCartStore } from "./Store";
import CartItems from "./CartItems";
import OrderDialog from "./OrderDialog";

const Cart: React.FC<{ wallet: number, setWallet: React.Dispatch<React.SetStateAction<number>> }> = ({ wallet, setWallet}) => {

  const [dialogStatus, setDialogStatus] = useState<"open" | "close">("close");

  const items = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart)

  const handleOrder = async () => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
    if (wallet < total) {
      alert("אין מספיק כסף");
      return;
    }

    setWallet(prev => prev - total);
    setDialogStatus("open");
    clearCart();
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