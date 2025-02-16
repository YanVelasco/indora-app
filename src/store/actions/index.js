import api from "../../api/api";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: "FETCH_PRODUCTS_REQUEST" });
  try {
    const { data } = await api.get("/public/products");
    dispatch({ 
        type: "FETCH_PRODUCTS_SUCCESS", 
        payload: data.response,
        pageNumber: data.pageNumber,
        pageSize: data.pageSize,
        totalElements: data.totalElements,
        totalPages: data.totalPages,
        lastPage: data.lastPage,
     });
  } catch (error) {
    console.log('Error:', error);
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", error: error.message });
  }
};