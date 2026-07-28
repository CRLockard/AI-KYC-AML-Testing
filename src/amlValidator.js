/**
 * Returns true if the transaction amount is greater than $10,000.
 */
export function isLargeTransaction(amount) {
  return amount > 10000;
}

/**
 * Returns true if the destination country is considered high risk.
 */
export function isHighRiskCountry(country) {
  const highRiskCountries = ["Iran", "Russia", "North Korea", "Syria", "Cuba"];

  return highRiskCountries.includes(country);
}

/**
 * Returns true if the transaction should trigger an AML review.
 */
export function shouldFlagTransaction(transaction) {
  return (
    isLargeTransaction(transaction.Amount) ||
    isHighRiskCountry(transaction.Country)
  );
}
