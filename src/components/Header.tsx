import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Badge, LinearProgress, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useCartStore} from "@/components/Store";

export interface HeaderProps 
{ 
    loading: boolean;
}

const Header= (props: HeaderProps) => {

  const {getCartCount, inWallet, getCartQuantity} = useCartStore();

  const quantity = getCartQuantity();

  const [progress, setProgress] = useState(0);

  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    if (props.loading) {
      const cartCount = getCartCount();
      const progressInterval = 100 / cartCount;
  
      setShowLoading(true);
  
      for (let i = 0; i < cartCount; i++) {
        setTimeout(() => {
          setProgress((prev) => {
            const newProgress = prev + progressInterval;
            return newProgress >= 100 ? 100 : newProgress;
          });
  
          if (i === cartCount - 1) {
            setTimeout(() => {
              setShowLoading(false);
              setProgress(0);
            }, 200);
          }
        }, i * 200);
      }
    }
  }, [props.loading]);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
          <Badge badgeContent = { quantity } color = "warning">
            <ShoppingCartIcon color= "action" sx={{ fontSize: "25px" }} />
          </Badge>
        </Typography>

        
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "15rem",
             height: "2rem", bgcolor: "white", opacity: "70%", alignItems: "center", display: "flex", justifyContent: "center", 
             borderRadius: "3px", visibility: showLoading ? "visible" : "hidden"}}>
          <LinearProgress variant="determinate" value={progress} sx={{ borderRadius: "1px", width: "90%" }}/>
        </Box>
  
        
        <Typography fontSize = { "20px" }> 
            סכום כולל: { inWallet.toFixed(2)}₪
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;