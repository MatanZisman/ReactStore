import { Box } from "@mui/material";
import productsData from "../data/products.json"
import AnimalCard from './Card';
import React, {useState, useEffect} from "react";

interface Product {
  name: string;
  image: string;
  price: number;
}

const Home: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      // Load products from JSON
      setProducts(productsData);
      console.log(productsData);
    }, []);

  return (
    <>
      <Box>
        {products.map((product, index) => (
        <AnimalCard key={index} name={product.name} image={product.image} price={product.price}
        />))}
      </Box>
    </>
  )
}

export default Home;