import sqlite from "better-sqlite3";

const db = sqlite("side_job.db");

db.exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY,
		email TEXT UNIQUE,
		password TEXT
	)
`);

db.exec(`CREATE TABLE IF NOT EXISTS sessions (
		id TEXT NOT NULL PRIMARY KEY,
		expires_at INTEGER NOT NULL,
		user_id TEXT NOT NULL,
		FOREIGHT KEY (user_id) REFERENCES users(id)
	)`);

export default db;
