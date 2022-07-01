import './NotFound.scss';

const NotFound = (): JSX.Element => {
    return (
        <div className='not-found-container'>
            <h1>Página no encontrada</h1>
            <p>
                La página a la que intentó acceder no existe. Si crees que 
                esto es un error nuestro, contáctenos con detalles
                y lo revisaremos lo antes posible. ¡Gracias!
            </p>
            
        </div>
    );
};

export default NotFound;