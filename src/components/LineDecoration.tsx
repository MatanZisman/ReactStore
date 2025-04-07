import React from "react";
import { Box } from "@mui/material"

const LineDecoration: React.FC<{ activeTab: "home" | "cart" }> = ({activeTab}) => {

return (
<Box sx={{ position: "absolute", bottom: 0, height: "3px", width: "70px", 
        backgroundColor: "primary.main", borderRadius: "2px", right: "75px",
        transition: "transform 0.3s ease", transform: activeTab === "home" ? "translateX(100%)" : "translateX(0%)" }}
        />)}

export default LineDecoration;