import { config } from 'dotenv';
import process from 'process';

// Loads the environment variables from the .env file
config();

// Export the port with 5500 as the fallback if not defined in .env
export const PORT = process.env.PORT || 5500;
