import "dotenv/config";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const dbUrl = process.env.DB_URL;
const database = drizzle(neon(dbUrl!));

async function main() {
  try {
    await migrate(database, { migrationsFolder: "drizzle" });
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
}

main();