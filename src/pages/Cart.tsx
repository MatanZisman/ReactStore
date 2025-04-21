import React, {useState} from "react";
import {Box, Typography, Button} from "@mui/material";
import {useCartStore} from "@/components/Store";
import CartItems from "@/components/CartItems";
import OrderDialog from "@/components/OrderDialog";

interface CartProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = (props: CartProps) => {
  const [dialogStatus, setDialogStatus] = useState<boolean>(false);

  const {cart, setWallet, inWallet, cartIsEmpty, removeFromCart} = useCartStore();

  const calculateTotal = () => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return total;
  }

  const handleOrder = () => {
    const total = calculateTotal();

    if (inWallet < total) {
      alert("אין מספיק כסף");
      return;
    }

    props.setLoading(true);
    cart.forEach((item, index) => {
      setTimeout(() => {
        setWallet(item);
        removeFromCart(item);
        if (index === cart.length - 1) {
          props.setLoading(false);
          setDialogStatus(true);
        }
      }, index * 200); 
    });
  };

  return (
    <Box>
      {cartIsEmpty() && <Typography>העגלה ריקה</Typography>}

      {!(cartIsEmpty()) && (
        <Button variant="contained" onClick={handleOrder}>
          הזמן{" "}
          {calculateTotal().toFixed(2)}
          ₪
        </Button>
      )}

      {dialogStatus === true && (
        <OrderDialog setDialogStatus={setDialogStatus} />
      )}

      {cart.map((item, index) => (
        <CartItems key={index} item={item} />
      ))}
    </Box>
  );
};

export default Cart;
