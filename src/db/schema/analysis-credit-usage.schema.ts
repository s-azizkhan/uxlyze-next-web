// analysis-credit-usage.schema.ts
import { pgTable, uuid, timestamp, integer } from "drizzle-orm/pg-core";
import { usersTable } from "./user.schema";
import { relations } from "drizzle-orm";
import { reportsTable } from "./report.schema";
import { analysisCreditsTable } from "./analysis-credit.schema";

export const analysisCreditUsageTable = pgTable("analysis_credit_usages", {
  id: uuid("id").primaryKey().defaultRandom(),
  analysisCreditId: uuid("analysis_credit_id")
    .references(() => analysisCreditsTable.id)
    .notNull(),
  amount: integer("amount").notNull(),
  usedBy: uuid("used_by")
    .references(() => usersTable.id)
    .notNull(),
  reportId: uuid("report_id")
    .references(() => reportsTable.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type InsertAnalysisCreditUsage =
  typeof analysisCreditUsageTable.$inferInsert;
export type SelectAnalysisCreditUsage =
  typeof analysisCreditUsageTable.$inferSelect;

// relations
export const analysisCreditUsageRelation = relations(
  analysisCreditUsageTable,
  ({ one }) => ({
    analysisCredit: one(analysisCreditsTable),
    usedBy: one(usersTable, {
      fields: [analysisCreditUsageTable.usedBy],
      references: [usersTable.id],
    }),
    report: one(reportsTable, {
      fields: [analysisCreditUsageTable.reportId],
      references: [reportsTable.id],
    }),
  })
);
