import React, {useState} from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { productCardProps } from "../types/productCardProps";
import  DetailsDialog from "./DetailsDialog";

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
    <Card sx={{ maxWidth: 150, margin: "20px", borderRadius: "8px", boxShadow: 3, display: "inline-flex", flexDirection: "column" }}>
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
        <Typography variant="h6" component="div" sx={{ textAlign: "center", fontWeight: "bold" }}>
          {name}
        </Typography>
        
        {/* Price of the animal */}
        <Typography variant="body1" color="textSecondary" sx={{ textAlign: "center", marginBottom: "16px" }}>
            {price}$
        </Typography>

        {/* Button section */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left button: Details */}
          <Button variant="outlined" color="primary" onClick= {() => setDialogStatus("open")} sx={{fontSize: 12, marginLeft: "-8px", marginRight: "8px"}}>
            Details
          </Button>

          {/* Right button: Buy */}
          <Button variant="contained" color="primary" onClick={handleBuy} sx={{flexGrow: 1, fontSize: 12}}>
            Buy
          </Button>
        </Box>
      </CardContent>

      {dialogStatus === "open" ? <DetailsDialog name = { name } description = { description } setDialogStatus={ setDialogStatus }/> : null }

    </Card>
  );
};

export default AnimalCard;
