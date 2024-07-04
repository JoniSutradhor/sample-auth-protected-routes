import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "../../store";
import ProductServices from "../../services/product/ProductServices";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    // const fetchProducts = async () => {

    //   try {
    //     const response = await axios.get(`http://localhost:3000/products`, {
    //       params: {
    //         search: search || undefined,
    //       },
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.error('Error fetching products', error);
    //   }
    // };

    if (token) {
      ProductServices.fetchProducts(token, search)
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => {
          console.error("Error fetching products", error);
        });
    }
  }, [token, search]);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
};

export default ProductList;
