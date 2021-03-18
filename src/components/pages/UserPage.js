import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import UserListModal from "../UserListModal/UserListModal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userUpdated } from "../../actions/actions";
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
    maxWidth: "fit-content",
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
    wordBreak: "break-all",
    borderBottom: "1px solid lightgray",
    "@media (max-width: 1080px)": {
      fontSize: "36px",
    },
    "@media (max-width: 900px)": {
      fontSize: "32px",
    },
    "@media (max-width: 620px)": {
      fontSize: "24px",
    },
    "@media (max-width: 488px)": {
      fontSize: "16px",
    },
  },
  accent: {
    margin: "0 20px 0 0",
    color: "gray",
    "@media (max-width: 1080px)": {
      fontSize: "36px",
    },
    "@media (max-width: 900px)": {
      fontSize: "32px",
    },
    "@media (max-width: 620px)": {
      margin: "0 10px 0 0",
      fontSize: "24px",
    },
    "@media (max-width: 488px)": {
      fontSize: "16px",
    },
  },
  iconButtons: {
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

function UserPage({ user, handleEditUser }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  console.log(user);

  const handleModal = () => {
    setOpen(true);
  };

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
            <div className={classes.iconButtons}>
            <Tooltip disableFocusListener disableTouchListener title="Edit user">
              <IconButton aria-label="edit" onClick={handleModal}>
                <EditIcon fontSize="large" />
              </IconButton>
              </Tooltip>
              <Tooltip disableFocusListener disableTouchListener title="Go main page">
              <IconButton aria-label="done" to="/" component={Link}>
                <AssignmentTurnedInIcon fontSize="large" />
              </IconButton>
              </Tooltip>
            </div>
          </Box>
        </Box>
        <UserListModal
          open={open}
          setOpen={setOpen}
          user={user}
          handler={handleEditUser}
        />
      </Container>
    </>
  );
}

const mapStateToProps = ({ user }) => {
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEditUser: (data) => {
      dispatch(userUpdated(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
