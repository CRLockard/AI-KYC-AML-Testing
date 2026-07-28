# AI KYC & AML Banking Platform

# Generative AI Testing Project Report

## 1. Project Overview

TechSpark Solutions initiated the development of an AI-powered KYC and Anti-Money Laundering (AML) banking platform designed to improve customer onboarding, identity verification, and suspicious transaction detection.

The objective of this project was to demonstrate how Generative AI tools can improve the software testing lifecycle by assisting with requirements creation, synthetic test data generation, test case development, and test documentation.

---

# 2. How Generative AI Enhanced the Development Process

Generative AI was utilized throughout the Software Development Life Cycle (SDLC) to accelerate planning and improve consistency.

## Requirements Gathering

Generative AI assisted in transforming a high-level business objective into structured requirements.

The generated requirements included:

- Customer onboarding functionality
- Identity verification workflows
- AML transaction monitoring
- NLP chatbot capabilities
- System integration requirements
- Scalability expectations
- Performance requirements
- Security considerations

This reduced the time required to organize business needs into testable requirements.

---

# 3. Epics and User Stories

## Epic 1: Customer Identity Verification

### User Story

As a banking customer, I want to provide identity information so that the system can verify my account.

Acceptance Criteria:

- Customer information can be submitted
- Required fields must be validated
- Invalid identity information is rejected

Story Points: 5

---

## Epic 2: AML Transaction Monitoring

### User Story

As a compliance analyst, I want suspicious transactions identified so that potential money laundering activities can be reviewed.

Acceptance Criteria:

- Large transactions are detected
- High-risk countries are identified
- Suspicious transaction patterns are flagged

Story Points: 8

---

## Epic 3: AI Customer Assistance

### User Story

As a customer, I want chatbot assistance during onboarding so that I can complete verification successfully.

Acceptance Criteria:

- Chatbot understands customer questions
- Chatbot provides relevant responses
- Complex issues can be escalated

Story Points: 13

---

# 4. Sprint Planning

## Sprint 1: Requirements and Test Planning

Completed:

- Requirement identification
- Test scenario creation
- Synthetic data planning

Estimated Effort:

20 Story Points

---

## Sprint 2: Data Creation and Validation Logic

Completed:

- KYC synthetic customer dataset
- AML synthetic transaction dataset
- JavaScript validation functions

Estimated Effort:

25 Story Points

---

## Sprint 3: Automation and Reporting

Completed:

- Vitest test automation
- Requirements Traceability Matrix
- Test execution documentation

Estimated Effort:

20 Story Points

---

# 5. Test Automation Implementation

The project used JavaScript and Vitest for automated testing.

Automated validation included:

## KYC Testing

- SSN validation
- Risk identification
- Enhanced due diligence checks

## AML Testing

- Large transaction detection
- High-risk country detection
- Structuring detection
- Risk score calculation

Test Results:

| Metric     | Result |
| ---------- | ------ |
| Test Cases | 11     |
| Passed     | 11     |
| Failed     | 0      |
| Pass Rate  | 100%   |

---

# 6. Challenges and Solutions

## Challenge 1: Original Testing Framework Used Python

The initial assignment referenced Pytest, which did not align with the JavaScript-based development environment.

Solution:

The testing framework was adapted to Vitest because it integrates directly with Vite projects and provides equivalent automated testing capabilities.

---

## Challenge 2: Creating Realistic Banking Data

Using real customer information would create privacy and compliance concerns.

Solution:

Synthetic datasets were generated containing realistic KYC and AML scenarios without exposing actual customer information.

---

## Challenge 3: Maintaining Requirement Coverage

Ensuring every requirement had corresponding tests required structured tracking.

Solution:

A Requirements Traceability Matrix was created to map requirements to test cases and execution results.

---

# 7. Critical Analysis of Project Outcomes

Generative AI significantly improved productivity throughout the project lifecycle.

The greatest benefits included:

- Faster requirements documentation
- Faster creation of realistic test datasets
- Improved test scenario coverage
- Automated documentation generation

However, human review remained necessary.

Generated requirements and test cases required validation to ensure they matched business expectations and compliance standards.

The combination of Generative AI assistance and human decision-making provided the most effective approach.

---

# 8. Conclusion

This project demonstrated how Generative AI can enhance modern software testing practices.

By integrating AI assistance into requirements gathering, test design, synthetic data creation, and reporting, testing teams can reduce manual effort while improving consistency and coverage.

The final solution provided a complete QA workflow from initial requirements through automated test execution and reporting.
