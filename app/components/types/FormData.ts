import { InsurancePolicy } from "./InsurancePolicy";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  policy: InsurancePolicy | null;
}
