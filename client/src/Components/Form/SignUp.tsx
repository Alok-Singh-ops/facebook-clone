import {
  Box,
  Button,
  FormControl,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { addUser } from "../../api";
import { useSignUp } from "../../hooks/useAuth";
// import { useMutation } from "react-query";
// import { addUser } from "../../api";

interface SignUpProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SignUp: React.FC<SignUpProps> = ({ open, setOpen }) => {
  const [formData, setFormData] = useState<SignUpInfo>({
    email: "",
    firstName: "",
    lastName: " ",
    password: "",
  });

  const handleClose = (): void => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 28,
    borderRadius: 2,
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // const { mutateAsync } = useMutation({
  //   mutationFn: addUser,
  // });
  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await mutateAsync(formData);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const { mutate } = useSignUp();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style} direction="column">
        <Box>
          <Stack direction="column">
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                placeItems: "center",
                p: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                }}
              >
                Sign Up
                <Typography
                  component="p"
                  sx={{
                    color: "#5F6770",
                  }}
                >
                  It's quick and easy.
                </Typography>
              </Typography>
              {/* <Close /> */}
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            borderTop: "1px solid #5F6770",
          }}
        >
          <Stack direction="column">
            <FormControl
              onSubmit={(e) => handleSubmit(e)}
              component="form"
              sx={{
                padding: ".75rem",
                gap: ".75rem",
              }}
            >
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      onChange={handleChange}
                      sx={{
                        backgroundColor: "#F5F6F7",
                        width: "100%",
                      }}
                      name="firstName"
                      value={formData.firstName}
                      type="text"
                      id="firstName"
                      aria-label="firstName"
                      placeholder="First Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      onChange={handleChange}
                      sx={{
                        backgroundColor: "#F5F6F7",
                        width: "100%",
                      }}
                      name="lastName"
                      value={formData.lastName}
                      type="text"
                      id="lastName"
                      aria-label="lastname"
                      placeholder="Last Name"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      sx={{
                        backgroundColor: "#F5F6F7",
                        width: "100%",
                      }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      aria-label="email"
                      placeholder="Email Address"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      onChange={handleChange}
                      sx={{
                        backgroundColor: "#F5F6F7",
                        width: "100%",
                      }}
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      aria-label="password"
                      placeholder="New password"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  background: "#42B729",
                  width: "50%",
                  margin: "auto",
                  textTransform: "none",
                  "&:hover": {
                    background: "#3ba424",
                  },
                }}
              >
                Sign Up
              </Button>
            </FormControl>
          </Stack>
        </Box>
      </Stack>
    </Modal>
  );
};

export default SignUp;
