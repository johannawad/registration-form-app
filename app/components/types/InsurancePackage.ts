export interface InsurancePackage {
  name: string;
  description: string;
  price: number;
}

export const insurancePackages: InsurancePackage[] = [
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
