import { getCard, updateCard } from '@/model/CardsRepository';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const id = req.url.slice(req.url.lastIndexOf('/') + 1);
        const card = await getCard(id);
        return Response.json(card, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { id, isLiked } = await req.json();
        await updateCard(id, isLiked);

        return Response.json({}, { status: 200 });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
