export const PROJECTS = [
  {
    slug: "nbais-portal",
    title: "NBAIS Staff Headcount Portal",
    role: "Lead Systems Architect",
    description: "A concurrent-safe staff verification system deployed simultaneously across 7+ state offices, built on Google Apps Script and Google Sheets.",
    engineeringWin: "Used LockService to serialize writes and generate atomic, gapless reference numbers under concurrent submissions — with duplicate-ID and duplicate-IPPIS checks re-validated inside the lock to close the race-condition window, plus a counter that re-seeds itself from actual row count on redeploy to prevent collisions.",
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
    engineeringWin: "Passwords are SHA-256 hashed with a per-deployment salt and a live migration path. Sessions persist across a CacheService + Firestore dual layer so cache eviction never silently logs users out. AI usage quotas are enforced server-side and post-success only, so a failed request never burns a user's daily limit.",
    impact: "100% paperless operations for Directors, Teachers, and Students in active production use.",
    tech: ["Google Apps Script", "Firebase Firestore", "Chart.js", "Gemini API"],
    link: "#",
    color: "from-indigo-600 to-midnight"
  },
  {
    slug: "birthday-automation",
    title: "Staff Engagement Automation",
    role: "Automation Engineer",
    description: "A time-triggered birthday and engagement system with custom HTML email templates for institutional staff.",
    engineeringWin: "Iterated through real-world rendering bugs across mail clients — fixing DD/MM/YYYY date parsing, HTML-entity-encoding emoji to prevent '?' characters on Android, and per-year deduplication so no staff member receives a duplicate message.",
    impact: "100% zero-touch automation for staff engagement across the Kano Zone.",
    tech: ["Google Apps Script", "Time-Driven Triggers", "HTML Email Templates"],
    link: "#",
    color: "from-goldAccent to-midnight"
  }
];
