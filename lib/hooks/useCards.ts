import { useEffect, useState } from 'react';

interface useCardsReturn {
    isLiked: boolean;
    isLoading: boolean;
    onLike: () => void;
}
export const useCards = (cardName: string): useCardsReturn => {
    const [isLiked, setIsLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const onLike = async () => {
        setIsLoading(true);
        try {
            await fetch(`/api/cards/${cardName}`, {
                method: 'POST',
                body: JSON.stringify({ id: cardName, isLiked: !isLiked }),
            });
            setIsLiked(!isLiked);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`/api/cards/${cardName}`)
            .then((res) => res.json())
            .catch((error) => console.error(error))
            .then(({ isLiked }) => setIsLiked(isLiked))
            .finally(() => setIsLoading(false));
    }, [cardName]);

    return {
        isLiked,
        isLoading,
        onLike,
    };
};
