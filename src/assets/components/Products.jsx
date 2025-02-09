import { FaExclamationTriangle } from "react-icons/fa";
import ProductCart from "./ProductCart";

const Products = () => {
    const loading = false;
    const errorMessage = "Error fetching products";
    const products = [
        {
            id: "123e4567-e89b-12d3-a456-426614174000",
            name: "Iphone Xs max",
            image: "https://placehold.co/600x400",
            description: "Experience the latest in mobile technology with advanced cameras, powerful processing, and an all-day battery.",
            quantity: 0,
            price: 1450.0,
            discount: 10.0,
            specialPrice: 1305.0,
        },
        {
            id: "123e4567-e89b-12d3-a456-426614174001",
            name: "MacBook Air M2s",
            image: "https://placehold.co/600x400",
            description: "Ultra-thin laptop with Apple's M2 chip, providing fast performance in a lightweight, portable design.",
            quantity: 0,
            price: 2550.0,
            discount: 20.0,
            specialPrice: 2040.0,
        }
    ];
    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            {loading && (
                <div className="flex items-center justify-center h-screen">
                    <p>Loading...</p>
                </div>
            )}
            {!loading && errorMessage && (
                <div className="flex items-center align- justify-center h-screen">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
                    <span className="text-slate-800 text-lg font-medium">{errorMessage}</span>
                </div>
            )}
            {!loading && !errorMessage && (
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        {
                            products?.map((product, i) => <ProductCart key={i}  {...product} />   
                       )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;