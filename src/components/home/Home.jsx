import { useDispatch, useSelector } from "react-redux";
import { Banner } from "./Banner";
import ProductCart from '../shared/ProductCart';
import { useEffect } from "react";
import { fetchProducts } from '../../store/actions/index';
import { Loader } from '../shared/Loader';
import { FaExclamationTriangle } from 'react-icons/fa';

export const Home = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className="lgh:px-20 md:px-10 sm:px-5 px-2">
            <div className="py-6">
                <Banner />
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl font-bold text-slate-800 py-6 text-center">
                    <span>
                        Discover Our handpicked products of top-rated items
                        just for you!
                    </span>
                </h1>
            </div>
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
                <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                    {products?.slice(0, 8).map((product) =>
                        <ProductCart key={product.id} product={product} />
                    )}
                </div>
            )}
        </div>
    );
};