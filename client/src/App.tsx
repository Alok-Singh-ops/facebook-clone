import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Store from "./Pages/Store";
// import About from "./Pages/About";
import "./sass/custom.css";
import Login from "./Pages/Login";
import NavbarComponent from "./Layout/Navbar";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import ProtectedRoutes from "./ProtectedRoutes";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
function App() {
  const theme = createTheme({
    // Modify theme creation
    palette: {
      primary: {
        main: "#0765FF",
      },
    },
  });

  const { isAuth } = useSelector((state: RootState) => state.authReducer);

  return (
    <ThemeProvider theme={theme}>
      <Stack height="100vh">
        <BrowserRouter>
          {isAuth && <NavbarComponent />}
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Routes>
              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
