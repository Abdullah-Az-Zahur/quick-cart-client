import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");

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
    console.log(filterBrand, filterCategory)
    getProducts();
  }, [filterCategory, filterBrand]);

  return (
    <div className="container px-6 py-10 mx-auto  flex flex-col justify-between">
      {/* search , filter , sort */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
        {/* filter by Category */}
        <div>
          <select
            onChange={(e) => {
              setFilterCategory(e.target.value);
              setCurrentPage(1);
            }}
            value={filterCategory}
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="ArtMaster">ArtMaster</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Food & Beverages">Food & Beverages</option>
            <option value="Electronics">Electronics</option>
            <option value="Fitness & Wellness">Fitness & Wellness</option>
            <option value="Transportation">Transportation</option>
            <option value="Home & Office">Home & Office</option>
          </select>
        </div>

        {/* filter by Brand */}

        <div>
          <select
            onChange={(e) => {
              setFilterBrand(e.target.value);
              setCurrentPage(1);
            }}
            value={filterBrand}
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Brand</option>
            <option value="ArtMaster">ArtMaster</option>
            <option value="Coastal Retreats">Coastal Retreats</option>
            <option value="Gourmet Kitchen">Gourmet Kitchen</option>
            <option value="TechTime">TechTime</option>
            <option value="EcoRide">EcoRide</option>
          </select>
        </div>
      </div>

      {/* Product Card */}
      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
