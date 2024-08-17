import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  // axios Fetcher implementation
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/products?page=${currentPage}&search=${search}&size=${itemsPerPage}&filterCategory=${filterCategory}&filterBrand=${filterBrand}&sortPrice=${sortPrice}`
      );
      setProducts(data);
    };
    console.log(filterCategory, filterBrand, searchText, search);

    getProducts();
  }, [
    filterCategory,
    currentPage,
    search,
    itemsPerPage,
    searchText,
    filterBrand,
    sortPrice,
  ]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/productCount?search=${search}&filterCategory=${filterCategory}&filterBrand=${filterBrand}`
      );
      setCount(data.count);
    };
    console.log("Count", count);
    getCount();
  }, [search, filterCategory, filterBrand, count]);

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  // handle pagination button
  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
    console.log(products);
  };

  const handleReset = () => {
    setFilterCategory("");
    setFilterBrand("");
    setSearchText("");
    setSearch("");
    setSortPrice("");
  };

  return (
    <div className="container px-6 py-10 mx-auto  flex flex-col justify-between">
      {/* search , filterCategory , sort */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 my-8">
        {/* filterCategory by Category */}
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
            <option value="">filterCategory By Category</option>
            <option value="Art Supplies">Art Supplies</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Food and Beverages">Food and Beverages</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {/* filterCategory by Brand */}

        <div>
          <select
            onChange={(e) => {
              setFilterBrand(e.target.value);
              setCurrentPage(1);
            }}
            value={filterBrand}
            name="brand"
            id="brand"
            className="border p-4 rounded-lg"
          >
            <option value="">filterCategory By Brand</option>
            <option value="ArtMaster">ArtMaster</option>
            <option value="Coastal Retreats">Coastal Retreats</option>
            <option value="Gourmet Kitchen">Gourmet Kitchen</option>
            <option value="TechGuru">TechGuru</option>
          </select>
        </div>

        {/* Search Field */}
        <>
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                onChange={(event) => setSearchText(event.target.value)}
                value={searchText}
                placeholder="Enter Product Name"
              />
              <button>Search</button>
            </div>
          </form>
        </>

        {/* Price short */}
        <div>
          <select
            onChange={(e) => {
              setSortPrice(e.target.value);
              setCurrentPage(1);
            }}
            value={sortPrice}
            name="sortPrice"
            id="sortPrice"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By Price</option>
            <option value="dsc">High to Low</option>
            <option value="asc">Low to High</option>
          </select>
        </div>

        {/* reset button */}
        <div>
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      {/* Product Card */}
      <div className="grid md:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center mt-12">
        {/* pagination button */}
        {/* previous button */}
        <button
          className="btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {/* page number */}
        <div>
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePageChange(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPage === btnNum ? "bg-blue-500 text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
        </div>
        {/* next buttons */}
        <div>
          <button
            className="btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(count / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
