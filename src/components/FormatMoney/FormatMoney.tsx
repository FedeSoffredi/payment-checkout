import { useContext } from 'react';
import NumberFormat from 'react-number-format';

import { CheckoutDataContext, CheckoutDataContextType } from '../../contexts/checkoutData';

interface FormatMoneyProps {
    value: string | number;
    className?: string;
}

const FormatMoney = (props: FormatMoneyProps): JSX.Element => {
    const { checkoutData } = useContext<CheckoutDataContextType>(CheckoutDataContext);
    
    return (
        <NumberFormat 
            value={parseFloat(String(props.value)).toFixed(2)} 
            className={props.className}
            displayType={'text'} 
            thousandSeparator={true}
            decimalSeparator='.'
            prefix={checkoutData.attributes.currency_symbol + ' '} 
        />
    );
};

export default FormatMoney;
