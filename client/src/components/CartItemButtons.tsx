import { Box, Typography, Button } from "@mui/material";
import { CartItem } from "../types/CartItem";

const CartItemButtons: React.FC<{ item: CartItem }> = ({ item }) => {

  const cartItemRightStyles = {
    display: "flex",
    alignItems: "center",
    gap: 1,
  };

  return (
    <Box sx={cartItemRightStyles}>
        <Button variant="outlined">−</Button>
        <Typography>{item.quantity}</Typography>
        <Button variant="outlined"> + </Button>
        <Button variant="outlined" color="error"> X </Button>
    </Box>
  );
};

export default CartItemButtons;