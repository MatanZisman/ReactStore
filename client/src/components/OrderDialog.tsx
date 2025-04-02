import React from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";

const OrderDialog: React.FC<{ setDialogStatus: (tab: "open" | "close") => void }> = ({ setDialogStatus }) => {
  return (
    <Dialog open={true}>
      <DialogTitle sx={{ textAlign: "right" }}>!תתחדש/י</DialogTitle>
      <DialogActions sx={{ justifyContent: "flex-start" }}>
        <Button onClick={() => setDialogStatus("close")}>סגור</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;
