import NumberFormat from 'react-number-format';

interface FormatMoneyProps {
    value: string | number;
    className?: string;
}

const FormatMoney = (props: FormatMoneyProps): JSX.Element => {
    return (
        <NumberFormat 
            value={parseFloat(String(props.value)).toFixed(2)} 
            className={props.className}
            displayType={'text'} 
            thousandSeparator={true}
            decimalSeparator='.'
            prefix={'$ '} 
        />
    );
};

export default FormatMoney;
