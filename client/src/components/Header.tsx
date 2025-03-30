import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Header: React.FC<{ wallet: number }> = ({ wallet }) => {
  return (
    <AppBar position="static" color="primary" sx={{ width: "100%"  }}>
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ flexGrow: 10, textAlign: "left" }}>
          <HomeIcon sx={{ fontSize: 38, marginRight: "4px" }} />
        </Typography>
        <Typography> 
            סכום כולל: { wallet.toFixed(2)}₪
        </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default Header;