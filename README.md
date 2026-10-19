# LessonDesk

A React + TypeScript + Vite portfolio dashboard for an independent tutor. All 34 seed lessons and student aliases are fictional. No authentication, real students, payments, tax calculations or backend services are involved.

## Run

- `npm install`
- `npx vite --host 0.0.0.0` for development
- `npm test` for behavior tests
- `npm run build` for TypeScript checking and production output

## Design and data

A calm lavender workspace keeps range selection, reconciled summaries and lesson editing together. Dashboard metrics follow the date range; student/status filters refine the table independently. The lesson service returns Promises, simulates latency/failure and stores records in localStorage. Every save writes storage before updating UI; failures retain the form. The demo calendar is October 2026, with upcoming lessons anchored to 19 October 2026.

Fees are integer cents in EUR. Only completed lessons earn revenue. Cancellation rate excludes scheduled lessons and returns no value when the denominator is zero. Date comparisons use Europe/Warsaw calendar days; stored timestamps remain UTC. Ambiguous or nonexistent Warsaw clock times are rejected rather than guessed.

## Verification

Five automated domain tests cover completed-only integer earnings, zero-denominator cancellation rate, inclusive calendar boundaries, and both daylight-saving transitions. Production build includes strict TypeScript checking.

A boundary case protected by tests: UTC midnight does not define a Warsaw teaching day. For example 18 October at 22:00 UTC belongs to 19 October in Warsaw. This is a test-protected design decision; no historical bug discovery is claimed.

Browser automation, manual keyboard checks and mobile screenshots were not run in the current environment because the supported browser QA capability was unavailable. Do not represent these as completed.

### Browser acceptance checklist (pending)

1. Add a fictional lesson, reload, and verify it persists.
2. Filter its Warsaw date and student; edit status to completed; reconcile revenue.
3. Choose Fail requests, attempt a save, verify entered fields remain; retry after restoring Normal.
4. Reload in failure mode; verify error and retry. Use slow mode to inspect loading.
5. Clear results with a nonexistent alias; reset filters.
6. Reset demo data and verify original records return.
7. Disable storage or fill quota; verify explicit error without disappearing form.
8. Use Tab/Shift+Tab throughout, Escape to close the editor and check focus restoration. Check 375px and 768px widths; horizontal table scrolling and reachable edit controls.

## Two-minute walkthrough

- 0:00 Explain fictional data and local persistence.
- 0:20 Change date range; explain completed-only revenue and cancellation denominator.
- 0:45 Filter students and status; edit one record.
- 1:10 Add a lesson and reload.
- 1:30 Demonstrate failed save and retained input.
- 1:45 Explain DST tests and scope limits.

## Portfolio status

Live demo: https://lessondesk-mon.foggysmile128.chatgpt.site (owner-private).\n\nSource: https://github.com/XMon4/LessonDesk. Screenshots and a recorded walkthrough remain separate portfolio tasks. AI assisted implementation and test authoring; verification is limited to the checks documented above.
