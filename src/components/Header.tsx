import React, { useEffect } from "react";
import { AppBar, Toolbar, Typography, Badge, LinearProgress, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { HeaderProps } from "../types/HeaderProps.ts";
import { useCartStore } from "./Zustand/Store.tsx";

const Header: React.FC<HeaderProps> = ({ loading, wallet }) => {

  const getCartCount = useCartStore((state) => state.cart.length);

  const cart = useCartStore((state) => state.cart);

  const quantity = cart.reduce((total, item) => total + (item.quantity ?? 1), 0)

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
  
          if (i === cartCount - 1) {
            setTimeout(() => {
              setShowLoading(false);
              setProgress(0);
            }, 200); 
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
          <Badge badgeContent = { quantity } color = "warning">
            <ShoppingCartIcon color= "action" sx={{ fontSize: 25 }} />
          </Badge>
        </Typography>

        {showLoading && ( 
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 200, }}>
            <LinearProgress variant="determinate" value={progress} sx={{ bgcolor: "#d3d3d3", borderRadius: 1, height: 6 }} />
          </Box>
          )
        }
        
        <Typography fontSize = { 20 }> 
            סכום כולל: { wallet.toFixed(2)}₪
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;