import type { Metadata } from 'next';
import type { FCC } from '@/lib/UtilityTypes';
import './globals.css';
import './theme/msd.theme.css';

export const metadata: Metadata = {
    title: 'MSD Assignment',
    description: 'Corona Virus Dashboard',
};

const RootLayout: FCC = ({ children }) => {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    );
};

export default RootLayout;
