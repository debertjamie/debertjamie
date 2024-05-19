import "server-only";
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { dbUrl } from "@/app/env.mjs";
import * as schema from "./schema";

const sql = neon(dbUrl!);
export const db = drizzle(sql);
