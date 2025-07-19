import { useState } from "react";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import useFetchProduct from "../../hooks/useFetchProduct";
import FilterSection from "./FilterSection";
import useFetchCategories from "../../hooks/useFetchCategories";

const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const { products, isLoading, totalPages } = useFetchProduct(
        currentPage,
        priceRange,
        selectedCategory,
        searchQuery,
        sortOrder
    );

    const categories = useFetchCategories();

    const handlePriceChange = (index, value) => {
        setPriceRange((prev) => {
            const newRange = [...prev];
            newRange[index] = value;
            return newRange;
        });
        setCurrentPage(1);
    };

    return (
        <div className="max-w-[1400px] mx-auto px-2 py-8">
            <h1 className="text-3xl font-bold mb-8">Shop Our Products</h1>
            <FilterSection
                priceRange={priceRange}
                handlePriceChange={handlePriceChange}
                categories={categories}
                selectedCategory={selectedCategory}
                handleCategoryChange={(value) => {
                    setSelectedCategory(value);
                    setCurrentPage(1);
                }}
                searchQuery={searchQuery}
                handleSearchQuery={(value) => {
                    setSearchQuery(value);
                    setCurrentPage(1);
                }}
                sortOrder={sortOrder}
                handleSorting={(value) => {
                    setSortOrder(value);
                    setCurrentPage(1);
                }}
            />
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
