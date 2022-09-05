import {ReactElement} from "react";
import {NextPageWithLayout} from "./_app";
import {Layout} from "../components/layout/layout"
import {MainContent} from "../components/layout/MainContent";

const Home: NextPageWithLayout = () => <MainContent/>

Home.getLayout = function getLayout(page: ReactElement) {
	return (
			<Layout>{page}</Layout>
	)
}

export default Home
