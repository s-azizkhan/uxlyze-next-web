// analysis-credit.schema.ts
import { pgTable, uuid, text, timestamp, integer } from "drizzle-orm/pg-core";
import { usersTable } from "./user.schema";
import { relations } from "drizzle-orm";
import { reportsTable } from "./report.schema";
import { analysisCreditUsageTable } from "./analysis-credit-usage.schema";
export const analysisCreditsTable = pgTable("analysis_credits", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => usersTable.id),
  balance: integer("balance").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type InsertAnalysisCredit = typeof analysisCreditsTable.$inferInsert;
export type SelectAnalysisCredit = typeof analysisCreditsTable.$inferSelect;

export const analysisCreditRelation = relations(
  analysisCreditsTable,
  ({ one, many }) => ({
    user: one(usersTable),
    usages: many(analysisCreditUsageTable, {
      relationName: "usages",
    }),
  })
);
