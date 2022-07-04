import { useContext } from 'react';

import { CheckoutDataContext, CheckoutDataContextType } from '../../../contexts/checkoutData';
import './Header.scss';

interface HeaderProps {
    light?: boolean;
}

const Header = (props: HeaderProps): JSX.Element => {
    const { checkoutData } = useContext<CheckoutDataContextType>(CheckoutDataContext);
    
    return (
        <header id='header'>
            <div 
                id='header-container'
                className={props.light ? 'header-light' : ''}
            >
                <div id='logo-header'>
                    <img
                        src={ `/img/${props.light ? 'logo_dark.svg' : 'logo_light.svg'}`}
                        alt='Geopagos logo'
                    />
                </div>
                <div id='business-name-header'>
                    {checkoutData.shop_name}
                </div>
            </div>
        </header>
    );
};

export default Header;
