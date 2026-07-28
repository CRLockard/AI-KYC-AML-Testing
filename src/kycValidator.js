/**
 * Returns true if the SSN contains exactly 9 digits.
 */
export function isValidSSN(ssn) {
  return /^\d{9}$/.test(ssn);
}

/**
 * Returns true if the customer is marked as High risk.
 */
export function isHighRiskCustomer(customer) {
  return customer.RiskLevel === "High";
}

/**
 * Returns true if the customer requires Enhanced Due Diligence (EDD).
 */
export function requiresEnhancedDueDiligence(customer) {
  return customer.RiskLevel === "High" || customer.KYCStatus === "Pending";
}
