import {
  Button,
  Divider,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { authUser } from "../../api";
// import { AxiosResponse } from "axios";

interface LoginFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setOpen }) => {
  // Define a validation function
  const [formData, setFormData] = useState<UserInfo>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleModalOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl
      onSubmit={(e) => handleSubmit(e)}
      component="form"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      <TextField
        name="email"
        onChange={handleChange}
        value={formData.email}
        aria-label="email"
        id="email"
        placeholder="Email address or Phone Number"
      />
      <TextField
        name="password"
        onChange={handleChange}
        value={formData.password}
        type="password"
        id="password"
        aria-label="password"
        placeholder="Password"
      />
      <Button variant="contained" type="submit">
        Log In
      </Button>
      <Typography
        variant="body2"
        sx={{
          color: (theme) => theme.palette.primary.main,
          fontWeight: "bold",
          margin: "auto",
        }}
      >
        Forgotten password?
      </Typography>
      <Divider
        sx={{
          border: "2px solid #DADDE1",
        }}
      />
      <Button
        onClick={handleModalOpen}
        variant="contained"
        disableElevation
        sx={{
          background: "#42B729",
          width: "80%",
          margin: "auto",
          textTransform: "none",
          "&:hover": {
            background: "#3ba424",
          },
        }}
      >
        Create New Account
      </Button>
    </FormControl>
  );
};

export default LoginForm;
