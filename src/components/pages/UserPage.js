import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import withUserListService from "../HOC/withUserListService";
import { userShown } from "../../actions/actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    margin: "30px 0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  wrap: {
    height: "80vh",
    maxWidth: "70%",
    width: "100%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: "#4b4b4b",
    margin: "0 0 10px",
    boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.6)",
    padding: "30px",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      height: "50vh",
      maxWidth: "90%",
      padding: "20px",
    },
  },

  content: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid lightgray",
    backgroundColor: "#fff",
    padding: "50px 30px",
    boxSizing: "border-box",
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    margin: "0 0 20px",
    display: "flex",
    flexWrap: "wrap",
    borderBottom: "1px solid lightgray",
    "@media (max-width: 900px)": {
      fontSize: "32px",
    },
    "@media (max-width: 600px)": {
      fontSize: "24px",
    },
  },
  accent: {
    margin: "0 20px 0 0",
    color: "gray",
    "@media (max-width: 900px)": {
      fontSize: "32px",
    },
    "@media (max-width: 600px)": {
      fontSize: "24px",
    },
  },
  iconButton: {
    position: "absolute",
    bottom: 50,
    right: 50,
    "@media (max-width: 600px)": {
      bottom: 20,
      right: 20,
    },
    "@media (max-width: 400px)": {
      bottom: 10,
      right: 10,
    },
  },
});

function UserPage({ user }) {
  const classes = useStyles();
  console.log(user);
  return (
    <>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h3" component="h1">
          User page
        </Typography>
        <Box className={classes.wrap}>
          <Box className={classes.content}>
            <Box className={classes.textBox}>
              <Typography className={classes.text} variant="h2" component="p">
                <Typography
                  className={classes.accent}
                  variant="h2"
                  component="span"
                >
                  Fullname:
                </Typography>
                {user.name}
              </Typography>

              <Typography className={classes.text} variant="h2" component="p">
                <Typography
                  className={classes.accent}
                  variant="h2"
                  component="span"
                >
                  Email:
                </Typography>
                {user.email}
              </Typography>

              <Typography className={classes.text} variant="h2" component="p">
                <Typography
                  className={classes.accent}
                  variant="h2"
                  component="span"
                >
                  Gender:
                </Typography>
                {user.gender}
              </Typography>
            </Box>
            <IconButton className={classes.iconButton} aria-label="edit">
              <EditIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}

const mapStateToProps = ({ user }) => {
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userShown: (userId) => {
      dispatch(userShown(userId));
    },
  };
};

export default withUserListService()(
  connect(mapStateToProps, mapDispatchToProps)(UserPage)
);
