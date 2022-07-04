import { FormControl, FormHelperText, Input, InputAdornment, InputLabel } from "@mui/material";

import './FormTextField.scss';

interface FormTextFieldProps {
    name: string;
    id?: string;
    value?: unknown;
    type?: string;
    label?: string;
    fullWidth?: boolean;
    helperText?: string;
    endAdornment?: React.ReactNode;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const FormTextField = (props: FormTextFieldProps): JSX.Element => {
    let inputProps = { ...props };
    delete inputProps.id;
    delete inputProps.label;
    delete inputProps.helperText;
    delete inputProps.endAdornment;
    

    return (
        <FormControl
            id={props.id}
            variant="standard"
            fullWidth={props.fullWidth}
        >
            { props.label && <InputLabel htmlFor={'input-'+props.name}>{props.label}</InputLabel> }
            <Input
                id={'input-'+props.name}
                endAdornment={
                    <InputAdornment position="end">
                        {props.endAdornment}
                    </InputAdornment>
                }
                { ...inputProps }
            />
            { props.helperText && <FormHelperText>{props.helperText}</FormHelperText> }
        </FormControl>
    );
};

export default FormTextField;
