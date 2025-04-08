import { Box, Typography, Button } from "@mui/material";
import { CartItem } from "../../types/CartItem";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartStore } from "../Zustand/Store";

const CartItemButtons: React.FC<{ item: CartItem }> = ({ item }) => {

  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const cartItemRightStyles = {
    display: "flex",
    alignItems: "center",
    gap: 1,
  };

  return (
    <Box sx={cartItemRightStyles}>
        <Button onClick= { () => decreaseQuantity(item) }><RemoveIcon/></Button>
        <Typography>{item.quantity}</Typography>
        <Button onClick={ () => increaseQuantity(item) }><AddIcon/></Button>
        <Button color="error" onClick={() => removeFromCart(item)}><DeleteIcon/></Button>
    </Box>
  );
};

export default CartItemButtons;