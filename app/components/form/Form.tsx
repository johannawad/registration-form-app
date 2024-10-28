"use client";
import React, { useState } from "react";
import { Button, Box, Paper, styled } from "@mui/material";
import Image from "next/image";
import { InsurancePolicy } from "../types/InsurancePolicy";
import { FormData } from "../types/FormData";
import { ClientInfoStep } from "./steps/ClientInfoStep";
import { SummaryStep } from "./steps/SummaryStep";
import { InsurancePolicyStep } from "./steps/InsurancePolicyStep";
import { ProgressBar } from "./progressBar/progressBar";

// Initial form data
const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  policy: null,
};

const StyledFormContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  maxWidth: 600,
  width: "100%",
  margin: "auto",
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    minWidth: "80vw",
  },
}));

const LogoContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: 200,
  marginBottom: 16,
});

const ButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid =
    formData.firstName && formData.lastName && formData.email && formData.dob;

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handlePolicySelect = (policy: InsurancePolicy) => {
    setFormData({ ...formData, policy });
    handleNext();
  };

  const steps = [
    {
      id: 0,
      label: "Your Details",
      component: (
        <ClientInfoStep formData={formData} handleChange={handleChange} />
      ),
    },
    {
      id: 1,
      label: "Policy",
      component: (
        <InsurancePolicyStep handlePolicySelect={handlePolicySelect} />
      ),
    },
    {
      id: 2,
      label: "Confirmation",
      component: <SummaryStep formData={formData} />,
    },
  ];

  return (
    <StyledFormContainer elevation={3}>
      <LogoContainer>
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={100}
          layout="responsive"
        />
      </LogoContainer>

      <ProgressBar step={step} steps={steps} />

      {steps[step].component}

      <ButtonContainer>
        {step > 0 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}

        <Box ml="auto">
          {step < steps.length - 1 ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={
                (step === 0 && !isFormValid) || (step === 1 && !formData.policy)
              }
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => alert("Form Submitted!")}
            >
              Submit
            </Button>
          )}
        </Box>
      </ButtonContainer>
    </StyledFormContainer>
  );
};

export default Form;
