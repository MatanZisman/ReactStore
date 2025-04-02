import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material";
import { DialogProps } from "../types/DialogProps";

const detailsDialog : React.FC<DialogProps> = ({ setDialogStatus, name, image, price, description }) => {
  return (
    <>
      <Dialog open = { true } maxWidth="xs" fullWidth>
        <DialogTitle sx={{ textAlign: "right" }}> { name } </DialogTitle>
        <DialogContent sx={{ textAlign: "right" }}>
            <DialogContentText>{description}</DialogContentText>
            <DialogContentText> מחיר: {price.toFixed(2)}₪ </DialogContentText>
            <img src={image} alt={name} style={{ maxWidth: "100%" }} />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-start" }}>
          <Button onClick={() => setDialogStatus("close")}>סגור</Button>
          <Button> הוסף לעגלה </Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default detailsDialog;