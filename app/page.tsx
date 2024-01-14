import { FC } from 'react';
import { Breadcrumb, Col, ConfigProvider, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { MDSTheme } from './theme/ThemeConfig';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { BarChart } from './components/BarChart';
import { PieChart } from './components/PieChart';
import { Actions } from './components/Actions';

const Home: FC = () => {
    return (
        <ConfigProvider theme={MDSTheme}>
            <AntdRegistry>
                <Layout>
                    <Header title="MSD Covid Dashboard" />
                    <Content>
                        <Col xs={{ span: 24 }} md={{ offset: 1, span: 22 }}>
                            <Row justify="space-between" align="middle" className="vertical-space">
                                <Breadcrumb items={[{ title: 'UK Statistics' }]} />
                                <Actions />
                            </Row>
                        </Col>

                        <Row gutter={[24, 24]}>
                            <Col xs={{ span: 24 }} md={{ offset: 1, span: 11 }}>
                                <BarChart />
                            </Col>
                            <Col xs={{ span: 24 }} md={{ span: 11 }}>
                                <PieChart />
                            </Col>
                        </Row>
                    </Content>
                    <Footer />
                </Layout>
            </AntdRegistry>
        </ConfigProvider>
    );
};

export default Home;
