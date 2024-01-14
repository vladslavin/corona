import clientPromise from './MongoDBClient';
import { Card } from './Card';
const DOCUMENTS_MAX_LIMIT = 1000;

export const getCards = async (): Promise<Card[]> => {
    try {
        const client = await clientPromise;
        const db = client.db('cards');
        return await db.collection<Card>('cards').find({}).limit(DOCUMENTS_MAX_LIMIT).toArray();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getCard = async (name: string): Promise<Card | null> => {
    try {
        const client = await clientPromise;
        const db = client.db('cards');
        return await db.collection<Card>('cards').findOne({ name });
    } catch (error) {
        console.error(error);
        return null;
    }
};

export const updateCard = async (id: string, isLiked: boolean): Promise<void> => {
    try {
        const client = await clientPromise;
        const db = client.db('cards');

        await db
            .collection<Card>('cards')
            .updateOne({ name: id }, { $set: { isLiked: isLiked, updatedAt: new Date() } });
    } catch (error) {
        console.error(error);
    }
};
