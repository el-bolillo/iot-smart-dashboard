import { Card, CardContent, TextField, Button } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

export default function SettingsPage() {
  return (
    <PageContainer title="Settings">
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <TextField label="Device ID" fullWidth margin="normal" />
          <TextField label="API Key" fullWidth margin="normal" />
          <Button variant="contained" fullWidth>
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </PageContainer>
  );
}