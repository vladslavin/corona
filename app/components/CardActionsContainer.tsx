import { CardActions } from './CardActions';
import { FC } from 'react';
import { CardName } from '@/lib/UtilityTypes';
import { useCards } from './useCards';

interface Props {
    cardName: CardName;
}

export const CardActionsContainer: FC<Props> = ({ cardName }) => {
    const avatarUrl = process.env.NEXT_PUBLIC_AVATAR_URL;
    const { isLiked, isLoading, onLike: handleLike } = useCards(cardName);

    return (
        <CardActions
            avatarUrl={avatarUrl}
            isLiked={isLiked}
            onLike={handleLike}
            isLoading={isLoading}
        />
    );
};
