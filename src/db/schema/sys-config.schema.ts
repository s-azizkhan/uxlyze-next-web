import { jsonb, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const sysConfigTable = pgTable("sys_configs", {
  id: uuid("id").primaryKey().defaultRandom(),
  key: text("key").notNull(),
  value: text("value").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});