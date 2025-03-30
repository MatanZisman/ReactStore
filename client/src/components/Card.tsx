import React, {useState} from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { productCardProps } from "../types/productCardProps";
import  DetailsDialog from "./DetailsDialog";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AnimalCard: React.FC<productCardProps> = ({name, image, price, description}) => {

  const [dialogStatus, setDialogStatus] = useState<"open" | "close">("close")

  const handleBuy = async () => {
    try {
      const response = await fetch("http://localhost:5000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, image, price }), // Send product details
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data = await response.json();
      console.log("Item added:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Card sx={{ width: "250px", margin: "10px", borderRadius: "8px", boxShadow: 3, display: "inline-flex", flexDirection: "column" }}>
      {/* Image of the animal */}
      <CardMedia
        component="img"
        alt= {name}
        height="150"
        image= {image}
        sx={{ objectFit: "fill" }}
      />
      
      <CardContent>
        {/* Name of the animal */}
        <Typography variant="h6" component="div" sx={{ textAlign: "center", marginBottom: "8px" }}>
          {name}
        </Typography>
        
        {/* Price of the animal */}
        <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", marginBottom: "16px" }}>
            {price}$
        </Typography>

        {/* Button section */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left button: Details */}
          <Button
            variant="contained" // Use "contained" to apply a background color
            sx={{
              backgroundColor: " #9c27b0 ", // Set background color
              color: "white", // Set text color
              fontSize: 12,
              marginLeft: "-8px",
              marginRight: "8px",
              "&:hover": { backgroundColor: "#6a1b9a" }, // Slightly darker purple on hover
            }}
            onClick={() => setDialogStatus("open")}
          >
            <InfoIcon sx={{ fontSize: 16, marginRight: "4px" }} />
             פרטים
          </Button>

          {/* Right button: Buy */}
          <Button variant="contained" color="primary" onClick={handleBuy} sx={{flexGrow: 0, fontSize: 12}}>
            <ShoppingCartIcon sx={{ fontSize: 16, marginRight: "4px", display: "flex", whiteSpace: "nowrap"}} />
            הוסף לעגלה 
          </Button>
        </Box>
      </CardContent>

      {dialogStatus === "open" ? <DetailsDialog name = { name } description = { description } setDialogStatus={ setDialogStatus }/> : null }

    </Card>
  );
};

export default AnimalCard;
