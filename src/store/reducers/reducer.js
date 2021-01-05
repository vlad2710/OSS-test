import {
  ADD_PRODUCT,
  DELETE_PRODUCTS,
  DELETE_PRODUCT,
  PRODUCTS_INIT,
} from "../actions/actionTypes";

const defaultState = {
  products: [],
};

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case PRODUCTS_INIT:
      return {
        ...state,
        products: action.payload,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id != action.payload),
      };
    case DELETE_PRODUCTS:
      return {
        ...state,
        products: [],
      };
  }

  return state;
}
