import type { ThemeConfig } from 'antd';

export const MDSTheme: ThemeConfig = {
    token: {
        colorPrimaryText: 'blue',
        colorPrimary: 'red',
        colorText: 'var(--msd-text-color)',
        colorTextHeading: 'var(--msd-secondary-text-color)',
    },
    components: {
        Typography: {
            colorTextHeading: 'var(--msd-text-color)',
            titleMarginBottom: '0rem',
        },
        Button: {
            fontWeight: '600',
        },
        Breadcrumb: {
            fontSize: 18,
        },
    },
};
