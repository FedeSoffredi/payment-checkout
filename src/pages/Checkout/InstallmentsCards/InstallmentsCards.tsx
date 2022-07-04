import { RadioGroup } from '@mui/material';

import { CheckoutInstallments } from '../../../components/core/App/types';
import FormRadio from '../../../components/form/FormRadio/FormRadio';
import FormatMoney from '../../../components/FormatMoney/FormatMoney';
import './InstallmentsCards.scss';

interface InstallmentsCardsProps {
    installments: CheckoutInstallments[];
    value: number;
    onChange: (installment: CheckoutInstallments) => void;
}

const InstallmentsCards = (props: InstallmentsCardsProps): JSX.Element => {
    const handlerChange = (
        _event: React.ChangeEvent<HTMLInputElement>, 
        value: string,
    ): void => {
        const installment = props.installments.find(e => e.installment === Number(value));

        if (props.onChange) {
            props.onChange(installment as CheckoutInstallments);
        }
    };

    return (
        <RadioGroup
            name='installments-radio-group'
            value={props.value}
            onChange={handlerChange}
        >
            { props.installments.map((installment, index) =>
                <div 
                    className={`installment-item ${installment.installment === props.value ? 'card-checked' : ''}`} 
                    key={index}
                >
                    <FormRadio
                        value={installment.installment}
                    />
                    <div className='item-info'>
                        <div className='info-installment'>
                            {installment.installment} cuotas de&nbsp;
                            <FormatMoney value={installment.installmentPrice} />
                        </div>
                        <div className='info-financial-rate'>
                            CF: {installment.financialRate.toFixed(2)}%
                        </div>
                    </div>
                    <div className='info-total'>
                        {installment.financialRate === 0 
                            ? 'Sin interés' 
                            : <FormatMoney value={installment.total} />
                        }
                    </div>
                </div>
            )}
        </RadioGroup>
    );
};

export default InstallmentsCards;
