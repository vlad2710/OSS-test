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

      dispatch(productsInit(data));
    } else {
      dispatch(productsInit(localProducts));
    }
  };
};

export const productsInit = (products) => {
  return {
    type: PRODUCTS_INIT,
    products,
  };
};

export const addProduct = (newProduct) => {
  return (dispatch, getState) => {
    const products = getState().reducer.products;

    const newProducts = [...products, newProduct];
    localStorage.setItem("products", JSON.stringify(newProducts));

    dispatch(productAdd(newProduct));
  };
};

export const productAdd = (product) => ({
  type: ADD_PRODUCT,
  product,
});

export const deleteProduct = (id) => {
  return (dispatch) => {
    const localProducts = JSON.parse(localStorage.getItem("products"));
    const newProducts = localProducts.filter((item) => item.id != id);

    localStorage.setItem("products", JSON.stringify(newProducts));

    dispatch(productDelete(id));
  };
};

export const productDelete = (id) => ({
  type: DELETE_PRODUCT,
  id,
});

export const deleteProducts = () => {
  return (dispatch) => {
    localStorage.setItem("products", "[]");
    dispatch(productsDelete());
  };
};

export const productsDelete = () => {
  return {
    type: DELETE_PRODUCTS,
  };
};
