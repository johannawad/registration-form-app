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

const StyledPolicyCard = styled(Box)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[50]}`,
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
  transition: "border 0.3s",
  "&:hover": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
}));

interface PolicyCardProps {
  policy: InsurancePolicy;
  handlePolicySelect: (policy: InsurancePolicy) => void;
}

const PolicyCard = ({ policy, handlePolicySelect }: PolicyCardProps) => {
  return (
    <StyledPolicyCard
      key={policy.name}
      onClick={() => handlePolicySelect(policy)}
    >
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" color="primary">
            {policy.name}
          </Typography>
          <IconButton color="primary">
            <InfoOutlinedIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Minimal coverage.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Extra policy description goes here...
        </Typography>
      </Box>
    </StyledPolicyCard>
  );
};

// InsurancePolicyStep component
export const InsurancePolicyStep = ({
  handlePolicySelect,
}: InsurancePolicyStepProps) => (
  <Box>
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
