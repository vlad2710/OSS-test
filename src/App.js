import "./App.css";
import Catalog from "./components/Catalog/Catalog";
import React, { Component } from "react";
import { connect } from "react-redux";
import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import { ADMIN, USER } from "./constants/usersRole";
import {
  addProduct,
  deleteProduct,
  deleteProducts,
  initProducts,
} from "./store/actions/actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: ADMIN,
    };
  }

  componentDidMount() {
    this.props.initProducts();
  }

  render() {
    const { products } = this.props;
    const { role } = this.state;
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Catalog
                products={products}
                deleteProduct={this.props.deleteProduct}
                role={role}
              />
            </Route>
            <Route path="/add-product">
              <AddProduct
                products={products}
                addProduct={this.props.addProduct}
                role={role}
              />
            </Route>
          </Switch>
        </main>
        <Details
          products={products}
          clearProducts={this.props.deleteProducts}
          role={role}
        />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.reducer.products,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initProducts: () => dispatch(initProducts()),
    addProduct: (product) => dispatch(addProduct(product)),
    deleteProduct: (id) => dispatch(deleteProduct(id)),
    deleteProducts: () => dispatch(deleteProducts()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
