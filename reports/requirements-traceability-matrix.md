# Requirements Traceability Matrix (RTM)

## Project: AI KYC & AML Banking Platform

| Requirement ID | Requirement Description                | Test Case ID | Test Description                            | Result          |
| -------------- | -------------------------------------- | ------------ | ------------------------------------------- | --------------- |
| FR-004         | Verify customer identity information   | KYC-001      | Validate customer SSN format                | PASS            |
| FR-007         | Assign customer risk level             | KYC-002      | Identify high-risk customers                | PASS            |
| FR-010         | Chatbot assists KYC process            | N/A          | Future chatbot integration test             | NOT IMPLEMENTED |
| AML-001        | Detect large financial transactions    | AML-001      | Flag transactions over $10,000              | PASS            |
| AML-002        | Detect high-risk countries             | AML-002      | Flag transactions from restricted countries | PASS            |
| AML-003        | Detect suspicious transaction patterns | AML-003      | Detect structuring activity                 | PASS            |
| AML-004        | Calculate transaction risk score       | AML-004      | Calculate AML risk score                    | PASS            |
| PF-003         | AML risk scoring completes quickly     | AML-005      | Validate risk calculation execution         | PASS            |
| SEC-003        | Protect sensitive customer information | SEC-001      | Verify synthetic data usage                 | PASS            |

---

# Test Execution Summary

| Metric           | Result |
| ---------------- | ------ |
| Total Test Cases | 11     |
| Passed           | 11     |
| Failed           | 0      |
| Blocked          | 0      |
| Pass Rate        | 100%   |

---

# Notes

The chatbot requirements are documented but were not implemented during this testing sprint. Future development iterations should include NLP model validation, chatbot response accuracy testing, and integration testing.
