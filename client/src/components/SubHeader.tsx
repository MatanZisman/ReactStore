import React from "react";
import { AppBar, Button } from "@mui/material";
import { SubHeaderProps } from "../types/SubHeaderProps";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const SubHeader:  React.FC<SubHeaderProps> = ({ setActiveTab }) =>  {
  return (
    <AppBar position="static" color="secondary" elevation = {0} sx={{ backgroundColor: "transparent}}>", width: "100%" }}>
        {/* Navigation Links */}
        <div style={{ textAlign: "right" }}>
        <Button variant="outlined" onClick={() => setActiveTab("home")} sx={{ border: "0px", display: "inline-block" }}>
            <ShoppingCartIcon color = "action" sx={{ fontSize: 25, marginRight: "4px" }} />
        </Button>
        <Button variant="outlined" onClick={() => setActiveTab("cart")} sx={{ border: "0px", display: "inline-block" }}>
            <HomeIcon color = "action" sx={{ fontSize: 25, marginRight: "4px" }} />
        </Button>
      </div>
    </AppBar>
  );
};

export default SubHeader;