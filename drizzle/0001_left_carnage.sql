CREATE TABLE `approvals` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contentId` int NOT NULL,
	`reviewerName` varchar(120) NOT NULL,
	`status` enum('Needs your review','In review','Changes requested','Approved') NOT NULL DEFAULT 'Needs your review',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `approvals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `assets` (
	`id` int AUTO_INCREMENT NOT NULL,
	`workspaceId` int NOT NULL,
	`name` varchar(180) NOT NULL,
	`kind` varchar(40) NOT NULL,
	`sizeLabel` varchar(40),
	`brandName` varchar(120),
	`linkUrl` text,
	`updatedLabel` varchar(40),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `assets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `brands` (
	`id` int AUTO_INCREMENT NOT NULL,
	`workspaceId` int NOT NULL,
	`name` varchar(120) NOT NULL,
	`primaryChannel` varchar(80) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `brands_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `briefs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contentId` int NOT NULL,
	`body` text NOT NULL,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `briefs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `comments` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contentId` int NOT NULL,
	`authorName` varchar(120) NOT NULL,
	`body` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `comments_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contentItems` (
	`id` int AUTO_INCREMENT NOT NULL,
	`workspaceId` int NOT NULL,
	`brandId` int,
	`title` text NOT NULL,
	`type` varchar(40) NOT NULL,
	`channel` varchar(80) NOT NULL,
	`stage` enum('Idea','Drafting','Production','Review','Scheduled','Published') NOT NULL DEFAULT 'Idea',
	`dueDate` varchar(30),
	`ownerName` varchar(120),
	`excerpt` text,
	`comments` int NOT NULL DEFAULT 0,
	`assets` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contentItems_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `performanceRecords` (
	`id` int AUTO_INCREMENT NOT NULL,
	`workspaceId` int NOT NULL,
	`channel` varchar(80) NOT NULL,
	`reachLabel` varchar(40) NOT NULL,
	`changeLabel` varchar(40) NOT NULL,
	`topContent` varchar(180),
	`recordedAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `performanceRecords_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `workspaceMembers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`workspaceId` int NOT NULL,
	`userId` int NOT NULL,
	`role` enum('owner','editor','contributor','viewer') NOT NULL DEFAULT 'viewer',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `workspaceMembers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `workspaces` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(120) NOT NULL,
	`slug` varchar(120) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `workspaces_id` PRIMARY KEY(`id`),
	CONSTRAINT `workspaces_slug_unique` UNIQUE(`slug`)
);
