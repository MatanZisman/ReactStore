import { AppBar, Toolbar, Typography, Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useCartStore} from "@/components/Store";

const Header= () => {

  const { inWallet, getCartQuantity} = useCartStore();

  const quantity = getCartQuantity();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
          <Badge badgeContent = { quantity } color = "warning">
            <ShoppingCartIcon color= "action" sx={{ fontSize: "25px" }} />
          </Badge>
        </Typography>
        
        <Typography fontSize = { "20px" }> 
            סכום כולל: { inWallet.toFixed(2)}₪
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;