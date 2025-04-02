import { Box } from "@mui/material";
import productsData from "../data/products.json"
import AnimalCard from "./Card";
import React, {useState, useEffect} from "react";
import { Product } from "../types/Product";

const Home: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      setProducts(productsData);
    }, []);

  return (
    <>
      <Box>
        {products.map((product, index) => (
        <AnimalCard key={index} name={product.name} image={product.image} price={product.price} description={product.description}
        />))}
      </Box>
    </>
  )
}

export default Home;