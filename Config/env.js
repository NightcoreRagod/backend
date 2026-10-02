import process from "node:process";
import { config } from "dotenv";

config({ path: `./.env.${process.env.NODE_ENV || "development"}.local` });

export const { PORT, NODE_ENV } = process.env;
