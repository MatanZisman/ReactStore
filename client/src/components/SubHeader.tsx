import React from "react";
import { AppBar, Button, Box} from "@mui/material";
import { SubHeaderProps } from "../types/SubHeaderProps";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const SubHeader:  React.FC<SubHeaderProps> = ({ activeTab, setActiveTab }) =>  {

  return (
    <AppBar position="static" color="secondary" elevation = {0} sx={{ backgroundColor: "transparent}}>", width: "100%" }}>
        {/* Navigation Links */}
        <div style={{ textAlign: "right", position: "relative" }}>
        <Button variant="outlined" onClick={() => setActiveTab("cart")}  sx={{ border: "0px", display: "inline-block", "&:focus": { outline: "none"}  }}>
            <ShoppingCartIcon color = { activeTab === "home" ? "action" : "primary"} sx={{ fontSize: 25, margin: "10px" }} />
        </Button>
        <Button variant="outlined" onClick={() => setActiveTab("home")} sx={{ border: "0px", display: "inline-block", "&:focus": { outline: "none"} }}>
            <HomeIcon color = { activeTab === "home" ? "primary" : "action"} sx={{ fontSize: 25, margin: "10px" }} />
        </Button>
        <Box sx={{ position: "absolute", bottom: 0, height: "3px", width: "70px", 
                   backgroundColor: "primary.main", borderRadius: "2px", right: "75px",
                   transition: "transform 0.5s ease", transform: activeTab === "home" ? "translateX(100%)" : "translateX(0%)" }} />
      </div>
    </AppBar>
  );
};

export default SubHeader;