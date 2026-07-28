import {
  isLargeTransaction,
  isHighRiskCountry,
  shouldFlagTransaction,
  calculateRiskScore,
  isStructuring,
} from "../src/amlValidator";

describe("AML Validation Tests", () => {
  test("transactions over $10,000 should be flagged", () => {
    expect(isLargeTransaction(15000)).toBe(true);
  });

  test("small transactions should not be flagged", () => {
    expect(isLargeTransaction(500)).toBe(false);
  });

  test("high risk countries should be detected", () => {
    expect(isHighRiskCountry("Iran")).toBe(true);
  });

  test("normal countries should not be flagged", () => {
    expect(isHighRiskCountry("USA")).toBe(false);
  });

  test("high risk transactions should trigger review", () => {
    const transaction = {
      Amount: 25000,
      Country: "USA",
    };

    expect(shouldFlagTransaction(transaction)).toBe(true);
  });

  test("detects structuring activity", () => {
    const transactions = [{ Amount: 9800 }, { Amount: 9700 }, { Amount: 9600 }];

    expect(isStructuring(transactions)).toBe(true);
  });

  test("calculates high risk score", () => {
    const transaction = {
      Amount: 20000,
      Country: "Iran",
      TransactionType: "Cash Deposit",
    };

    expect(calculateRiskScore(transaction)).toBe(100);
  });
});
