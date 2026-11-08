// Display formatters shared between dashboard pages (jobs table already uses
// them; seeker-facing job cards can reuse them later).

import type { JobFormData } from "@/lib/types/jobs"

/** "25", "40", "per hour" → "€25 – €40 / hr" (as in the Figma rows). */
export const formatCompensation = (job: JobFormData) =>
    `€${job.minSalary} – €${job.maxSalary} / ${job.salaryFrequency.replace("per ", "")}`

/** "2025-05-30" → "May 30, 2025". Fixed en-US so SSR and client agree. */
export const formatDeadline = (deadline: string) =>
    new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })
