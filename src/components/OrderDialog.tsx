import {Button, Dialog, DialogTitle, DialogActions} from "@mui/material";

export interface OrderDialogProps {
  setDialogStatus: (status: boolean) => void;
}

const OrderDialog = (props: OrderDialogProps) => {
  return (
    <Dialog open>
      <DialogTitle sx={{ textAlign: "right" }}>!תתחדש/י</DialogTitle>
      <DialogActions sx={{ justifyContent: "flex-start" }}>
        <Button onClick={() => props.setDialogStatus(false)}>סגור</Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;
