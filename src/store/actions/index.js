import api from "../../api/api";

export const fetchProducts = (queryString) => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
  try {
    dispatch({ type: "IS_FETCHING" });
    const { data } = await api.get(`/public/products?${queryString}`);
    dispatch({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: data.response,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({ type: "IS_SUCCESS" });
  } catch (error) {
    const errorMessage = error?.response?.data || "Failed to fetch products";
    dispatch({ type: "IS_ERROR", payload: errorMessage });
  }
};

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: "CATEGORY_IS_FETCHING" });
  try {
    const { data } = await api.get(`/public/categories`);
    dispatch({
      type: "FETCH_CATEGORIES_SUCCESS",
      payload: data.response,
      pageNumber: data.pageNumber,
      pageSize: data.pageSize,
      totalElements: data.totalElements,
      totalPages: data.totalPages,
      lastPage: data.lastPage,
    });
    dispatch({ type: "CATEGORY_IS_SUCCESS" });
  } catch (error) {
    const errorMessage = error?.response?.data || "Failed to fetch categories";
    dispatch({ type: "CATEGORY_IS_ERROR", payload: errorMessage });
  }
};
