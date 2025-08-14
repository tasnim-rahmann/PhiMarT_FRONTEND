import OrderCard from "../components/Orders/OrderCard";

const Orders = () => {
    const orders = [
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            user: 0,
            status: "Not Paid",
            total_price: 0,
            created_at: "2025-08-14T10:13:44.546Z",
            items: [
                {
                    id: 0,
                    product: {
                        id: 0,
                        name: "string",
                        price: 0
                    },
                    price: 0,
                    quantity: 2147483647,
                    total_price: 0
                },
                {
                    id: 0,
                    product: {
                        id: 0,
                        name: "string",
                        price: 0
                    },
                    price: 0,
                    quantity: 2147483647,
                    total_price: 0
                }
            ]
        },
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            user: 0,
            status: "Not Paid",
            total_price: 0,
            created_at: "2025-08-14T10:13:44.546Z",
            items: [
                {
                    id: 0,
                    product: {
                        id: 0,
                        name: "string",
                        price: 0
                    },
                    price: 0,
                    quantity: 2147483647,
                    total_price: 0
                }
            ]
        },
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            user: 0,
            status: "Not Paid",
            total_price: 0,
            created_at: "2025-08-14T10:13:44.546Z",
            items: [
                {
                    id: 0,
                    product: {
                        id: 0,
                        name: "string",
                        price: 0
                    },
                    price: 0,
                    quantity: 2147483647,
                    total_price: 0
                }
            ]
        }
    ];
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Order Details</h1>
            {orders.map((order, idx) => (
                <OrderCard key={idx} order={order} />
            ))}
        </div>
    );
};

export default Orders;