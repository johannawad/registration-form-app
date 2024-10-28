import { Box, Typography, Grid, Button } from "@mui/material";
import {
  InsurancePackage,
  insurancePackages,
} from "../../types/InsurancePackage";

export interface InsurancePackageStepProps {
  handlePackageSelect: (pkg: InsurancePackage) => void;
}

export const InsurancePackageStep = ({
  handlePackageSelect,
}: InsurancePackageStepProps) => (
  <Box>
    <Typography variant="h5" component="h2" gutterBottom>
      Choose an Insurance Package
    </Typography>
    <Box display="flex" flexDirection="column" gap={2}>
      {insurancePackages.map((pkg) => (
        <Button
          key={pkg.name}
          variant="contained"
          onClick={() => handlePackageSelect(pkg)}
          fullWidth
        >
          {pkg.name}
        </Button>
      ))}
    </Box>
  </Box>
);
