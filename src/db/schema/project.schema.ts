import { relations } from "drizzle-orm";
import { reportsTable } from "./report.schema";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { usersTable } from "./user.schema";

export const projectsTable = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => usersTable.id),
  name: text("name").notNull(),
  type: text("type").notNull(),
  description: text("description"),
  figmaUrl: text("figma_url"),
  websiteUrl: text("website_url"),
  imageUrl: text("image_url"),
  reportCount: integer("report_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  deletedAt: timestamp("deleted_at"),
});

export type InsertProject = typeof projectsTable.$inferInsert;
export type SelectProject = typeof projectsTable.$inferSelect;

// relations
export const projectRelation = relations(projectsTable, ({ one, many }) => ({
  reports: many(reportsTable),
  user: one(usersTable, {
    fields: [projectsTable.userId],
    references: [usersTable.id],
  }),
}));
