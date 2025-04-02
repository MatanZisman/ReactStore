import { Box, Typography } from "@mui/material";
import CartItemButtons from "./CartItemButtons";
import { CartItem } from "../types/CartItem";

const CartItemComponent: React.FC<{ item: CartItem, refreshCart: () => void }> = ({ item, refreshCart }) => {

  const cartItemBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0F8FF",
    padding: 2,
    borderRadius: 2,
    marginBottom: 2,
  };

  const cartItemLeftStyles = {
    display: "flex",
    alignItems: "center",
    gap: 2,
  };

  const imageStyles: React.CSSProperties = {
    width: 70,
    height: 70,
    objectFit: "contain",
    borderRadius: "10%",
  };

  return (
    <Box sx={cartItemBoxStyles}>
      <Box sx={cartItemLeftStyles}>
        <img src={item.image} alt={item.name} style={imageStyles} />
        <Box>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body2">${item.price.toFixed(2)}</Typography>
        </Box>
      </Box>

      < CartItemButtons item = { item } refreshCart = { refreshCart }/>

    </Box>
  );
};

export default CartItemComponent;
