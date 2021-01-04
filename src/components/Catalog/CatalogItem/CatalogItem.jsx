import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { ADMIN } from "../../../constants/usersRole";

const useStyles = (theme) => ({
  card: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  cardInner: {
    width: "300px",
    height: "200px",
    margin: "0 auto",
  },
  CardContent: {
    flex: "1 0 auto",
  },
});

class CatalogItem extends Component {
  render() {
    const { classes, product, deleteProduct, role } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <Box className={classes.cardInner}>
            <CardMedia
              component="img"
              image={product.image}
              className={classes.cardMedia}
            />
          </Box>
          <CardContent className={classes.CardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography>{product.description}</Typography>
            <Typography variant="h6">Цена: {product.price} грн</Typography>
          </CardContent>
          {role == ADMIN && (
            <CardActions>
              <Button
                color="secondary"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </Button>
            </CardActions>
          )}
        </Card>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(CatalogItem);
