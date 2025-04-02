import React, {useState} from "react";
import { Card, CardMedia, CardContent,CardActions, Typography, Button } from "@mui/material";
import { productCardProps } from "../types/productCardProps";
import  DetailsDialog from "./DetailsDialog";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartStore } from "./Store";

const AnimalCard: React.FC<productCardProps> = ({name, image, price, description}) => {

  const [dialogStatus, setDialogStatus] = useState<"open" | "close">("close")

  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <Card elevation={1} sx={{width: 300, height: 345, margin: "10px", borderRadius: 2, display: "inline-flex", flexDirection: "column", }} >
      <CardMedia
        component="img" alt={name} image={image} sx={{height: 140, width: "100%" }}
      />
    
      {/* Info Section */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ marginBottom: 1 }}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          sx={{ marginBottom: 2 }}
        >
          {price.toFixed(2)}₪
        </Typography>
      </CardContent>
    
      {/* Actions */}
      <CardActions sx={{ justifyContent: "space-between", paddingX: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#9c27b0",
            "&:hover": { backgroundColor: "#6a1b9a" },
          }}
          onClick={() => setDialogStatus("open")}
        >
          <InfoIcon sx={{ fontSize: 16, marginRight: "4px" }} />
          פרטים
        </Button>
    
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart({ name: name, price: price, quantity: 1, image: image})}
        >
          <ShoppingCartIcon sx={{ fontSize: 16, marginRight: "4px" }} />
          הוסף לעגלה
        </Button>
      </CardActions>
    
      {/* Details Modal */}
      {dialogStatus === "open" && (
        <DetailsDialog
          name={name} 
          image={image} 
          price={price}
          description={description}
          setDialogStatus={setDialogStatus}
        />
      )}
  </Card>
  );
};

export default AnimalCard;
