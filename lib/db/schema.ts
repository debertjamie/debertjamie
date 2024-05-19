import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `website_${name}`);

export const guestbook = createTable("guestbook", {
  id: varchar("id", { length: 36 })
    .notNull()
    .primaryKey(),
  email: varchar("email", { length: 256 }).notNull(),
  body: varchar("body", { length: 500 }).notNull(),
  created_by: varchar("created_by", { length: 256 }).notNull(),
  created_at: timestamp("created_at", { withTimezone: false })
    .defaultNow()
    .notNull(),
  updated_at: timestamp("updated_at", { withTimezone: false })
    .defaultNow()
    .notNull(),
});

export type Guestbook = typeof guestbook.$inferSelect;
