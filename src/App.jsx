import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { Box, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from "@mui/material";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DevicesPage from "./pages/Devices/DevicesPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import HomePage from "./pages/Home/HomePage";

const menuItems = [
  { text: "Home", path: "/home" },
  { text: "Dashboard", path: "/dashboard" },
  { text: "Devices", path: "/devices" },
  { text: "Settings", path: "/settings" },
];

function Layout() {
  const location = useLocation();
  const isHome = false;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>

      {/* Barra superior - se oculta en Home */}
      {!isHome && (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">ronaldo dashboard</Typography>
          </Toolbar>
        </AppBar>
      )}

      {/* Contenido principal */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>

        {/* Menú lateral - se oculta en Home */}
        {!isHome && (
          <Box sx={{ width: 200, bgcolor: "white", borderRight: "1px solid #ddd", pt: 2 }}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} component={NavLink} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {/* Página activa */}
        <Box sx={{ p: isHome ? 0 : 3, flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/devices" element={<DevicesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Box>

      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}