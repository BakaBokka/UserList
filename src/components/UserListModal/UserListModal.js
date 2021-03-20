import React from "react";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CasinoIcon from "@material-ui/icons/Casino";
import { v4 as uuidv4 } from "uuid";
import { useFormik } from "formik";
import validationSchema from "../../validation/validaton";
import { makeStyles } from "@material-ui/core/styles";

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
    width: "50%",
    marginTop: "10px",
  },

  button: {
    marginTop: "20px",
    maxWidth: "200px",
  },
  avatarInput: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
});

const UserListModal = ({ open, setOpen, user, handler }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: user ? user.name : "",
      email: user ? user.email : "",
      gender: user ? user.gender : "",
      avatar: user ? user.avatar : "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handler(newUser);
      handleClose();
    },
  });

  const newUser = {
    id: user ? user.id : uuidv4(),
    name: formik.values.name,
    email: formik.values.email,
    gender: formik.values.gender,
    avatar: formik.values.avatar,
  };

  const handleClose = () => {
    setOpen(false);
    if (!user) {
      formik.resetForm();
    }
  };

  const handleRandomAvatar = () => {
    const randomString =
      Math.random().toString(36).substring(8) +
      Math.random().toString(36).substring(8);
    formik.setFieldValue(
      "avatar",
      `https://robohash.org/${randomString}.jpg?size=200x200&set=set1`,
      false
    );
  };

  const body = (
    <div className={classes.paper}>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          id="name"
          label="Name"
          name="name"
          className={classes.input}
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="email"
          type="email"
          label="Email"
          name="email"
          className={classes.input}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <div className={classes.avatarInput}>
          <TextField
            id="avatar"
            type="avatar"
            label="Avatar"
            name="avatar"
            className={classes.input}
            value={formik.values.avatar}
            onChange={formik.handleChange}
            error={formik.touched.avatar && Boolean(formik.errors.avatar)}
            helperText={formik.touched.avatar && formik.errors.avatar}
          />
          <Tooltip
            disableFocusListener
            disableTouchListener
            title="Random avatar"
          >
            <IconButton aria-label="random avatar" onClick={handleRandomAvatar}>
              <CasinoIcon fontSize="small" color="disabled" />
            </IconButton>
          </Tooltip>
        </div>

        <TextField
          className={classes.select}
          id="gender"
          label="Gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          select
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
          SelectProps={{
            native: true,
          }}
        >
          <option value={""} disabled></option>
          <option value={"Female"}>Female</option>
          <option value={"Male"}>Male</option>
        </TextField>

        <Button
          variant="outlined"
          size="small"
          className={classes.button}
          type="submit"
        >
          {user ? "Edit user" : "Add user"}
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
