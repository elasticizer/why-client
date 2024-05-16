BEGIN TRANSACTION;

CREATE TABLE `example` (
	`id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	`done` BOOLEAN NOT NULL,
	`message` TEXT NOT NULL
);

INSERT INTO `example` VALUES
	(1, 1, 'Successful to connect to database');

COMMIT;
