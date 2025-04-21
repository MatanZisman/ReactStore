import React, {useState} from "react";
import {Box, Typography, Button, Alert, Snackbar, LinearProgress} from "@mui/material";
import {useCartStore} from "@/components/Store";
import CartItems from "@/components/CartItems";
import OrderDialog from "@/components/OrderDialog";

interface CartProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = (props: CartProps) => {

  const {getCartCount} = useCartStore();

  type AlertType = "none" | "order" | "error";

  const [dialogStatus, setDialogStatus] = useState<boolean>(false);

  const [alertStatus, setAlertStatus] = useState<AlertType>("none");

  const [progress, setProgress] = useState(0);

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
    const cartCount = getCartCount();
    const progressInterval = 100 / cartCount;

    if (inWallet < total) {
      setAlertStatus("error");
      return;
    }

    setAlertStatus("order");
    props.setLoading(true);
    cart.forEach((item, index) => {
      setTimeout(() => {
        setWallet(item);
        removeFromCart(item);
        setProgress((prev) => {
          const newProgress = prev + progressInterval;
          return newProgress >= 100 ? 100 : newProgress;
        });

        if (index === cart.length - 1) {
          setTimeout(() => {
          setAlertStatus("none");
          props.setLoading(false);
          setDialogStatus(true);
        }, 400)}
      }, index * 400); 
    });
  };

  return (
    <>
    <Snackbar
      open={alertStatus === "error"}
      autoHideDuration={2000}
      onClose={() => setProgress(0)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
      <Alert severity="error" variant="filled" icon={false}>
        ההזמנה לא הושלמה
      </Alert>
    </Snackbar>

    <Snackbar
      open={alertStatus === "order"}
      onClose={() => setAlertStatus("none")}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
      <Alert icon={false} variant="filled" sx={{ bgcolor: "white", borderRadius: "5px", display: "flex"}}>
        <Box sx={{ width: "15rem"}}>
          <LinearProgress variant="determinate" value={progress}/>
        </Box>
      </Alert>
    </Snackbar>

    <Box>
      {cartIsEmpty() && <Typography>העגלה ריקה</Typography>}

      {!(cartIsEmpty()) && (
        <Button variant="contained" onClick={handleOrder}>
          הזמן{" "}{calculateTotal().toFixed(2)}₪
        </Button>
      )}

      {dialogStatus === true && (
        <OrderDialog setDialogStatus={setDialogStatus} />
      )}

      {cart.map((item, index) => (
        <CartItems key={index} item={item} />
      ))}
    </Box>
    </>
  );
};

export default Cart;
