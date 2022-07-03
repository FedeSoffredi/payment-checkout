import Header from './Header/Header';

import './Layout.scss';

interface LayoutProps {
    light?: boolean;
}

const Layout = (props: React.PropsWithChildren<LayoutProps>): JSX.Element => {
    return (
        <>
            <Header light={props.light}/>
            <div id="container">
                {props.children}
            </div>
        </>
    );
};

export default Layout;
