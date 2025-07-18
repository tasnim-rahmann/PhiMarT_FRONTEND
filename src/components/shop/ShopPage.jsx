import { useEffect, useState } from "react";
import apiClient from "../../services/api-client"
import ProductList from "./ProductList";

const ShopPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        apiClient.get('/products')
            .then((res) => setProducts(res.data.results))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }, []);
    return (
        <div>
            <ProductList products={products} isLoading={isLoading} />
        </div>
    );
};

export default ShopPage;