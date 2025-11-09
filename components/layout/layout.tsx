import { Footer } from "./Footer";
import { Header } from './Header';
import React, { JSX } from 'react';

type LayoutProps = {
    children?: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({children}) => (<>
	<Header/>

	<main className='h-screen flex flex-col bg-neutral'>
		<div>
			{children}
		</div>
		<Footer/>
	</main>
</>);
