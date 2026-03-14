import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100%",
        backgroundImage: "url(https://nhome-files.s3.eu-central-1.amazonaws.com/offer-8536062/8536062_offer-8536062/8536062_6649836085000.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 6,
      }}
    >
      <Typography variant="overline" sx={{ color: "white", letterSpacing: 3 }}>
        SMART HOME IOT PLATFORM
      </Typography>
      <Typography variant="h3" fontWeight="bold" sx={{ color: "white", maxWidth: 500, mt: 1 }}>
        Monitor and Control Your Smart Home
      </Typography>
      <Typography sx={{ color: "white", maxWidth: 400, mt: 2 }}>
        Industrial-grade IoT monitoring platform for gas detection, temperature, humidity and smart device automation.
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/dashboard")}
        >
          ⚡ Open Dashboard
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{ color: "white", borderColor: "white" }}
          onClick={() => navigate("/devices")}
        >
          View Devices
        </Button>
      </Box>
    </Box>
  );
}