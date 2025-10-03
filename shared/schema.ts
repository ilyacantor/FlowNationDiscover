import { sql } from "drizzle-orm";
import { pgTable, text, varchar, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const eventSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.string(),
  date: z.string(),
  location: z.string(),
  distance: z.string().optional(),
  tags: z.array(z.string()),
  source: z.string(),
  url: z.string(),
  image: z.string().optional(),
  logo: z.string().optional(),
});

export type Event = z.infer<typeof eventSchema>;
