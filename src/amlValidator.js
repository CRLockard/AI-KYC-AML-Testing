/**
 * Returns true if transaction exceeds reporting threshold.
 */
export function isLargeTransaction(amount) {
  return amount > 10000;
}

/**
 * Returns true if country is considered high risk.
 */
export function isHighRiskCountry(country) {
  const highRiskCountries = ["Iran", "Russia", "North Korea", "Syria", "Cuba"];

  return highRiskCountries.includes(country);
}

/**
 * Detects possible structuring.
 *
 * Structuring occurs when multiple transactions
 * are made below the reporting threshold
 * to avoid detection.
 */
export function isStructuring(transactions) {
  const suspiciousTransactions = transactions.filter(
    (transaction) => transaction.Amount >= 9000 && transaction.Amount < 10000,
  );

  return suspiciousTransactions.length >= 3;
}

/**
 * Calculates a basic AML risk score.
 */
export function calculateRiskScore(transaction) {
  let score = 0;

  if (isLargeTransaction(transaction.Amount)) {
    score += 40;
  }

  if (isHighRiskCountry(transaction.Country)) {
    score += 40;
  }

  if (transaction.TransactionType === "Cash Deposit") {
    score += 20;
  }

  return score;
}

/**
 * Determines whether transaction requires review.
 */
export function shouldFlagTransaction(transaction) {
  return (
    isLargeTransaction(transaction.Amount) ||
    isHighRiskCountry(transaction.Country) ||
    calculateRiskScore(transaction) >= 70
  );
}
