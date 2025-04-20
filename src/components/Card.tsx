import {useState} from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import {Product} from "../types/Product";
import DetailsDialog from "./DetailsDialog";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useCartStore} from "./Store";

const ItemCard = (props: Product) => {
  const [dialogStatus, setDialogStatus] = useState<boolean>(false);

  const { addToCart } = useCartStore();

  return (
    <Card
      elevation={1}
      sx={{
        width: "18.75rem",
        height: "21.5625rem",
        margin: "10px",
        borderRadius: "2px",
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={props.name}
        image={props.image}
        sx={{ height: "140px", width: "100%" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ marginBottom: "1rem" }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          sx={{ marginBottom: "2rem" }}
        >
          {props.price.toFixed(2)}₪
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", paddingX: "16px" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#9c27b0",
            "&:hover": { backgroundColor: "#6a1b9a" },
          }}
          onClick={() => setDialogStatus(true)}
        >
          <InfoIcon sx={{ fontSize: "16px", marginRight: "4px" }} />
          פרטים
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            addToCart({
              name: props.name,
              price: props.price,
              quantity: 1,
              image: props.image,
            })
          }
        >
          <ShoppingCartIcon sx={{ fontSize: "16px", marginRight: "4px" }} />
          הוסף לעגלה
        </Button>
      </CardActions>

      {dialogStatus === true && (
        <DetailsDialog
          name={props.name}
          image={props.image}
          price={props.price}
          description={props.description}
          setDialogStatus={setDialogStatus}
        />
      )}
    </Card>
  );
};

export default ItemCard;
