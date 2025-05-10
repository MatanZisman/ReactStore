export interface DialogProps {
    setDialogStatus: (tab: "open" | "close") => void;
    name : string;
    description: string[];
  }