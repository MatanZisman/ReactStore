import { Box, LinearProgress } from "@mui/material";
import productsData from "../../data/products.json"
import AnimalCard from "./Card";
import React, {useState, useEffect} from "react";
import { Product } from "../../types/Product";

const Home: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    const [loading, setLoading] = useState(true)

    const [progress, setProgress] = useState(0)

    useEffect(() => {
      setProducts(productsData);
      const grow = (100 / productsData.length) * 2;
      console.log(grow + " debug 0")
      productsData.forEach((_, index) => {
        setTimeout(() => {
          setProgress((progress) => {
            const next = (progress + grow)
            console.log(progress + " debug 1");
            if (progress >= 100){
              setLoading(false);
            }
            return next;
          })
        }, index * 200)
      })
    }, []);

  return (
    <>
      { loading ?
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60%" }}>
          <LinearProgress variant="determinate" value={progress} sx={{ bgcolor: "#d3d3d3", borderRadius: 1, height: 6 }} />
        </Box>
        :
        <Box>
          {products.map((product, index) => (
          <AnimalCard key={index} name={product.name} image={product.image} price={product.price} description={product.description} />))}
        </Box> 
      }
    </>
  )
}

export default Home;