import { InsurancePackage } from "./InsurancePackage";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  insurancePackage: InsurancePackage | null;
}
