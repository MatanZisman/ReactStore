import {Box, LinearProgress} from "@mui/material";
import productsData from "@/data/products.json";
import AnimalCard from "@/components/Card";
import {useState, useEffect} from "react";
import {Product} from "@/types/Product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(productsData);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
          }}
        >
          <LinearProgress
            sx={{ bgcolor: "#d3d3d3", borderRadius: '1px', height: '6px' }}
          />
        </Box>
      ) : (
        <Box>
          {products.map((product, index) => (
            <AnimalCard
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default Home;
