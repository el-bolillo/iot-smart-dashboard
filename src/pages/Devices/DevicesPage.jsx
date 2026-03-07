import { Grid, Card, CardContent, Typography } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

export default function DevicesPage() {
  return (
    <PageContainer title="Devices">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">MQ Gas Sensor</Typography>
              <Typography>Status: Online</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">DHT22 Sensor</Typography>
              <Typography>Status: Online</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageContainer>
  );
}