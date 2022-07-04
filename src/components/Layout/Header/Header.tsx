import './Header.scss';

interface HeaderProps {
    light?: boolean;
}

const Header = (props: HeaderProps): JSX.Element => {
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
                    Nombre del comercio
                </div>
            </div>
        </header>
    );
};

export default Header;
