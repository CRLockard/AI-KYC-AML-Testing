import {
  isValidSSN,
  isHighRiskCustomer,
  requiresEnhancedDueDiligence,
} from "../src/kycValidator";

describe("KYC Validation Tests", () => {
  test("valid SSN should pass validation", () => {
    expect(isValidSSN("123456789")).toBe(true);
  });

  test("invalid SSN should fail validation", () => {
    expect(isValidSSN("12345")).toBe(false);
  });

  test("high risk customers should be identified", () => {
    const customer = {
      RiskLevel: "High",
    };

    expect(isHighRiskCustomer(customer)).toBe(true);
  });

  test("pending customers should require additional review", () => {
    const customer = {
      RiskLevel: "Low",
      KYCStatus: "Pending",
    };

    expect(requiresEnhancedDueDiligence(customer)).toBe(true);
  });
});
