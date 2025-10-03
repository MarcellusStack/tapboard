import { co, z } from "jazz-tools";

// Main tracker schema for daily activities
export const Tracker = co.map({
  name: z.string(),
  description: z.optional(z.string()),
  iconImage: co.optional(co.image()), // Proper image type for representation
  completionType: z.enum([
    "tap",
    "image",
    "number",
    "percentage",
    "progress",
    "text",
  ]), // Enum for completion types

  // Metadata
  createdAt: z.date(),
  updatedAt: z.date(),

  // Analytics fields for charts
  unit: z.optional(z.string()), // e.g., "steps", "minutes", "cups", etc.
  category: z.optional(z.string()), // For grouping in charts
  color: z.optional(z.string()), // Hex color for UI representation

  // Settings
  isActive: z.boolean(),
  reminderTime: z.optional(z.date()),
});

// Individual tracker entries (completions/actions)
export const TrackerEntry = co.map({
  tracker: Tracker, // Proper CoValue reference instead of string ID

  // Completion data based on type
  completedAt: z.date(),
  completed: z.optional(z.boolean()),
  value: z.optional(z.number()), // For number/percentage/progress completions
  text: z.optional(z.string()), // For text-based completions
  images: co.optional(co.list(co.image())), // For image-based completions
  notes: z.optional(z.string()), // Optional notes for the entry

  // Location data (optional)
  latitude: z.optional(z.number()),
  longitude: z.optional(z.number()),
  locationName: z.optional(z.string()),
});

// Account schema with proper Jazz structure
export const Account = co.account({
  profile: co.map({
    name: z.string(),
    email: z.string(),
    avatar: co.optional(co.image()), // Proper image type for avatar
  }),
  root: co.map({
    trackers: co.list(Tracker),
    trackerEntries: co.list(TrackerEntry),
  }),
});
