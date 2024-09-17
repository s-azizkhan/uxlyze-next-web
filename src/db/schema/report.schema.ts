import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./user.schema";
import { projectsTable } from "./project.schema";
import { relations } from "drizzle-orm";
import { reportResultsTable } from "./report-result.schema";

export const reportsTable = pgTable("reports", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => usersTable.id),
  projectId: uuid("project_id").references(() => projectsTable.id),
  title: text("title").notNull(),
  webUrl: text("web_url").notNull(),
  reportConfig: jsonb("report_config")
    .notNull()
    .default(
      '{"includePsi": false, "includeAi": false, "includePreview": false}'
    ),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type InsertReport = typeof reportsTable.$inferInsert;
export type SelectReport = typeof reportsTable.$inferSelect;

// relations
export const reportRelation = relations(reportsTable, ({ one }) => ({
  resultData: one(reportResultsTable, {
    fields: [reportsTable.id],
    references: [reportResultsTable.reportId],
    relationName: "reportResult",
  }),
  project: one(projectsTable, {
    fields: [reportsTable.projectId],
    references: [projectsTable.id],
    relationName: "project",
  }),
}));
