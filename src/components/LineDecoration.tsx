import {Box} from "@mui/material";
import {Tab} from "@/types/Tab";

const LineDecoration = (props: { activeTab: Tab }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        height: "3px",
        width: "70px",
        backgroundColor: "primary.main",
        borderRadius: "2px",
        right: "75px",
        transition: "transform 0.3s ease",
        transform:
          props.activeTab === "home" ? "translateX(100%)" : "translateX(0%)",
      }}
    />
  );
};

export default LineDecoration;
