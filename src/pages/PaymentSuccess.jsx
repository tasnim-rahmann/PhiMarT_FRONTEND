import { Link } from "react-router";

const PaymentSuccess = () => {
    return (
        <div>
            Payment success return to <Link className="border-b-1" to="/dashboard">Dashboard</Link>
        </div>
    );
};

export default PaymentSuccess;