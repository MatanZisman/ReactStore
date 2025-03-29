import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC<{ wallet: number }> = ({ wallet }) => {
  return (
    <AppBar position="static" color="primary" sx={{ width: "100%"  }}>
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ flexGrow: 10, textAlign: "left" }}>
        ZooStore
        </Typography>
        <Typography> 
            Current amount:{ wallet }
        </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default Header;