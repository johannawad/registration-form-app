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
    <Typography variant="body2" gutterBottom pb={2}>
      Fill in your details
    </Typography>
    <Box
      display="flex"
      flexWrap="wrap"
      sx={{
        gap: 2,
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
