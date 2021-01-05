import data from "./../../data/data.json";
import {
  ADD_PRODUCT,
  DELETE_PRODUCTS,
  DELETE_PRODUCT,
  PRODUCTS_INIT,
} from "./actionTypes";

export const initProducts = () => {
  return (dispatch) => {
    const localProducts = JSON.parse(localStorage.getItem("products"));
    if (localProducts == null) {
      localStorage.setItem("products", JSON.stringify(data));

      dispatch({
        type: PRODUCTS_INIT,
        payload: data,
      });
    } else {
      dispatch({
        type: PRODUCTS_INIT,
        payload: localProducts,
      });
    }
  };
};

export const addProduct = (newProduct) => {
  return (dispatch, getState) => {
    const products = getState().reducer.products;

    const newProducts = [...products, newProduct];
    localStorage.setItem("products", JSON.stringify(newProducts));

    dispatch({
      type: ADD_PRODUCT,
      payload: newProduct,
    });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    const localProducts = JSON.parse(localStorage.getItem("products"));
    const newProducts = localProducts.filter((item) => item.id != id);

    localStorage.setItem("products", JSON.stringify(newProducts));

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
  };
};

export const deleteProducts = () => {
  return (dispatch) => {
    localStorage.setItem("products", "[]");
    dispatch({
      type: DELETE_PRODUCTS,
    });
  };
};
