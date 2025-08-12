import { Link } from "react-router";
import defaultImg from "../../assets/default_product.jpg";

const ProductItem = ({ product }) => {
    return (
        <Link to={`/shop/${product.id}`}>
            <div className="card bg-base-100 md:w-96 shadow-sm h-[500px]">
                <figure className="px-10 pt-10">
                    <img
                        src={product.images.length > 1 ? product.images[1].image : defaultImg}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product.name}</h2>
                    <h3 className="text-xl font-bold text-red-400">${product.price}</h3>
                    <p>{product.description}</p>
                    <div className="card-actions mt-1">
                        <button className="btn btn-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductItem;