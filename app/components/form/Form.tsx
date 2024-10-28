"use client";
import React, { useState } from "react";
import { Button, Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Form.module.css";
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

export const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid =
    formData.firstName && formData.lastName && formData.email && formData.dob;

  const handleNext = () => {
    // Check if on the policy selection step and no policy is selected
    if (step === 1 && !formData.policy) {
      setErrorMessage("Please select an insurance policy before proceeding."); // Set the error message
      return;
    }
    setErrorMessage(null); // Clear error message
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handlePolicySelect = (policy: InsurancePolicy) => {
    setFormData({ ...formData, policy });
    setErrorMessage(null); // Clear error message when a policy is selected
    handleNext();
  };

  // Define the steps array with unique ids and labels for the progress bar
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
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        width: "500px",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={2}
        width={200}
        mx="auto"
      >
        <Image
          src="/logo.png"
          className={styles.logo}
          alt="logo"
          width={200}
          height={100}
          layout="responsive"
        />
      </Box>

      <ProgressBar step={step} steps={steps} />
      {/* Display error message */}
      {errorMessage && (
        <Typography variant="body2" color="error" align="center">
          {errorMessage}
        </Typography>
      )}

      {steps[step].component}

      <Box mt={2} display="flex" justifyContent="space-between">
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
              disabled={step === 0 && !isFormValid}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              //TODO: Handle form submission
              onClick={() => alert("Form Submitted!")}
            >
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
};
