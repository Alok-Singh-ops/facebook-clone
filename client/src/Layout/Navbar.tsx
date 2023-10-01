import {
  FacebookOutlined,
  Search,
  OndemandVideo,
  Store,
  GridViewRounded,
  ForumRounded,
  NotificationsRounded,
  Home,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Grid,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Toolbar,
  styled,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
const NavbarComponent = () => {
  const [value, setValue] = useState(0);

  const StyledAppBar = styled(AppBar)(({ theme }) => {
    return {
      backgroundColor: theme.palette.grey[50],
      // placeItems: "center",
      justifyContent: "center",
    };
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" pt={1}>
          <Grid item xs={4} gap={2}>
            <Stack direction="row" spacing={2}>
              <FacebookOutlined
                sx={{
                  fontSize: 50,
                  color: "#0765FF",
                }}
              />
              <InputBase
                startAdornment={
                  <Search
                    sx={{
                      color: grey[500],
                      // pr: 1,
                    }}
                  />
                }
                placeholder="Search Facebook"
                sx={{
                  backgroundColor: grey[200],
                  borderRadius: 16,
                  width: "70%",
                  height: "100%",
                  padding: 1,
                  fontSize: 16,
                  // fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: grey[300],
                  },
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="icon tabs example"
            >
              <Tab
                icon={
                  <Home
                    sx={{
                      fontSize: 30,
                      color: value === 0 ? "#0765FF" : grey[500],
                    }}
                  />
                }
                aria-label="home"
              />
              <Tab
                icon={<OndemandVideo />}
                aria-label="onDemandVideo"
                sx={{
                  fontSize: 30,
                  color: value === 1 ? "#0765FF" : grey[500],
                }}
              />

              <Tab
                icon={<Store />}
                aria-label="store"
                sx={{
                  fontSize: 30,
                  color: value === 2 ? "#0765FF" : grey[500],
                }}
              />
            </Tabs>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Avatar>
                <GridViewRounded
                  sx={{
                    fontSize: 25,
                    color: grey[900],
                  }}
                />
              </Avatar>
              <Avatar>
                <ForumRounded
                  sx={{
                    fontSize: 25,
                    color: grey[900],
                  }}
                />
              </Avatar>
              <Avatar>
                <NotificationsRounded
                  sx={{
                    fontSize: 25,
                    color: grey[900],
                  }}
                />
              </Avatar>
              <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" />
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavbarComponent;
