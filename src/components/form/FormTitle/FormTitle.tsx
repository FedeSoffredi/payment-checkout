import './FormTitle.scss';

interface FormTitleProps {
    text: string;
    center?: boolean;
}

const FormTitle = (props: FormTitleProps): JSX.Element => {
    return (
        <h1 
            className={`form-title ${props.center ? ' text-center' : ''}`}
        >
            {props.text}
        </h1>
    );
};

export default FormTitle;
