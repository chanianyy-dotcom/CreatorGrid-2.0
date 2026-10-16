import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export const workspaces = mysqlTable("workspaces", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  slug: varchar("slug", { length: 120 }).notNull().unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const workspaceMembers = mysqlTable("workspaceMembers", {
  id: int("id").autoincrement().primaryKey(),
  workspaceId: int("workspaceId").notNull(),
  userId: int("userId").notNull(),
  role: mysqlEnum("role", ["owner", "editor", "contributor", "viewer"]).default("viewer").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const brands = mysqlTable("brands", {
  id: int("id").autoincrement().primaryKey(),
  workspaceId: int("workspaceId").notNull(),
  name: varchar("name", { length: 120 }).notNull(),
  primaryChannel: varchar("primaryChannel", { length: 80 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const contentItems = mysqlTable("contentItems", {
  id: int("id").autoincrement().primaryKey(),
  workspaceId: int("workspaceId").notNull(),
  brandId: int("brandId"),
  title: text("title").notNull(),
  type: varchar("type", { length: 40 }).notNull(),
  channel: varchar("channel", { length: 80 }).notNull(),
  stage: mysqlEnum("stage", ["Idea", "Drafting", "Production", "Review", "Scheduled", "Published"]).default("Idea").notNull(),
  dueDate: varchar("dueDate", { length: 30 }),
  ownerName: varchar("ownerName", { length: 120 }),
  excerpt: text("excerpt"),
  comments: int("comments").default(0).notNull(),
  assets: int("assets").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const briefs = mysqlTable("briefs", {
  id: int("id").autoincrement().primaryKey(),
  contentId: int("contentId").notNull(),
  body: text("body").notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const assets = mysqlTable("assets", {
  id: int("id").autoincrement().primaryKey(),
  workspaceId: int("workspaceId").notNull(),
  name: varchar("name", { length: 180 }).notNull(),
  kind: varchar("kind", { length: 40 }).notNull(),
  sizeLabel: varchar("sizeLabel", { length: 40 }),
  brandName: varchar("brandName", { length: 120 }),
  linkUrl: text("linkUrl"),
  updatedLabel: varchar("updatedLabel", { length: 40 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const comments = mysqlTable("comments", {
  id: int("id").autoincrement().primaryKey(),
  contentId: int("contentId").notNull(),
  authorName: varchar("authorName", { length: 120 }).notNull(),
  body: text("body").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const approvals = mysqlTable("approvals", {
  id: int("id").autoincrement().primaryKey(),
  contentId: int("contentId").notNull(),
  reviewerName: varchar("reviewerName", { length: 120 }).notNull(),
  status: mysqlEnum("status", ["Needs your review", "In review", "Changes requested", "Approved"]).default("Needs your review").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const performanceRecords = mysqlTable("performanceRecords", {
  id: int("id").autoincrement().primaryKey(),
  workspaceId: int("workspaceId").notNull(),
  channel: varchar("channel", { length: 80 }).notNull(),
  reachLabel: varchar("reachLabel", { length: 40 }).notNull(),
  changeLabel: varchar("changeLabel", { length: 40 }).notNull(),
  topContent: varchar("topContent", { length: 180 }),
  recordedAt: timestamp("recordedAt").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type Workspace = typeof workspaces.$inferSelect;
export type ContentItem = typeof contentItems.$inferSelect;
export type InsertContentItem = typeof contentItems.$inferInsert;
