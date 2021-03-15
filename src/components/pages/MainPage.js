import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import UserList from "../UserList/UserList";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    margin: "30px 0",
  },
});

function MainPage() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Typography className={classes.title} variant="h3" component="h1">
          Main page
        </Typography>
        <UserList users={[{
      "id": 1,
      "name": "Amabelle Barnbrook",
      "email": "abarnbrook0@dedecms.com",
      "gender": "Male",
      "avatar": "https://robohash.org/sequiquidemsint.jpg?size=100x100&set=set1",
      "job": "Associate Professor",
      "skills": "Copy Editing",
      "company": "Stanton-Jenkins",
      "department": "Marketing"
    }, {
      "id": 2,
      "name": "Patrica Firk",
      "email": "pfirk1@topsy.com",
      "gender": "Female",
      "avatar": "https://robohash.org/modimollitiadolor.jpg?size=100x100&set=set1",
      "job": "Software Test Engineer II",
      "skills": "User Interface Design",
      "company": "Hayes, Koss and Strosin",
      "department": "Support"
    }, {
      "id": 3,
      "name": "Isaac Slimmon",
      "email": "islimmon2@walmart.com",
      "gender": "Female",
      "avatar": "https://robohash.org/debitisnatusquaerat.jpg?size=100x100&set=set1",
      "job": "Data Coordiator",
      "skills": "Football",
      "company": "Stamm, Pfannerstill and Swift",
      "department": "Marketing"
    }]} />
        <IconButton color="default" aria-label="add user" >
        <PersonAddIcon fontSize="large" />
      </IconButton>
      </Container>
    </>
  );
}

export default MainPage;
