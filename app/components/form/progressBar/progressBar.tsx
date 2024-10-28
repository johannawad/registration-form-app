import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface ProgressBarProps {
  step: number;
  steps: { id: number; label: string }[];
}

const ProgressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  margin: "20px 0",
  position: "relative",
}));

const StepContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  textAlign: "center",
});

const OuterCircle = styled(Box)(({ theme }) => ({
  width: 32,
  height: 32,
  borderRadius: "50%",
  border: `2px solid ${theme.palette.grey[50]}`,
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const InnerCircle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  width: 16,
  height: 16,
  borderRadius: "50%",
  backgroundColor: active ? theme.palette.primary.main : "transparent",
  transition: "background-color 0.3s ease",
}));

const ProgressLine = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  flex: 1,
  height: 2,
  backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[50],
  margin: "0 10px",
  transition: "background-color 0.3s ease",
}));

const StepLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>(({ theme, active }) => ({
  marginTop: 8,
  fontSize: 14,
  color: active ? theme.palette.primary.main : theme.palette.text.secondary,
  transition: "color 0.3s ease",
}));

interface ProgressBarProps {
  step: number;
  steps: { id: number; label: string }[];
}

export const ProgressBar = ({ step, steps }: ProgressBarProps) => {
  return (
    <ProgressContainer>
      {steps.map((stepObj, index) => (
        <React.Fragment key={stepObj.id}>
          <StepContainer>
            <OuterCircle>
              <InnerCircle active={step >= index} />
            </OuterCircle>
            <StepLabel active={step >= index}>{stepObj.label}</StepLabel>
          </StepContainer>
          {index < steps.length - 1 && <ProgressLine active={step > index} />}
        </React.Fragment>
      ))}
    </ProgressContainer>
  );
};
