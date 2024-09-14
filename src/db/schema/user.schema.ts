import { relations } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { projectsTable } from "./project.schema";
import { reportsTable } from "./report.schema";
export const usersTable = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  mailingUid: text("mailing_uid"),
  mailingProvider: text("mailing_provider"),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

// relations
export const userRelation = relations(usersTable, ({ many }) => ({
  projects: many(projectsTable, {
    relationName: "projects",
  }),
  reports: many(reportsTable, {
    relationName: "reports",
  }),
}));
