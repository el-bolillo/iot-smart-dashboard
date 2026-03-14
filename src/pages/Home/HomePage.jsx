import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3
      }}
    >

      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ mb: 2 }}
      >
        Monitor and Control Your Smart Home
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ maxWidth: 600, mb: 4 }}
      >
        Industrial-grade IoT monitoring platform for gas detection,
        temperature, humidity and smart device automation.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/dashboard")}
        >
          Open Dashboard
        </Button>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "black",
            "&:hover": { backgroundColor: "#333" }
          }}
          onClick={() => navigate("/devices")}
        >
          View Devices
        </Button>

      </Box>

    </Box>
  );
}