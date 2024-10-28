import { Box, Typography, TextField } from "@mui/material";
import { FormData } from "../../types/FormData";

export interface UserInfoStepProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ClientInfoStep = ({
  formData,
  handleChange,
}: UserInfoStepProps) => (
  <Box p={4}>
    <Typography variant="h5" component="h2" gutterBottom>
      User Information
    </Typography>
    <Box
      display="flex"
      flexWrap="wrap"
      sx={{
        gap: 2, // Spacing between child elements
        "& > *": {
          flex: 1, // Each child takes equal width
          minWidth: "200px", // Minimum width for better responsiveness
        },
      }}
    >
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        label="Date of Birth"
        name="dob"
        type="date"
        value={formData.dob}
        onChange={handleChange}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  </Box>
);
