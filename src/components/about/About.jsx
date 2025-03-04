import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { fetchProducts } from '../../store/actions/index';
import { Loader } from '../../components/shared/Loader';
import { FaExclamationTriangle } from 'react-icons/fa';
import ProductCart from "../shared/ProductCart";

export const About = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-slate-800 text-4xl text-center font-bold mb-12">
                About us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-[470px] text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Our Story
                    </h2>
                    <p className="text-slate-600 mb-4">
                        Welcome to E-SHOP, your number one source for all things [product, ie: electronics, fashion, etc.]. We&apos;re dedicated to giving you the very best of [product], with a focus on dependability, customer service, and uniqueness.
                    </p>
                    <p className="text-slate-600 mb-4">
                        Founded in [year] by [founder name], E-SHOP has come a long way from its beginnings in a [starting location, ie: home office, garage, etc.]. When [founder name] first started out, [his/her/their] passion for [passion, ie: helping other parents be more eco-friendly, providing the best equipment for his fellow musicians] drove them to [action, ie: do intense research, quit their day job], and gave them the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over [place, ie: the US, the world], and are thrilled to be a part of the [adjective, ie: quirky, eco-friendly, fair trade] wing of the [industry type, ie: fashion, electronics, etc.] industry.
                    </p>
                    <p className="text-slate-600 mb-4">
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don&apos;t hesitate to contact us.
                    </p>
                </div>
                <div>
                    <img src="https://embarkx.com/sample/placeholder.png" alt="About us" className="w-full  rounded-lg shadow-lg transform transition-all hover:scale-105 duration-300" />
                </div>
            </div>

            <div>
                <h1 className="text-slate-800 text-4xl text-center font-bold mb-12">
                    Our products
                </h1>
                {isLoading && (
                    <Loader text={"Fetching products..."} />
                )}
                {!isLoading && errorMessage && (
                    <div className="flex items-center justify-center h-screen">
                        <FaExclamationTriangle className="text-slate-800 text-4xl mr-2" />
                        <span className='text-slate-800 text-lg font-medium'>{errorMessage}</span>
                    </div>
                )}
                {!isLoading && !errorMessage && (
                    <div className="min-h-[700px]">
                        <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                            {products.map((product) =>
                                <ProductCart key={product.id} product={product} />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};