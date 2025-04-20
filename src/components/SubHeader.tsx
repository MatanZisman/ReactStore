import {AppBar, Button} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LineDecoration from "@/components/LineDecoration";
import {Tab} from "@/types/Tab";

export interface SubHeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}


const SubHeader = (props: SubHeaderProps) => {

  const isHomeActive = props.activeTab === "home";
  const cartIconColor = isHomeActive ? "action" : "primary";
  const homeIconColor = isHomeActive ? "primary" : "action";

  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      sx={{ backgroundColor: "transparent}}>", width: "100%" }}
    >
      <div style={{ textAlign: "right", position: "relative" }}>
        <Button
          variant="outlined"
          onClick={() => props.setActiveTab("cart")}
          sx={{
            border: "0px",
            display: "inline-block",
            "&:focus": { outline: "none" },
          }}
        >
          <ShoppingCartIcon
            color={cartIconColor}
            sx={{ fontSize: 25, margin: "10px" }}
          />
        </Button>
        <Button
          variant="outlined"
          onClick={() => props.setActiveTab("home")}
          sx={{
            border: "0px",
            display: "inline-block",
            "&:focus": { outline: "none" },
          }}
        >
          <HomeIcon
            color={homeIconColor}
            sx={{ fontSize: "25px", margin: "10px" }}
          />
        </Button>
        <LineDecoration activeTab={props.activeTab} />
      </div>
    </AppBar>
  );
};

export default SubHeader;
