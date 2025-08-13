import { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
  const {
    cart,
    loading,
    createOrGetCart,
    updateCartItemQuantity,
    deleteCartItem,
  } = useCartContext();
  const [localCart, setLocalCart] = useState(cart);

  useEffect(() => {
    if (!cart && !loading) {
      createOrGetCart();
    }
  }, [createOrGetCart, cart, loading]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  if (loading) return <p>Loading...</p>;
  if (!localCart) return <p>No cart found!</p>;

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart;
    setLocalCart((prevLocalCart) => {
      const updatedItem = prevLocalCart.items.map((item) =>
        item.id === itemId
          ? {
            ...item,
            quantity: newQuantity,
            total_price: item.product.price * newQuantity,
          }
          : item
      );
      return {
        ...prevLocalCart,
        items: updatedItem,
        total_price: updatedItem.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy);
    }
  };

  const handleRemoveItem = async (itemId) => {
    setLocalCart((prevLocalCart) => {
      const updatedItem = prevLocalCart.items.filter(
        (item) => itemId != item.id
      );

      return {
        ...prevLocalCart,
        items: updatedItem,
        total_price: updatedItem.reduce((sum, item) => sum + item.total_price, 0),
      };
    });
    try {
      await deleteCartItem(itemId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Suspense fallback={<p>Loading...</p>}>
          <div>
            <CartItemList
              items={localCart.items}
              handleUpdateQuantity={handleUpdateQuantity}
              handleRemoveItem={handleRemoveItem}
            />
          </div>
        </Suspense>
        <div>
          <CartSummary
            totalPrice={localCart.total_price}
            itemCount={localCart.items.length}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;