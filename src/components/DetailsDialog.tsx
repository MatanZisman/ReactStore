import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Fade } from "@mui/material";
import { useCartStore } from "./Store";

export interface DialogProps {
  setDialogStatus: (tab: "open" | "close") => void;
  name : string;
  image : string;
  price : number;
  description: string;
}

const detailsDialog = (props: DialogProps) => {

  const addToCart = useCartStore((state) => state.addToCart);

  const addToCartButton = () => {
    addToCart({ name: props.name, price: props.price, quantity: 1, image: props.image});
    props.setDialogStatus("close");
  }

  return (
      <Dialog open = { true } slots={{ transition: Fade}} transitionDuration={200} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "right" }}> { props.name } </DialogTitle>
        <DialogContent sx={{ textAlign: "right" }}>
            <DialogContentText>{props.description}</DialogContentText>
            <DialogContentText> מחיר: {props.price.toFixed(2)}₪ </DialogContentText>
            <img src={props.image} alt={props.name} style={{ maxWidth: "100%" }} />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <Button onClick={() => props.setDialogStatus("close")}>סגור</Button>
          <Button onClick={() => addToCartButton()}> הוסף לעגלה </Button>
        </DialogActions>
      </Dialog>
  )
};

export default detailsDialog;