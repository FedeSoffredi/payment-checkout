import { RadioGroup } from '@mui/material';

import { CheckoutInstallments } from '../../../components/core/App/types';
import FormRadio from '../../../components/form/FormRadio/FormRadio';
import './InstallmentsCards.scss';

interface InstallmentsCardsProps {
    installments: CheckoutInstallments[];
}

const InstallmentsCards = (props: InstallmentsCardsProps): JSX.Element => {
    return (
        <RadioGroup
            name='installments-radio-group'
        >
            { props.installments.map((installment, index) =>
                <div className='installment-item' key={index}>
                    <FormRadio
                        value={installment.installment}
                    />
                </div>
            )}
        </RadioGroup>
    );
};

export default InstallmentsCards;
