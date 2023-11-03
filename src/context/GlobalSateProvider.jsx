import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const GLOBAL_CONTEXT = createContext();

const GlobalSateProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [minValue, setMinValue] = useState(250);
  const [maxValue, setMaxValue] = useState(1000);
  const [sortValue, setSortValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      let url = `https://product-hub-server.vercel.app/product?&min=${minValue}&max=${maxValue}&page=${page}`;
      let query = "";

      if (categories.length > 0) query += `&category=${categories.join(",")}`;
      if (sortValue) query += `&sort=${sortValue}`;
      if (query) url += query;

      const res = await axios.get(url);
      setProducts(res.data.data);
      setTotalPage(Math.ceil(res.data.totalProducts / 8));
    };

    getProducts();
  }, [categories, sortValue, page, minValue, maxValue]);

  console.log(page);

  const contextValue = {
    page,
    products,
    minValue,
    maxValue,
    totalPage,
    categories,
    showNavbar,
    setPage,
    setMinValue,
    setMaxValue,
    setSortValue,
    setShowNavbar,
    setCategories,
  };

  return (
    <GLOBAL_CONTEXT.Provider value={contextValue}>
      {children}
    </GLOBAL_CONTEXT.Provider>
  );
};

export default GlobalSateProvider;
