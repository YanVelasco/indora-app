const initialState = {
    products: [],
    categories: [],
    pagination: {},
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
            };
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                products: action.payload,
                pagination: {
                    ...state.pagination,
                    pageNumber: action.pageNumber,
                    pageSize: action.pageSize,
                    totalElements: action.totalElements,
                    totalPages: action.totalPages,
                    lastPage: action.lastPage
                },
            };
        case "FETCH_CATEGORIES_SUCCESS":
            return {
                ...state,
                categories: action.payload,
            };
        default:
            return state;
    }
};