import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";

export interface OrderDialogProps 
{ setDialogStatus: (tab: "open" | "close") => void }

const OrderDialog= (props: OrderDialogProps) => {
  return (
    <Dialog open={true}>
      <DialogTitle sx={{ textAlign: "right" }}>!תתחדש/י</DialogTitle>
      <DialogActions sx={{ justifyContent: "flex-start" }}>
        <Button onClick={() => props.setDialogStatus("close")}>סגור</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;
