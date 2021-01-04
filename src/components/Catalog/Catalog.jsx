import { Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import CatalogItem from "./CatalogItem/CatalogItem";

const styles = (theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
});

class Catalog extends Component {
  render() {
    const { products, classes, deleteProduct, role } = this.props;
    return (
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {products.map((item) => {
            return (
              <CatalogItem
                key={item.id}
                product={item}
                deleteProduct={deleteProduct}
                role={role}
              />
            );
          })}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(Catalog);
