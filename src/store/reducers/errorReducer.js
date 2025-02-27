const initialState = {
  isLoading: false,
  errorMessage: null,
  categoryLoader: false,
  categoryErrorMessage: null,
  categoryError: null
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_FETCHING":
      return {
        ...state,
        isLoading: true,
      };
    case "IS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
      };
    case "IS_ERROR":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };

    case "CATEGORY_IS_FETCHING":
      return {
        ...state,
        categoryLoader: true,
      };
    case "CATEGORY_IS_SUCCESS":
      return {
        ...state,
        categoryLoader: false,
        categoryErrorMessage: null,
        categoryError: null
      };
    case "CATEGORY_IS_ERROR":
      return {
        ...state,
        categoryLoader: false,
        categoryErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
