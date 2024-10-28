export interface InsurancePolicy {
  name: string;
  description: string;
  price: number;
}

export const insurancePolicies: InsurancePolicy[] = [
  { name: "Basic", description: "Basic coverage", price: 100 },
  {
    name: "Standard",
    description: "Standard coverage with added benefits",
    price: 200,
  },
  {
    name: "Premium",
    description: "Comprehensive coverage with all benefits",
    price: 300,
  },
];
