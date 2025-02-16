# Pull Request Title

<!-- Follow Conventional Commits format: -->
<!-- Example: `docs: add CONTRIBUTING.md to ChimeMate` -->

## Description

<!-- Provide a clear and concise summary of your changes. -->

## Related Issues

<!-- Link issues with keywords like `Fixes #issue_number` or `Closes #issue_number`. -->

## PR Type

<!-- Select the type of change this PR introduces: -->

- [ ] 🆕 Feature
- [ ] 🐛 Bug Fix
- [ ] 📝 Documentation Update
- [ ] 🎨 UI/UX Enhancement
- [ ] 🔧 Refactor
- [ ] 🚀 Performance Improvement
- [ ] ✅ Test Addition/Update
- [ ] 🔒 Security Fix

## Changes Made

<!-- Summarize key changes with bullet points. Example: -->

- Added `CONTRIBUTING.md` for better onboarding.
- Updated `README.md` with contribution guidelines.
- Integrated GitHub Actions to run automated tests on PR submission.

## Automated Testing & CI/CD

- [ ] Unit tests added/updated (if applicable).
- [ ] Passed CI/CD pipeline checks (link to workflow run).
- [ ] Verified no breaking changes to authentication or API calls.

## Security & Performance Considerations

- **Does this PR introduce security risks?** [Yes/No]
  - If Yes, describe the risk and how it’s mitigated.
- **Does this PR modify authentication, authorization, or data access logic?** [Yes/No]
- **Does this change involve third-party dependencies?** [Yes/No]
  - If Yes, confirm that dependencies are vetted and secure.
- **Performance Impact Assessment:**
  - **Memory Usage:** [Increased/Decreased/No Change]
  - **Response Time:** [Faster/Slower/No Change]
  - **Database Query Efficiency:** [Optimized/No Change]

## ChimeMate-Specific Considerations

- **Does this impact authentication or API integration?** [Yes/No]
- **Does it modify database schemas or require migrations?** [Yes/No]
- **Does it introduce breaking changes in the UI/UX?** [Yes/No]

## API Documentation Updates

- [ ] Updated API documentation for new/modified endpoints.
- [ ] Verified that API contracts remain backward-compatible.
- [ ] Updated OpenAPI/Swagger specs (if applicable).

## Accessibility (a11y) Considerations ♿

- [ ] All interactive elements are keyboard-accessible.
- [ ] Proper ARIA roles and attributes are used.
- [ ] Sufficient color contrast is maintained.
- [ ] Screen reader support is verified.
- [ ] Form inputs have clear labels and descriptions.

## Error Handling Best Practices ⚠

- [ ] All API responses include proper error messages and status codes.
- [ ] UI gracefully handles network failures and API errors.
- [ ] Try/catch blocks are used where applicable.
- [ ] Error logs are meaningful and not exposing sensitive data.

## Logging & Monitoring 📊

- [ ] Added logging for critical application flows.
- [ ] Ensured logs capture meaningful context (e.g., request IDs, error details).
- [ ] No sensitive information (e.g., passwords, tokens) is logged.
- [ ] Set up necessary monitoring alerts for potential failures.
- [ ] Verified logs are structured and follow ChimeMate’s logging standards.

## Screenshots (If Applicable)

<!-- Attach relevant screenshots/GIFs showcasing UI/UX updates. -->

## Checklist

✅ Code adheres to ChimeMate's style guidelines.  
✅ Necessary tests are added/updated.  
✅ All CI/CD workflows pass successfully.  
✅ Related issues are linked.  
✅ PR is assigned to the correct reviewer(s).

## Additional Notes

<!-- Any extra context for the reviewer. -->

---

### **Reviewer Guidelines**

- Ensure changes align with ChimeMate’s authentication, API, and UI design principles.
- Verify that automated tests are correctly implemented and passing.
- Check that documentation updates are clear and consistent.
- Assess security, performance, and accessibility impact.
- Verify proper error handling across API and UI.
- Confirm that logging follows best practices and improves monitoring.

---

### **Why This Matters?**

✅ **Security & Performance** – Prevent vulnerabilities & ensure efficiency.  
✅ **API Documentation** – Keep contracts clear & maintainable.  
✅ **Accessibility (a11y)** – Make ChimeMate inclusive for all users.  
✅ **Error Handling** – Avoid silent failures & improve UX.  
✅ **Logging & Monitoring** – Ensure observability & quick debugging.
