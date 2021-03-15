import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    margin: "30px 0",
  },
});

function UserPage() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Typography className={classes.title} variant="h3" component="h1">
          User page
        </Typography>
      </Container>
    </>
  );
}

export default UserPage;
