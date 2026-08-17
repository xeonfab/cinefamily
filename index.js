import 'dotenv/config';
import { WatchmodeClient } from '@watchmode/api-client';

if (!process.env.WATCHMODE_API_KEY) {
  throw new Error('Missing WATCHMODE_API_KEY environment variable');
}

const client = new WatchmodeClient({ apiKey: process.env.WATCHMODE_API_KEY });

export default client;
