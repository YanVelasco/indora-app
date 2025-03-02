import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { fetchProducts } from "../../store/actions";

export const useProductFilter = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);

        const currentPage = searchParams.get('page') 
            ?Number(searchParams.get('page')) : 1;

        params.set('pageNumber', currentPage - 1);

        const sortOrder = searchParams.get('sortBy') || 'asc';
        const categoryParams = searchParams.get('categoryName') || null;
        const keyword = searchParams.get('keyword') || null;
        params.set('sortBy', 'price');
        params.set('sortOrder', sortOrder);

        if (categoryParams) {
            params.set('categoryName', categoryParams);
        }

        if (keyword) {
            params.set('keyword', keyword);
        }

        const querySting = params.toString();

        console.log('query string:', querySting);
        
        dispatch(fetchProducts(params.toString()));

    }, [dispatch, searchParams]);
}