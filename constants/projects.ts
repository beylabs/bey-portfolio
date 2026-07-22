export const PROJECTS = [
  {
    slug: "nbais-portal",
    title: "NBAIS Staff Headcount Portal",
    role: "Lead Systems Architect",
    description: "A concurrent-safe staff verification system deployed simultaneously across 7+ state offices, built on Google Apps Script and Google Sheets.",
    engineeringWin: "Used LockService to serialize writes and generate atomic, gapless reference numbers under concurrent submissions, with duplicate-ID and duplicate-IPPIS checks re-validated inside the lock to close the race-condition window, plus a counter that re-seeds itself from actual row count on redeploy to prevent collisions.",
    codeSnippet: {
      label: "Atomic reference number generation under concurrent load",
      language: "javascript",
      code: `function generateReferenceNumber() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const sheet = SpreadsheetApp.getActive().getSheetByName("Staff");
    const lastRow = sheet.getLastRow();

    // Re-seed counter from actual row count, not a stored value,
    // so a redeploy or manual edit can never cause a collision.
    let counter = lastRow;
    let refNumber;

    do {
      counter++;
      refNumber = "NBAIS-2026-" + String(counter).padStart(4, "0");
    } while (isDuplicateReference(sheet, refNumber));

    return refNumber;
  } finally {
    lock.releaseLock();
  }
}`
    },
    capabilities: [
      "Staff identity verification and headcount submission",
      "Examination supervision posting letters, generated per staff member",
      "Admin dashboard with global search and bulk printing",
      "CSV export for government reporting",
      "Full audit logging of every record change",
      "Passport photo upload and storage"
    ],
    screenshots: [
      { src: "/screenshots/nbais-landing.jpg", caption: "Staff Headcount 2026 landing page" },
      { src: "/screenshots/nbais-reprint-slip.jpg", caption: "Reprint verification slip form" },
      { src: "/screenshots/nbais-custodian-posting.jpg", caption: "Supervision and custodian posting form" }
    ],
    impact: "94% staff participation (566 of 600+) with zero data loss across simultaneous multi-office deployment.",
    tech: ["Google Apps Script", "LockService", "Google Sheets", "Audit Logging"],
    link: "#",
    color: "from-blue-600 to-midnight"
  },
  {
    slug: "nizam-portal",
    title: "Nizam Academic Portal",
    role: "Product Lead / Full-Stack Developer",
    description: "A school management PWA for Directors, Teachers, and Students, covering enrolment, attendance, grading, and AI-assisted analytics.",
    engineeringWin: "Passwords are SHA-256 hashed with a per-deployment salt and a live migration path. Sessions persist across a CacheService and Firestore dual layer so cache eviction never silently logs users out. AI usage quotas are enforced server-side and post-success only, so a failed request never burns a user's daily limit.",
    codeSnippet: {
      label: "Password hashing with live migration for legacy plaintext entries",
      language: "javascript",
      code: `function verifyPassword(inputPassword, storedValue) {
  const salt = PropertiesService.getScriptProperties()
    .getProperty("PASSWORD_SALT");

  const hashedInput = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    inputPassword + salt
  ).map(b => (b < 0 ? b + 256 : b).toString(16).padStart(2, "0")).join("");

  if (hashedInput === storedValue) return true;

  // Migration path: if the stored value was never hashed,
  // accept a plaintext match once, then upgrade it immediately.
  if (inputPassword === storedValue) {
    upgradeToHashedPassword(inputPassword);
    return true;
  }

  return false;
}`
    },
    capabilities: [
      "Geofenced attendance with a configurable radius",
      "Automated daily absence digest emailed to parents and guardians",
      "Assignment posting and retrieval by class",
      "Digital ID card generation for students and staff",
      "AI-assisted analytics via Gemini",
      "Resumable term archiving that survives execution timeouts",
      "OTP-based password reset"
    ],
    screenshots: [
      { src: "/screenshots/nizam-login.jpg", caption: "Academic Portal secure login" },
      { src: "/screenshots/nizam-director-dashboard.jpg", caption: "Director control panel" },
      { src: "/screenshots/nizam-student-dashboard.jpg", caption: "Student control panel" },
      { src: "/screenshots/nizam-result-slip.jpg", caption: "Generated termly result slip" },
      { src: "/screenshots/nizam-fee-status.jpg", caption: "Fee status view for a student" },
      { src: "/screenshots/nizam-fees-setup.jpg", caption: "Fee setup and management panel" }
    ],
    impact: "100% paperless operations for Directors, Teachers, and Students in active production use.",
    tech: ["Google Apps Script", "Firebase Firestore", "Chart.js", "Gemini API"],
    link: "#",
    color: "from-indigo-600 to-midnight"
  },
  {
    slug: "leave-management",
    title: "Online Leave Application & Approval System",
    role: "Systems Architect",
    description: "A digitised leave management system replacing a fully manual paper process, built on Google Forms, Apps Script, and Google Sheets.",
    engineeringWin: "Uses spreadsheet column edits as a state machine to drive a three-stage sequential approval chain, Head of Unit, Administration, then Zonal Coordinator, with each notification email carrying the cumulative approval history so no approver has to hunt for prior remarks. A daily maintenance trigger automatically sends return-to-duty reminders and closes out completed leave records with no manual follow-up.",
    codeSnippet: {
      label: "Column-edit state machine driving sequential chain-of-command approval",
      language: "javascript",
      code: `function onEditTrigger(e) {
  const sheet = e.range.getSheet();
  if (sheet.getName() !== CONFIG.SHEET_NAME) return;

  const col = e.range.getColumn();
  const row = e.range.getRow();
  const rowVals = sheet.getRange(row, 1, 1, C.STATUS_COL).getValues()[0];

  // Each stage only fires on its own column, so an edit anywhere
  // else on the row can never skip or repeat a step in the chain.
  if (col === C.HOU_REC) {
    notifyNextApprover(CONFIG.ADMIN_EMAILS, rowVals, "Awaiting Admin Review");
  } else if (col === C.ADMIN_DECISION) {
    notifyNextApprover([CONFIG.ZC_EMAIL], rowVals, "Awaiting Final Approval");
  } else if (col === C.ZONAL_DECISION) {
    finalizeDecision(sheet, row, rowVals);
  }
}`
    },
    capabilities: [
      "Online application via Google Form with attached passport photo and supporting document",
      "Three-stage sequential approval chain: Head of Unit, Administration, Zonal Coordinator",
      "Cumulative approval history included in every notification email",
      "Auto-generated official leave letter from a Google Docs template on final decision",
      "Calendar sync with automatic staff invite on approval",
      "Automated return-to-duty reminders and status closeout"
    ],
    impact: "Replaced a fully manual, paper-based leave process for a 500+ staff workforce with a fully automated, auditable digital workflow.",
    tech: ["Google Apps Script", "Google Forms", "Google Docs API", "Google Calendar API"],
    link: "#",
    color: "from-emerald-600 to-midnight"
  },
  {
    slug: "birthday-automation",
    title: "Staff Engagement Automation",
    role: "Automation Engineer",
    description: "A time-triggered birthday and engagement system with custom HTML email templates for institutional staff.",
    engineeringWin: "Iterated through real-world rendering bugs across mail clients, fixing DD/MM/YYYY date parsing, HTML-entity-encoding emoji to prevent question mark characters on Android, and per-year deduplication so no staff member receives a duplicate message.",
    codeSnippet: {
      label: "Per-year deduplication to prevent repeat birthday emails",
      language: "javascript",
      code: `function hasAlreadySentThisYear(staffId) {
  const props = PropertiesService.getScriptProperties();
  const key = "sent_" + staffId + "_" + new Date().getFullYear();
  return props.getProperty(key) !== null;
}

function markAsSent(staffId) {
  const props = PropertiesService.getScriptProperties();
  const key = "sent_" + staffId + "_" + new Date().getFullYear();
  props.setProperty(key, "true");
}`
    },
    screenshots: [
      { src: "/screenshots/birthday_email_redacted.png", caption: "A real birthday email as received, recipient details blurred for privacy" }
    ],
    impact: "100% zero-touch automation for staff engagement across the Kano Zone.",
    tech: ["Google Apps Script", "Time-Driven Triggers", "HTML Email Templates"],
    link: "#",
    color: "from-goldAccent to-midnight"
  }
];
