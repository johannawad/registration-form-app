import { Box, Typography, IconButton } from "@mui/material";
import styled from "@mui/system/styled";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  InsurancePolicy,
  insurancePolicies,
} from "../../types/InsurancePolicy";

export interface InsurancePolicyStepProps {
  handlePolicySelect: (policy: InsurancePolicy) => void;
}

// Styled component for the PolicyCard
const StyledPolicyCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px",
  border: `1px solid ${theme.palette.grey[50]}`,
  borderRadius: "8px",
  backgroundColor: "#f5f5f5",
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "#e0f7fa",
  },
}));

// Interface for PolicyCard props
interface PolicyCardProps {
  policy: InsurancePolicy;
  handlePolicySelect: (policy: InsurancePolicy) => void;
}

// PolicyCard component
const PolicyCard = ({ policy, handlePolicySelect }: PolicyCardProps) => {
  return (
    <StyledPolicyCard
      key={policy.name}
      onClick={() => handlePolicySelect(policy)}
    >
      <Box>
        <Typography variant="h6" color="textPrimary">
          {policy.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Minimal coverage.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Extra policy description goes here...
        </Typography>
      </Box>
      <IconButton color="primary">
        <InfoOutlinedIcon />
      </IconButton>
    </StyledPolicyCard>
  );
};

// InsurancePolicyStep component
export const InsurancePolicyStep = ({
  handlePolicySelect,
}: InsurancePolicyStepProps) => (
  <Box>
    <Typography variant="body2" gutterBottom pb={2}>
      Choose an Insurance Policy
    </Typography>
    <Box display="flex" flexDirection="column" gap={2}>
      {insurancePolicies.map((policy) => (
        <PolicyCard
          policy={policy}
          handlePolicySelect={handlePolicySelect}
          key={policy.name}
        />
      ))}
    </Box>
  </Box>
);
