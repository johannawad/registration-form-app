import { Box, Typography } from "@mui/material";
import { FormData } from "../../types/FormData";

export interface SummaryStepProps {
  formData: FormData;
}

export const SummaryStep = ({ formData }: SummaryStepProps) => (
  <Box>
    <Typography variant="h5" component="h2" gutterBottom>
      Summary
    </Typography>
    <Typography>First Name: {formData.firstName}</Typography>
    <Typography>Last Name: {formData.lastName}</Typography>
    <Typography>Email: {formData.email}</Typography>
    <Typography>Date of Birth: {formData.dob}</Typography>
    <Typography>
      Insurance Package: {formData.insurancePackage?.name}
    </Typography>
  </Box>
);
