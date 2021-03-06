import { Button } from '@mui/material';

import './FormButton.scss';

interface FormButtonProps {
    fullWidth?: boolean;
    component?: any;
    to?: string | object;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FormButton = (
    props: React.PropsWithChildren<FormButtonProps>,
): JSX.Element => {
    return (
        <Button variant='contained' {...props}>
            {props.children}
        </Button>
    );
};

export default FormButton;
