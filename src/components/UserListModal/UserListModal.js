import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "#fff",
    border: "2px solid lightgray",
    padding: "20px 30px 20px 20px",
    transform: `translate(-50%, -50%)`,
  },
  form: {
    margin: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    width: "90%",
    marginBottom: "10px",
  },

  select: {
    marginTop: "10px",
  },

  button: {
    marginTop: "20px",
    maxWidth: "200px",
  },
});

const Input = withStyles((theme) =>
  createStyles({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  })
)(InputBase);

const UserListModal = ({ open, setOpen, user, handler }) => {
  const classes = useStyles();

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [gender, setGender] = useState(user ? user.gender : "");

  const newUser = {
    id: user ? user.id : uuidv4(),
    name: name,
    email: email,
    gender: gender,
  };

  const handleClose = () => {
    setOpen(false);
    if (!user) {
      setName("");
      setEmail("");
      setGender("");
    }
  };

  //Обработчики инпутов
  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleLastNameInput = (e) => {
    setEmail(e.target.value);
  };
  const handleGenderSelect = (e) => {
    setGender(e.target.value);
  };

  const handleClick = () => {
    handler(newUser);
    handleClose();
    if (!user) {
      setName("");
      setEmail("");
      setGender("");
    }
  };

  const body = (
    <div className={classes.paper}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.input}
          autoFocus
          required
          value={name}
          onChange={(e) => handleInput(e)}
        />
        <TextField
          id="email"
          type="email"
          label="Email"
          className={classes.input}
          required
          value={email}
          onChange={(e) => handleLastNameInput(e)}
        />

        <NativeSelect
          className={classes.select}
          id="select"
          required
          value={gender}
          onChange={handleGenderSelect}
          input={<Input />}
        >
          <option value={""} disabled>
            Gender
          </option>
          <option value={"Female"}>Female</option>
          <option value={"Male"}>Male</option>
        </NativeSelect>

        <Button
          variant="outlined"
          size="small"
          className={classes.button}
          onClick={handleClick}
        >
        { user ? "Edit user": "Add user"}
        </Button>
      </form>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default UserListModal;
