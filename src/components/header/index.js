import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Logo from "../../assets/LOGO1.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".5rem 0",
    borderBottom: "2px solid #fff",
    position: "relative",
    fontFamily: "Work Sans, sans-serif",
    fontWeight: "bolder",

    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0",
    },
  },
  menu: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    listStyle: "none",
    [theme.breakpoints.up("md")]: {
      paddingRight: "100px",
    },
    "& li a": {
      color: "white",
      display: "inline-block",
      textDecoration: "none",
      marginLeft: "30px",
      fontSize: "22px",
      textTransform: "uppercase",
      transition: "all 0.5s",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
      "&:hover": {
        color: "#7337ae",
      },
    },
  },
  menubar: {
    color: "white",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    marginLeft: "auto",
    display: "block",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "bolder",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& img": {
      width: "200px",
    },
  },
}));
const Index = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Container>
        <div className={classes.navbar}>
          <div>
            <img src={Logo} alt="" />
          </div>
          <button className={classes.menubar}>Back to Home</button>
        </div>
      </Container>
    </header>
  );
};

export default Index;
