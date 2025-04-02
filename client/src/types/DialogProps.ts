export interface DialogProps {
    setDialogStatus: (tab: "open" | "close") => void;
    name : string;
    image : string;
    price : number;
    description: string;
  }