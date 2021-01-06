import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { ADMIN } from "../../constants/usersRole";
import ErrorPage from "../ErrorPage/ErrorPage";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      width: "fill-available",
    },
    marginTop: theme.spacing(3),
    boxSizing: "border-box",
    padding: "20px",
    width: "500px",
    margin: "0 auto",
    border: "1px solid #000",
  },
  btn: {
    marginTop: theme.spacing(1),
  },
  textWarning: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      description: "",
      price: "",
    };

    this.handleChange = (event) => {
      let target = event.target;
      this.setState({
        [target.name]: target.value,
      });
    };

    this.handleSubmit = (e) => {
      const { products } = this.props;
      e.preventDefault();

      if (!this.validateForm()) {
        return false;
      }

      const id = products.length != 0 ? products[products.length - 1].id : 0;
      const newProduct = {
        id: id + 1,
        name: this.state.productName,
        description: this.state.description,
        price: this.state.price,
      };
      this.props.addProduct(newProduct);

      this.setState({
        productName: "",
        description: "",
        price: "",
      });
    };

    this.validateForm = () => {
      const { productName, description, price } = this.state;
      if (!productName || !description || !price) {
        alert("Please fill in all the fields");
        return false;
      }

      return true;
    };
  }

  render() {
    const { classes, role } = this.props;
    const { productName, description, price } = this.state;
    return (
      <>
        {role == ADMIN ? (
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <Typography variant="h5" align="center">
              Add product
            </Typography>
            <TextField
              label="Product name"
              variant="outlined"
              margin="normal"
              value={productName}
              onChange={this.handleChange}
              name="productName"
            />
            <TextField
              label="Description"
              value={description}
              multiline
              rows={5}
              variant="outlined"
              margin="normal"
              name="description"
              onChange={this.handleChange}
            />
            <TextField
              label="Price"
              variant="outlined"
              margin="normal"
              value={price}
              name="price"
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              className={classes.btn}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
        ) : (
          <ErrorPage />
        )}
      </>
    );
  }
}

export default withStyles(useStyles)(AddProduct);
