import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
export const feedbackTable = pgTable("feedbacks", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type InsertFeedback = typeof feedbackTable.$inferInsert;
export type SelectFeedback = typeof feedbackTable.$inferSelect;
