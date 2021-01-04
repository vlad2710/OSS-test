import React, { Component } from "react";
import { AppBar, Container, Toolbar, IconButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import logo from "./../../images/logo.svg";

const useStyles = (theme) => ({
  logo: {
    maxWidth: "120px",
  },
  appBar:{
    backgroundColor: "#fff"
  },
  menuButton: {
    color: "#000",
  },
  menuLink:{
    textDecoration: "none"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };

    this.handleClickMenu = (event) => {
      this.setState({
        anchorEl: event.currentTarget,
      });
    };

    this.handleCloseMenu = () => {
      this.setState({
        anchorEl: null,
      });
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky" className={classes.appBar}>
        <Container>
          <Toolbar style={{ padding: 0 }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleCloseMenu}
            >
              <MenuItem onClick={this.handleCloseMenu}>
                <Link className={classes.menuLink} to="/">Каталог товаров</Link>
              </MenuItem>
              <MenuItem onClick={this.handleCloseMenu}>
                <Link className={classes.menuLink} to="/add-product">Добавить товар</Link>
              </MenuItem>
            </Menu>
            <img src={logo} alt="logo" className={classes.logo} />
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default withStyles(useStyles)(Header);
