import {
  isLargeTransaction,
  isHighRiskCountry,
  shouldFlagTransaction,
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
});
