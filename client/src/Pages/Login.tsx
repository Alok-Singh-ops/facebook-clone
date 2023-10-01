import { Grid, Stack, Typography } from "@mui/material";
import LoginForm from "../Components/Form/LoginForm";
import SignUp from "../Components/Form/SignUp";
import { useState } from "react";
interface LoginProps {
  type?: string;
}

const Login: React.FC<LoginProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Grid container direction="column" height="100%">
      <Grid
        item
        xs={10}
        sx={{
          backgroundColor: "#EFF2F5",
        }}
      >
        <Grid container height="100%">
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              pl: 10,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: (theme) => theme.palette.primary.main,
                fontWeight: "bold",
              }}
            >
              facebook
            </Typography>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" fontWeight={400} width="25rem">
                Facebook helps you connect and share with the people in your
                life.
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              pr: 10,
            }}
          >
            <Stack
              direction="column"
              spacing={2}
              sx={{
                backgroundColor: "white",
                p: 5,
                width: "70%",
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: 2,
              }}
            >
              <LoginForm setOpen={setOpen} />
              <SignUp open={open} setOpen={setOpen} />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        footer
      </Grid>
    </Grid>
  );
};

export default Login;
