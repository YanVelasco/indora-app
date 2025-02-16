const initialState = {
    products: [],
    categories: null,
    pagination: {},
    loading: false,
    errorMessage: ''
};

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: true,
                errorMessage: ''
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
                loading: false
            };
        case "FETCH_PRODUCTS_FAILURE":
            return {
                ...state,
                loading: false,
                errorMessage: action.error
            };
        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};