import { AppBar, Button} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LineDecoration from "./LineDecoration";

export interface SubHeaderProps {
  activeTab: "home" | "cart";
  setActiveTab: (tab: "home" | "cart") => void;
}

const SubHeader= (props: SubHeaderProps) =>  {

  return (
    <AppBar position="static" color="secondary" elevation = {0} sx={{ backgroundColor: "transparent}}>", width: "100%" }}>
        {/* Navigation Links */}
        <div style={{ textAlign: "right", position: "relative" }}>
        <Button variant="outlined" onClick={() => props.setActiveTab("cart")}  sx={{ border: "0px", display: "inline-block", "&:focus": { outline: "none"}  }}>
            <ShoppingCartIcon color = { props.activeTab === "home" ? "action" : "primary"} sx={{ fontSize: 25, margin: "10px" }} />
        </Button>
        <Button variant="outlined" onClick={() => props.setActiveTab("home")} sx={{ border: "0px", display: "inline-block", "&:focus": { outline: "none"} }}>
            <HomeIcon color = { props.activeTab === "home" ? "primary" : "action"} sx={{ fontSize: 25, margin: "10px" }} />
        </Button>
        <LineDecoration activeTab={props.activeTab} />
      </div>
    </AppBar>
  );
};

export default SubHeader;