import { useEffect, useState } from "react";

const DiscountTimer = () => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25;
    const getTimeRemaining = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / (1000)) % 60),
        };
    };
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <div className="flex justify-center md:justify-start space-x-8 text-xl md:text-2xl font-semibold my-6">
                <div className="flex flex-col gap-2">
                    <span className="text-2xl md:text-3xl text-pink-500">{timeLeft.days}</span>
                    <span>Days</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-2xl md:text-3xl text-pink-500">{timeLeft.hours}</span>
                    <span>Hrs</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-2xl md:text-3xl text-pink-500">{timeLeft.minutes}</span>
                    <span>Min</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-2xl md:text-3xl text-pink-500">{timeLeft.seconds}</span>
                    <span>Sec</span>
                </div>
            </div>
        </div>
    );
};

export default DiscountTimer;