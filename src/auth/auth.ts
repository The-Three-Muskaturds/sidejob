import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { Lucia } from "lucia";
import db from "./db";

const adapter = new BetterSqlite3Adapter(db, {
	user: "user",
	session: "session",
});

// Configure Lucia.
const lucia = new Lucia(adapter);

console.log()