import {
  Card,
  CardActions,
  CardContent,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import { ADMIN } from "../../constants/usersRole";

const useStyles = (theme) => ({
  root: {
    display: "inline-block",
    margin: "20px 0",
  },
  container: {
    textAlign: "center",
  },
  btn: {
    margin: "5px auto",
  },
});

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = this.props.products.length;
    let sum = this.props.products
      .reduce((sum, item) => sum + Number(item.price), 0)
      .toFixed(2);
    let averageSum = (sum / count || 0).toFixed(2);

    const { classes, clearProducts, role } = this.props;
    return (
      <Container className={classes.container}>
        <Card className={classes.root}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">
              Общее количество товаров: {count} шт.
            </Typography>
            <Typography variant="h6">
              Сумма цен всех товаров: {sum} грн.
            </Typography>
            <Typography variant="h6">
              Средняя цена: {averageSum} грн.
            </Typography>
          </CardContent>
          {role == ADMIN && (
            <CardActions className={classes.cardActions}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                startIcon={<DeleteIcon />}
                onClick={clearProducts}
              >
                Delete items
              </Button>
            </CardActions>
          )}
        </Card>
      </Container>
    );
  }
}

export default withStyles(useStyles)(Details);
