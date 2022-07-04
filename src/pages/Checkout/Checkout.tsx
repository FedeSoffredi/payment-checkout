import { Grid } from '@mui/material';

import Layout from '../../components/Layout/Layout';
import FormTitle from '../../components/form/FormTitle/FormTitle';
import FormTextField from '../../components/form/FormTextField/FormTextField';
import Amounts from './Amounts/Amounts';
import InstallmentsCards from './InstallmentsCards/InstallmentsCards';
import './Checkout.scss';

const ITEMS = [
    {
        name: 'Salmon Salad',
        quantity: 1,
        unitPrice: {
            amount: 259,
        },
    },
    {
        name: 'Chicken Mex Salad',
        quantity: 100,
        unitPrice: {
            amount: 23759,
        },
    },
];

const INSTALLMENTS = [
    {
        installment: 1,
        total: 1000,
        financialRate: 0,
        installmentPrice: 1000
    },
    {
        installment: 3,
        total: 1122.21,
        financialRate: 0.09,
        installmentPrice: 374.07
    },
    {
        installment: 6,
        total: 1249.45,
        financialRate: 0.165,
        installmentPrice: 208.24
    }
];

const Checkout = (): JSX.Element => {
    return (
        <Layout>
            <div id='container-checkout'>
                <FormTitle text='Completá los datos para pagar' center />
                <Amounts 
                    total={876999.98}
                    items={ITEMS}
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
                            value='2345 6656 3578 2347'
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
                            label='DNI del titular'
                            helperText='Número de documento'
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <div id='installments-container'>
                    <FormTitle text='Cuotas' />
                    <InstallmentsCards 
                        installments={INSTALLMENTS}
                    />
                </div>
            </div>
        </Layout>
    );
}
  
export default Checkout;