import { Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import { TransactionStatusParams, TransactionStatusErrors } from './types';
import FormButton from '../../components/form/FormButton/FormButton';
import './TransactionStatus.scss';


const TransactionStatus = (): JSX.Element => {
    const params = useParams<TransactionStatusParams>();
    
    return (
        <Layout light>
            <div id='container-status-transaction'>
                <img 
                    id='icon-status-transaction'
                    src={`/icons/transactions-status/${TransactionStatusErrors[params.status].icon}`}
                    alt={params.status} 
                />
                <Typography id="title-status-transaction">
                    {TransactionStatusErrors[params.status].title}
                </Typography>
                <Typography id="message-status-transaction">
                    {TransactionStatusErrors[params.status].message}
                </Typography>
                <FormButton component={Link} to='/'>Volver a intentar</FormButton>
            </div>
        </Layout>
    );
}
  
export default TransactionStatus;