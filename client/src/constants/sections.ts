/**
 * Section IDs used for navigation
 */
export const SECTION_IDS = {
  OPPORTUNITY: "opportunity",
  SOLUTION: "solution",
  ROI: "roi",
  TRACTION: "traction",
} as const;

/**
 * Navigation items configuration
 */
export const NAV_ITEMS = [
  { id: SECTION_IDS.OPPORTUNITY, label: "Market" },
  { id: SECTION_IDS.SOLUTION, label: "Solution" },
  { id: SECTION_IDS.ROI, label: "ROI" },
  { id: SECTION_IDS.TRACTION, label: "Traction" },
] as const;

/**
 * Scroll offset for navigation (accounts for fixed navbar)
 */
export const NAV_SCROLL_OFFSET = 80;

