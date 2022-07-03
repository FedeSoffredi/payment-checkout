import { Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

import FormButton from '../../components/form/FormButton/FormButton';
import Layout from '../../components/Layout/Layout';
import './NotFound.scss';

const NotFound = (): JSX.Element => {
    const history = useHistory();
    
    return (
        <Layout light>
            <div id='container-not-found'>
                <Typography id="title-not-found">Página no encontrada</Typography>
                <Typography id="message-not-found">
                    La página a la que intentó acceder no existe. Si crees que 
                    esto es un error nuestro, contáctenos con detalles
                    y lo revisaremos lo antes posible. ¡Gracias!
                </Typography>
                <FormButton onClick={history.goBack}>Volver</FormButton>
            </div>
        </Layout>
    );
};

export default NotFound;