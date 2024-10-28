import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { FormData } from "../../types/FormData";

export interface SummaryStepProps {
  formData: FormData;
}

export const SummaryStep = ({ formData }: SummaryStepProps) => (
  <Box>
    {/* Header Section */}
    <Typography variant="h6" gutterBottom>
      Policy Summary
    </Typography>
    <Typography variant="body1">
      {formData.firstName} {formData.lastName}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {formData.dob}
    </Typography>
    <Typography variant="body2" color="textSecondary">
      {formData.email}
    </Typography>

    {/* Policy Card */}
    <Box
      mt={2}
      p={2}
      display="flex"
      flexDirection="column"
      border="1px solid #90caf9"
      borderRadius="8px"
      bgcolor="#f9f9f9"
      position="relative"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Typography variant="h6" color="textPrimary">
          {formData.policy?.name}
        </Typography>
        <IconButton color="primary" size="small">
          <InfoOutlinedIcon />
        </IconButton>
      </Box>

      {/* Policy Description List */}
      <List dense>
        <ListItem disableGutters>
          <ListItemText
            primary={<strong>All-Inclusive Protection:</strong>}
            secondary="Extensive coverage for health, property, and personal liability."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={<strong>Tailored Solutions:</strong>}
            secondary="Customisable options, including travel insurance and critical illness coverage."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={<strong>Global Coverage Protection:</strong>}
            secondary="Available at home and abroad for your peace of mind."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={<strong>24/7 Support:</strong>}
            secondary="Access to dedicated customer service for assistance anytime."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={<strong>Financial Security:</strong>}
            secondary="Generous payout limits and low deductibles for financial peace of mind."
          />
        </ListItem>
      </List>
    </Box>
  </Box>
);
