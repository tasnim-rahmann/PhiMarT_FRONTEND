import { useEffect, useState } from "react";
import apiClient from "../../services/api-client"
import CategoryItems from "./CategoryItem";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        apiClient.get("/categories")
            .then((res) => setCategories(res.data))
    }, [])
    return (
        <section className="py-12 px-4 max-w-[1400px] mx-auto">
            <div className="flex flex-col gap-2 md:flex-row justify-between items-center mb-6">
                <h1 className="text-2xl lg:text-4xl font-bold">Browse Categories</h1>
                <a href="#" className="btn btn-secondary px-6 py-5 rounded-full md:text-lg">View All</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map(category => (
                    <CategoryItems key={category.id} index={category.id} category={category} />
                ))}
            </div>
        </section>
    );
};

export default Category;