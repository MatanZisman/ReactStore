import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useCartStore } from "../components/Store";
import CartItems from "../components/CartItems";
import OrderDialog from "../components/OrderDialog";

interface CartProps {
  wallet: number;
  setWallet: React.Dispatch<React.SetStateAction<number>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = (props: CartProps) => {
  const [dialogStatus, setDialogStatus] = useState<"open" | "close">("close");

  const items = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleOrder = () => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    if (props.wallet < total) {
      alert("אין מספיק כסף");
      return;
    }

    props.setLoading(true);
    items.forEach((item, index) => {
      setTimeout(() => {
        removeFromCart(item);
        props.setWallet((prev) => prev - item.price * item.quantity);
        if (index === items.length - 1) {
          props.setLoading(false);
          setDialogStatus("open");
        }
      }, index * 200); // 0ms, 200ms, 400ms, etc.
    });
  };

  return (
    <Box>
      {items.length === 0 && <Typography>העגלה ריקה</Typography>}

      {items.length > 0 && (
        <Button variant="contained" onClick={handleOrder}>
          הזמן{" "}
          {items
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
          ₪
        </Button>
      )}

      {dialogStatus === "open" && (
        <OrderDialog setDialogStatus={setDialogStatus} />
      )}

      {items.map((item, index) => (
        <CartItems key={index} item={item} />
      ))}
    </Box>
  );
};

export default Cart;
