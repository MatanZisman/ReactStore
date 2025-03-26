import React from "react";
import { AppBar, Button } from "@mui/material";



const SubHeader: React.FC = () => {
  return (
    <AppBar position="static" color="secondary" sx={{ backgroundColor: "transparent}}>" }}>
        {/* Navigation Links */}
        <div style={{ textAlign: "right" }}>
        <Button variant="outlined" sx={{ border: "0px", display: "inline-block" }}>
          <img 
            src="./src/img/Cart.png"
            alt="Cart"
            style={{ width: "35px", height: "40px" }}/>
        </Button>
        <Button variant="outlined" sx={{ border: "0px", display: "inline-block" }}>
        <img 
            src="./src/img//Home.png"
            alt="Home"
            style={{ width: "35px", height: "35px" }}/>
        </Button>
      </div>
    </AppBar>
  );
};

export default SubHeader;