import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProduct = (
  currentPage,
  priceRange,
  selectedCategory,
  searchQuery,
  sortOrder
) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category_id=${selectedCategory}&search=${searchQuery}&ordering=${sortOrder}`;

      try {
        setIsLoading(true);
        const response = await apiClient.get(url);
        const data = response.data;

        setProducts(data.results);

        if (!pageSize && currentPage === 1 && data.results.length > 0) {
          setPageSize(data.results.length);
          setTotalPages(Math.ceil(data.count / data.results.length));
        }

        if (pageSize) {
          setTotalPages(Math.ceil(data.count / pageSize));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder,
    pageSize,
  ]);

  return { products, isLoading, totalPages };
};

export default useFetchProduct;
