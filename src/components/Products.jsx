import { FaExclamationTriangle } from 'react-icons/fa';
import ProductCard from './ProductCart';
import { useDispatch, useSelector } from 'react-redux';

import { Filter } from './Filter';
import { useProductFilter } from './userProductFilter';
import { useEffect } from 'react';
import { fetchCategories } from '../store/actions';

const Products = () => {
    const { products, categories } = useSelector((state) => state.product);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);
    const dispatch = useDispatch();

    useProductFilter();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch]);

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            <Filter categories={categories || []} />
            {isLoading && (
                <div className="flex items-center justify-center h-screen">
                    <p>Loading...</p>
                </div>
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
                            <ProductCard key={product.id} product={product} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;