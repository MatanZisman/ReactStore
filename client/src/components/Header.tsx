import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, LinearProgress, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HeaderProps } from "../types/HeaderProps.ts";
import { useCartStore } from "./Store.tsx";

const Header: React.FC<HeaderProps> = ({ loading, wallet }) => {

  const getCartCount = useCartStore((state) => state.cart.length);

  const [progress, setProgress] = React.useState(0);

  const [showLoading, setShowLoading] = React.useState(false);

  useEffect(() => {
    if (loading) {
      const cartCount = getCartCount;
      const progressInterval = 100 / cartCount;
  
      setShowLoading(true);
  
      for (let i = 0; i < cartCount; i++) {
        setTimeout(() => {
          setProgress((prev) => {
            const newProgress = prev + progressInterval;
            return newProgress >= 100 ? 100 : newProgress;
          });
  
          // When done, reset everything
          if (i === cartCount - 1) {
            setTimeout(() => {
              setShowLoading(false);
              setProgress(0);
            }, 200); // wait a bit after the final step
          }
        }, i * 200);
      }
    }
  }, [loading]);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
          <ShoppingCartIcon color= "action" sx={{ fontSize: 25 }} />
        </Typography>

        { showLoading && (
          <Box sx={{ width: "50%", marginRight: "90px" }}>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 8, marginTop: 2, bgcolor: "#d3d3d3" }} />
          </Box>
        )}
        
        <Typography fontSize = { 20 }> 
            סכום כולל: { wallet.toFixed(2)}₪
        </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default Header;