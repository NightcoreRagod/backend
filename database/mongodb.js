import mongooseimport mongoose from "mongoose";
import { DB_URI } from "../Config/env.js";

export async function connectMongoDB() {
  if (!DB_URI) {
    throw new Error("DB_URI is missing; check your .env file");
  }

  await mongoose.connect(DB_URI);
  console.log("MongoDB connected");
} from "mongoose";
import { DB_URI } from "../Config/env.js";

