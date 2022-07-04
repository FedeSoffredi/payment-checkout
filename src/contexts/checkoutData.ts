import { createContext } from 'react';

import { CheckoutData } from '../components/core/App/types';

export interface CheckoutDataContextType {
    checkoutData: CheckoutData;
    setCheckoutData: (c: CheckoutData) => void;
}

export const CheckoutDataContext = createContext<CheckoutDataContextType>({
    checkoutData: {} as CheckoutData,
    setCheckoutData: (_c: CheckoutData) => {},
});
