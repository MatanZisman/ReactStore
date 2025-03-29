import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from "@mui/material";
import { DialogProps } from "../types/DialogProps";

const detailsDialog : React.FC<DialogProps> = ({ setDialogStatus, description, name }) => {
  return (
    <>
      <Dialog open = { true }>
        <DialogTitle> About { name } </DialogTitle>
        <DialogContent>
            {description.map((line, index) => (
                <Typography key={index} variant="body2" gutterBottom>
                    {line}
                </Typography>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogStatus("close")}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
};

export default detailsDialog;