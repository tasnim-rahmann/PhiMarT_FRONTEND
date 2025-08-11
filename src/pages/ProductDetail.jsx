import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";

const ProductDetail = () => {
    const product = {
        id: 1,
        name: "Smartphone",
        description: "High-quality smartphone for everyday use.",
        price: 299.99,
        stock: 150,
        category: 1,
        price_with_tax: 329.99,
        images: [
            {
                id: 1,
                image: "https://res.cloudinary.com/drxot8gia/image/upload/v1754916181/g6vdbbf3guxjbokeqlgj.png"
            },
            {
                id: 25,
                image: "https://res.cloudinary.com/drxot8gia/image/upload/v1754916493/ud4t2kuhgis8w6aija2t.png"
            }
        ],
    };
    return (
        <div className="w-3/4 mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <ProductImageGallery
                    images={product.images.map(img => img.image)}
                    ProductName={product.name}
                />
                <div className="mt-auto">
                    <AddToCartButton product={product} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;