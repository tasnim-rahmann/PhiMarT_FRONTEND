import ProductItem from "../products/ProductItem";

const ProductList = ({ products, isLoading }) => {
    if (isLoading)
        return (
            <div className="flex justify-center items-center py-10 min-h-screen">
                <span className="loading loading-spinner text-secondary loading-xl"></span>
            </div>
        );
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;