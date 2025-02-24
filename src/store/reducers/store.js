import { configureStore } from "@reduxjs/toolkit";
import { ProductReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";

export const store = configureStore({
    reducer: {
        product: ProductReducer,
        errors: errorReducer
    },
    preloadedState: {},
});

export default store;