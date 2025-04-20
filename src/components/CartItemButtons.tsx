import { Box, Typography, Button } from "@mui/material";
import { CartItem } from "@/types/CartItem";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartStore } from "@/components/Store.tsx";

const CartItemButtons = (props: { item: CartItem }) => {
  const {removeFromCart} = useCartStore();
  const {increaseQuantity} = useCartStore();
  const {decreaseQuantity} = useCartStore();

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      }}>
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
