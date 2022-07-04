import { useContext, useState } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { CheckoutInstallments } from '../../components/core/App/types';
import Layout from '../../components/Layout/Layout';
import FormTitle from '../../components/form/FormTitle/FormTitle';
import FormTextField from '../../components/form/FormTextField/FormTextField';
import Amounts from './Amounts/Amounts';
import InstallmentsCards from './InstallmentsCards/InstallmentsCards';
import FormButton from '../../components/form/FormButton/FormButton';
import {
    CheckoutDataContext,
    CheckoutDataContextType,
} from '../../contexts/checkoutData';
import './Checkout.scss';

const Checkout = (): JSX.Element => {
    const { checkoutData } = useContext<CheckoutDataContextType>(CheckoutDataContext);
    const [installment, setInstallment] = useState<CheckoutInstallments>(checkoutData.attributes.installments[0]);

    return (
        <Layout>
            <div id='container-checkout'>
                <FormTitle text='Completá los datos para pagar' center />
                <Amounts 
                    total={installment.total}
                    items={checkoutData.attributes.items}
                />

                <div id='cards-link'>
                    Paga con tarjeta de crédito o débito. <a href='#cards-link'>Ver tarjetas</a>
                </div>
              
                <Grid 
                    id='card-data' 
                    container 
                    rowSpacing={3} 
                    columnSpacing={{ xs: 2 }}
                >
                    <Grid item xs={12}>
                        <FormTextField 
                            id='card-number'
                            name='card-number'
                            label='Número de tarjeta'
                            type='number'
                            endAdornment={
                                <img src='/icons/cards/visa.svg' alt='visa' />
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField 
                            id='card-expiration'
                            name='card-expiration'
                            label='MM/AA'
                            helperText='Fecha de expiración'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormTextField 
                            id='card-code'
                            name='card-code'
                            label='Cód. de seguridad'
                            type='number'
                            helperText='3 números al dorso de tarjeta'
                            endAdornment={
                                <img src='/icons/help.svg' alt='visa' />
                            }
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField 
                            id='card-name'
                            name='card-name'
                            label='Nombre de titular'
                            helperText='Como figura en la tarjeta'
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormTextField 
                            id='card-dni'
                            name='card-dni'
                            type='number'
                            label='DNI del titular'
                            helperText='Número de documento'
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <div id='installments-container'>
                    <FormTitle text='Cuotas' />
                    <InstallmentsCards
                        installments={checkoutData.attributes.installments}
                        value={installment.installment}
                        onChange={setInstallment}
                    />
                </div>

                <div id='personal-info-container'>
                    <FormTitle text='Datos Personales' />
                    <FormTextField 
                        id='personal-email'
                        name='personal-email'
                        label='E-mail'
                        type='email'
                        helperText='A este email te enviaremos el recibo de compra'
                        fullWidth
                    />
                </div>

                <FormButton component={Link} to='/status/denied' fullWidth>Continuar</FormButton>

                <div id='transaction-security-text'>
                    <img src='/icons/padlock.svg' alt='padlock' />
                    Todas las transacciones son seguras y encriptadas.
                </div>
            </div>
        </Layout>
    );
}
  
export default Checkout;