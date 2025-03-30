import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header: React.FC<{ wallet: number }> = ({ wallet }) => {
  return (
    <AppBar position="static" color="primary" sx={{ width: "100%"  }}>
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ flexGrow: 10, textAlign: "left" }}>
          <ShoppingCartIcon color= "action" sx={{ fontSize: 25, marginRight: "4px"  }} />
        </Typography>
        <Typography fontSize = { 20 }> 
            סכום כולל: { wallet.toFixed(2)}₪
        </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default Header;