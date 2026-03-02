import { MongoClient } from 'mongodb';
import { getRequiredEnv } from '@/shared/utils/env';

const uri = getRequiredEnv('MONGODB_URI');
const dbName = process.env.MONGODB_DB || 'pragati360';

declare global {
    // allow global to persist across module reloads in development
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var __mongoClientPromise: any;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!global.__mongoClientPromise) {
    client = new MongoClient(uri, {});
    clientPromise = client.connect();

    global.__mongoClientPromise = clientPromise;
} else {
    clientPromise = global.__mongoClientPromise;
}

export async function getDb() {
    const client = await clientPromise;
    return client.db(dbName);
}

export default getDb;

/*
Data collected only for Early Access eligibility review.
No passwords, OAuth tokens, Google/Instagram credentials, or payment info
should ever be stored in this collection.
*/
