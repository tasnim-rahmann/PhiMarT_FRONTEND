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
        <section className="py-8 md:py-12 px-2 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map(category => (
                <CategoryItems key={category.id} index={category.id} category={category}/>
            ))}
        </section>
    );
};

export default Category;