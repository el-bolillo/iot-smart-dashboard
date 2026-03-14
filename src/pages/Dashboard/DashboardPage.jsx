import PageContainer from "../../components/common/PageContainer";
import SensorChart from "../../components/SensorChart";
import { Box } from "@mui/material";

const sensorData = [
  { time: "10:00", temp: 22, gas: 30 },
  { time: "10:05", temp: 24, gas: 35 },
  { time: "10:10", temp: 23, gas: 32 },
  { time: "10:15", temp: 26, gas: 40 },
  { time: "10:20", temp: 25, gas: 38 },
  { time: "10:25", temp: 27, gas: 45 },
  { time: "10:30", temp: 24, gas: 42 },
];

export default function DashboardPage() {
  return (
    <PageContainer title="Dashboard">
      <Box sx={{ height: 400, width: "100%" }}>
        <SensorChart data={sensorData} />
      </Box>
    </PageContainer>
  );
}