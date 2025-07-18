import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import ProductList from "./ProductList";
import Pagination from "./Pagination";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(null);

    const fetchProducts = async () => {
        try {
            setIsLoading(true);
            const response = await apiClient.get(`/products/?page=${currentPage}`);
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

    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    return (
        <div>
            <ProductList products={products} isLoading={isLoading} />
            <Pagination
                totalPage={totalPages}
                currentPage={currentPage}
                handlePageChange={setCurrentPage}
            />
        </div>
    );
};

export default ShopPage;
