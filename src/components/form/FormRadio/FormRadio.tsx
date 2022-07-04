import { Radio } from '@mui/material';

import './FormRadio.scss';

interface FormRadioProps {
    value: unknown;
}

const FormRadio = (props: FormRadioProps): JSX.Element => {
    return (
        <Radio
            { ...props }
            icon={
                <img src='/icons/forms/radio.svg' alt='unchecked' />
            }
            checkedIcon={
                <img src='/icons/forms/radioChecked.svg' alt='checked' />
            }
        />
    );
};

export default FormRadio;
