import { Box, Typography, Button } from "@mui/material";
import { CartItem } from "../types/CartItem";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartStore } from "./Store";

const CartItemButtons = (props: { item: CartItem }) => {
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
      <Button onClick={() => decreaseQuantity(props.item)}>
        <RemoveIcon />
      </Button>
      <Typography>{props.item.quantity}</Typography>
      <Button onClick={() => increaseQuantity(props.item)}>
        <AddIcon />
      </Button>
      <Button color="error" onClick={() => removeFromCart(props.item)}>
        <DeleteIcon />
      </Button>
    </Box>
  );
};

export default CartItemButtons;
