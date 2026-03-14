import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Box, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from "@mui/material";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DevicesPage from "./pages/Devices/DevicesPage";
import SettingsPage from "./pages/Settings/SettingsPage";
import HomePage from "./pages/Home/HomePage";

const menuItems = [
  { text: "Home", path: "/" },
  { text: "Dashboard", path: "/dashboard" },
  { text: "Devices", path: "/devices" },
  { text: "Settings", path: "/settings" },
];

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw", overflow: "hidden" }}>

        {/* Barra superior */}
        <AppBar position="static" sx={{ width: "100vw" }}>
          <Toolbar>
            <Typography variant="h6">ronaldo Dashboard</Typography>
          </Toolbar>
        </AppBar>

        {/* Contenido principal */}
        <Box sx={{ display: "flex", flexGrow: 1, width: "100vw", overflow: "hidden" }}>

          {/* Menú lateral */}
          <Box sx={{ width: 200, minWidth: 200, bgcolor: "white", borderRight: "1px solid #ddd", pt: 2 }}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} component={NavLink} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Página activa */}
          <Box sx={{ flexGrow: 1, overflow: "auto" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/devices" element={<DevicesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Box>

        </Box>
      </Box>
    </BrowserRouter>
  );
}