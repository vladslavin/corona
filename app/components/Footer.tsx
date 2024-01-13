import { Footer as AppFooter } from 'antd/es/layout/layout';
import Link from 'antd/es/typography/Link';
import { GithubOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { Space } from 'antd';

export const Footer: FC = () => (
    <AppFooter>
        <Link href="https://github.com/vladslavin/corona">
            <GithubOutlined size={23} style={{ color: 'var(--msd-ant-colors-light-black)' }} />
        </Link>
    </AppFooter>
);
