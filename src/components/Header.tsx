import { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Badge, LinearProgress, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useCartStore} from "@/components/Store";

export interface HeaderProps 
{ 
    loading: boolean;
    wallet: number;
}

const Header= (props: HeaderProps) => {

  const getCartCount = useCartStore((state) => state.cart.length);

  const cart = useCartStore((state) => state.cart);

  const quantity = cart.reduce((total, item) => total + (item.quantity ?? 1), 0)

  const [progress, setProgress] = useState(0);

  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    if (props.loading) {
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
  }, [props.loading]);

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
            סכום כולל: { props.wallet.toFixed(2)}₪
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;