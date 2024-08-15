import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //   basic Fetcher implementation
  //   useEffect(() => {
  //     fetch("http://localhost:5000/products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setProducts(data);
  //         setLoading(false);
  //       });
  //   }, []);

  // axios Fetcher implementation
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/products`);
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h2>{products.length}</h2>
    </div>
  );
};

export default Products;
