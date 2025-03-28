import { Box, Typography, Button } from "@mui/material";
import { CartItem } from "../types/CartItem";

const CartItemButtons: React.FC<{ item: CartItem, refreshCart: () => void}> = ({ item, refreshCart }) => {

  const cartItemRightStyles = {
    display: "flex",
    alignItems: "center",
    gap: 1,
  };
  
  const removeItem = async () => {
    try {
      const response = await fetch("http://localhost:5000/remove-from-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: item.name }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove item");
      }

      // ✅ Re-fetch updated cart
      refreshCart();
      const data = await response.json();
      console.log("Item removed:", data);

    } catch (error) {
      console.error("❌ Error removing item:", error);
    }
  };

  const decreaseItem = async () => {

    try {
        const response = await fetch("http://localhost:5000/decrease-from-cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: item.name }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to decrease item");
        }
  
        // ✅ Re-fetch updated cart
        refreshCart();
        const data = await response.json();
        console.log("Item decreased:", data);
  
      } catch (error) {
        console.error("❌ Error decreasing item:", error);
      }
    
  };

  const IncreaseItem = async () => {

    try {
        const response = await fetch("http://localhost:5000/increase-in-cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: item.name }),
        });
  
        if (!response.ok) {
          throw new Error("Failed to increase item");
        }
  
        // ✅ Re-fetch updated cart
        refreshCart();
        const data = await response.json();
        console.log("Item increased:", data);
  
      } catch (error) {
        console.error("❌ Error Increasing item:", error);
      }
    
  };

  return (
    <Box sx={cartItemRightStyles}>
        <Button variant="outlined" onClick= { decreaseItem }>−</Button>
        <Typography>{item.quantity}</Typography>
        <Button variant="outlined" onClick={ IncreaseItem }> + </Button>
        <Button variant="outlined" color="error" onClick={ removeItem }> X </Button>
    </Box>
  );
};

export default CartItemButtons;