import './App.css'
import { Box } from "@mui/material";
import React, {useEffect, useState } from "react";
import Header from "./Header";
import SubHeader from './SubHeader';
import productsData from "./data/products.json"
import AnimalCard from './Card';

interface Product {
  name: string;
  image: string;
  price: number;
}

const App: React.FC = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from JSON
    setProducts(productsData);
    console.log(productsData);
  }, []);

  

  return (
    <>
      <Header/>
      <SubHeader/>
      <>
        <Box>
          {products.map((product, index) => (
            <AnimalCard key={index} name={product.name} image={product.image} price={product.price}
          />))}
        </Box>
      </>
    </>
  )
}

export default App
