import { MongoClient } from 'mongodb';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

console.log('MONGO_URI', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not defined');
}

const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
});

async function main() {
    try {
        await client.connect();
        const db = client.db('cards');
        const cards = db.collection('cards');

        await cards.deleteMany({});

        await cards.insertMany([
            {
                name: 'LineChart',
                description: 'Probably the best card ever',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'PieChart',
                description: 'Perhaps the best card ever',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
        console.log('Done');
    }
}

main().catch(console.error);
