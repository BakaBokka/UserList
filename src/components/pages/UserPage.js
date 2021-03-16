import React from "react";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    margin: "30px 0",
  },
  content: {},
});

function UserPage() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Typography className={classes.title} variant="h3" component="h1">
          User page
        </Typography>
        <Box className={classes.content}>
        <Typography className={classes.title} variant="h6" component="h3">
        {/* {user.name} */}
      </Typography>
      <Typography className={classes.text} variant="body1">
        {/* {user.email} */}
      </Typography>
      <Typography className={classes.text} variant="body1">
        {/* Gender: {user.gender} */}
      </Typography>
        </Box>
      </Container>
    </>
  );
}

export default UserPage;
