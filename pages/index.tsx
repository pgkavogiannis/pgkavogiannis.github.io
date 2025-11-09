import { NextPageWithLayout } from './_app';
import { MainContent } from '../components/layout/MainContent';
import { ReactElement } from 'react';
import { Layout } from '../components/layout/layout';

const Home: NextPageWithLayout = () => <MainContent/>;

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>{page}</Layout>
    );
};

export default Home;
