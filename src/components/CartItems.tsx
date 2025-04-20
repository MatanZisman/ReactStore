import {Box, Typography} from "@mui/material";
import CartItemButtons from "@/components/CartItemButtons";
import {CartItem} from "@/types/CartItem";

const CartItemComponent = (props: { item: CartItem }) => {
  const cartItemBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F0F8FF",
    padding: "1rem",
    borderRadius: "0.12rem",
    marginBottom: "0.12rem",
  };

  const cartItemLeftStyles = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  };

  const imageStyles: React.CSSProperties = {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    borderRadius: "10%",
  };

  return (
    <Box sx={cartItemBoxStyles}>
      <Box sx={cartItemLeftStyles}>
        <img src={props.item.image} alt={props.item.name} style={imageStyles} />
        <Box>
          <Typography variant="h6">{props.item.name}</Typography>
          <Typography variant="body2">
            ${props.item.price.toFixed(2)}
          </Typography>
        </Box>
      </Box>

      <CartItemButtons item={props.item} />
    </Box>
  );
};

export default CartItemComponent;
