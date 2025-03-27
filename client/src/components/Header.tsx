import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

let currentAmount : number = 0;

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" sx={{ width: "100%"  }}>
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ flexGrow: 10, textAlign: "left" }}>
        ZooStore
        </Typography>
        <Typography> 
            Current amount: {currentAmount}
        </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default Header;