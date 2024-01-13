import type { Metadata } from 'next';
import { FCC } from '../lib/Types';
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
