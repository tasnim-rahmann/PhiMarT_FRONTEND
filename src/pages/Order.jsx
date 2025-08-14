import { useEffect, useState } from "react";
import OrderCard from "../components/Orders/OrderCard";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const handleCancelOrder = async (orderId) => {
        try {
            const response = await authApiClient.post(`/orders/${orderId}/cancel/`);
            if (response.status == 200) {
                setOrders(prevOrder => prevOrder.map(order => order.id == orderId ? { ...order, status: "Canceled" } : order));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        authApiClient.get("/orders/")
            .then((res) => setOrders(res.data));
    }, []);

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Order Details</h1>
            {orders.map((order, idx) => (
                <OrderCard key={idx} order={order} onCancel={handleCancelOrder} />
            ))}
        </div>
    );
};

export default Orders;