import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

interface productCardProps {
    name: string;
    image: string;
    price: number;
}

const AnimalCard: React.FC<productCardProps> = ({name, image, price}) => {
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
          <Button variant="outlined" color="primary" sx={{fontSize: 12, marginLeft: "-8px", marginRight: "8px"}}>
            Details
          </Button>

          {/* Right button: Buy */}
          <Button variant="contained" color="primary" sx={{flexGrow: 1, fontSize: 12}}>
            Buy
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnimalCard;
