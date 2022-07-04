import FormatMoney from '../../../components/FormatMoney/FormatMoney';
import { CheckoutItems } from '../../../components/core/App/types';
import './Amounts.scss';

interface AmountsProps {
    total: number;
    items: CheckoutItems[];
}

const Amounts = (props: AmountsProps): JSX.Element => {
    return (
        <div id='amounts-container'>
            <div id='amount-total'>
                <div className='amount-item'>
                    <span className='item-name'>Total</span>
                    <FormatMoney className='item-price' value={props.total} />
                </div>
            </div>

            <div id='amounts-items'>
                { props.items.map((item, index) =>
                    <div className='amount-item' key={index}>
                        <span className='item-name'>{`${item.name} x${item.quantity}`}</span>
                        <FormatMoney className='item-price' value={item.unitPrice.amount} />
                    </div> 
                )}
            </div>
        </div>
    );
};

export default Amounts;
