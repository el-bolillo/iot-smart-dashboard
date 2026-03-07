import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Box, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from "@mui/material";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import DevicesPage from "./pages/Devices/DevicesPage";
import SettingsPage from "./pages/Settings/SettingsPage";

const menuItems = [
  { text: "Dashboard", path: "/" },
  { text: "Devices", path: "/devices" },
  { text: "Settings", path: "/settings" },
];

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        
        {/* Barra superior */}
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Werner Sanchez Dashboard</Typography>
          </Toolbar>
        </AppBar>

        {/* Contenido principal */}
        <Box sx={{ display: "flex", flexGrow: 1 }}>
          
          {/* Menú lateral */}
          <Box sx={{ width: 200, bgcolor: "white", borderRight: "1px solid #ddd", pt: 2 }}>
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} component={NavLink} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Página activa */}
          <Box sx={{ p: 3, flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/devices" element={<DevicesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Box>

        </Box>
      </Box>
    </BrowserRouter>
  );
}