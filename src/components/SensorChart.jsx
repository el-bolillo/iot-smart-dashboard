import {
    Card,
    CardContent,
    Typography,
    Stack,
} from "@mui/material";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";

export default function SensorChart({ data }) {
    return (
        <Card elevation={3} sx={{ borderRadius: 3, p: 1, width: "400%" }}>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant="h6">
                        Sensor Monitoring
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="temp"
                                name="Temperature (°C)"
                                stroke="#1976d2"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                type="monotone"
                                dataKey="gas"
                                name="Gas Level"
                                stroke="#ef5350"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Stack>
            </CardContent>
        </Card>
    );
}