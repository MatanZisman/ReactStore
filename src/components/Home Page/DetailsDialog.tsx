import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Fade } from "@mui/material";
import { DialogProps } from "../../types/DialogProps";
import { useCartStore } from "../Zustand/Store";

const detailsDialog : React.FC<DialogProps> = ({ setDialogStatus, name, image, price, description }) => {

  const addToCart = useCartStore((state) => state.addToCart);

  const addToCartButton = () => {
    addToCart({ name: name, price: price, quantity: 1, image: image});
    setDialogStatus("close");
  }

  return (
      <Dialog open = { true } slots={{ transition: Fade}} transitionDuration={200} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "right" }}> { name } </DialogTitle>
        <DialogContent sx={{ textAlign: "right" }}>
            <DialogContentText>{description}</DialogContentText>
            <DialogContentText> מחיר: {price.toFixed(2)}₪ </DialogContentText>
            <img src={image} alt={name} style={{ maxWidth: "100%" }} />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <Button onClick={() => setDialogStatus("close")}>סגור</Button>
          <Button onClick={() => addToCartButton()}> הוסף לעגלה </Button>
        </DialogActions>
      </Dialog>
  )
};

export default detailsDialog;