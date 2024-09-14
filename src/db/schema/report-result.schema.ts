import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { reportsTable } from "./report.schema";
import { projectsTable } from "./project.schema";
import { relations } from "drizzle-orm";

export const reportResultsTable = pgTable("report_results", {
  id: uuid("id").primaryKey().defaultRandom(),
  reportId: uuid("report_id").references(() => reportsTable.id),
  projectId: uuid("project_id").references(() => projectsTable.id),
  result: jsonb("result").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type InsertReportResult = typeof reportResultsTable.$inferInsert;
export type SelectReportResult = typeof reportResultsTable.$inferSelect;

// relations
export const reportResultRelation = relations(
  reportResultsTable,
  ({ one }) => ({
    result: one(reportsTable, {
      fields: [reportResultsTable.reportId],
      references: [reportsTable.id],
      relationName: "reportResult",
    }),
    project: one(projectsTable, {
      fields: [reportResultsTable.projectId],
      references: [projectsTable.id],
      relationName: "project",
    }),
  })
);
