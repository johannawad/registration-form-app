"use client";

import React, { useState } from "react";
import { Button, Box, Paper } from "@mui/material";
import Image from "next/image";
import styles from "./Form.module.css";
import { InsurancePackage } from "../types/InsurancePackage";
import { InsurancePackageStep } from "./steps/InsurancePackageSteps";
import { FormData } from "../types/FormData";
import { ClientInfoStep } from "./steps/ClientInfoStep";
import { SummaryStep } from "./steps/SummaryStep";

// Initial form data
const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  dob: "",
  insurancePackage: null,
};

export const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handlePackageSelect = (pkg: InsurancePackage) => {
    setFormData({ ...formData, insurancePackage: pkg });
    handleNext();
  };

  const steps = [
    <ClientInfoStep formData={formData} handleChange={handleChange} />,
    <InsurancePackageStep handlePackageSelect={handlePackageSelect} />,
    <SummaryStep formData={formData} />,
  ];

  return (
    <Paper elevation={3} sx={{ padding: 2, width: "500px" }}>
      <Box width={100}>
        <Image
          src="/logo.png"
          className={styles.logo}
          alt="logo"
          width={100}
          height={100}
          layout="responsive"
        />
      </Box>

      {steps[step]}
      <Box mt={2} display="flex" justifyContent="space-between">
        {step > 0 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        {step < 2 ? (
          <Button variant="contained" color="primary" onClick={handleNext}>
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
    </Paper>
  );
};
