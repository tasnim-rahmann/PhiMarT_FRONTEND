import { useState } from "react";
import { FaCheck, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import useCartContext from "../../hooks/useCartContext";

export default function AddToCartDesign({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const { addCartItem } = useCartContext();


    const increaseQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const addToCart = async() => {
        setIsAdding(true);
        try{
            await addCartItem(product.id, quantity);
            setIsAdded(true);
            setIsAdding(false);
        } catch(error) {
            console.log(error);
            setIsAdding(false);
        }
        // Simulate API Call
        // setIsAdding(true);
        // setTimeout(() => {
        //     setIsAdding(false);
        //     setIsAdded(true);
        //     setTimeout(() => {
        //         setIsAdded(false);
        //     }, 2000)
        // }, 1000);
    };
    return (
        <div className="space-y-4 m-4">
            {/* Quantity Selector */}
            <div className="join">
                <button className="btn btn-outline join-item" onClick={decreaseQuantity} disabled={quantity <= 1}>
                    <FaMinus className="h-4 w-4" />
                </button>
                <input
                    type="number"
                    value={quantity}
                    min={1}
                    max={product.stock}
                    className="input input-bordered join-item w-16 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:outline-none"
                    readOnly
                />
                <button className="btn btn-outline join-item" onClick={increaseQuantity} disabled={quantity >= product.stock}>
                    <FaPlus className="h-4 w-4" />
                </button>
            </div>

            {/* Add to Cart Button */}
            <button className="btn btn-primary w-full" onClick={addToCart} disabled={isAdding || isAdded || product.stock === 0}>
                {isAdding ? (
                    <span className="flex items-center">
                        <span className="loading loading-spinner loading-sm mr-2"></span>
                        Adding..
                    </span>
                ) : isAdded ? (
                    <span className="flex items-center">
                        <FaCheck className="mr-2 h-4 w-4" />
                        Added to Cart
                    </span>
                ) : (
                    <span className="flex items-center">
                        <FaShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                    </span>
                )
                }
            </button>
        </div>
    );
}
