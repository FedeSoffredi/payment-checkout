import { useState } from 'react';

import AppRouter from '../AppRouter/AppRouter';
import { CheckoutDataContext } from '../../../contexts/checkoutData';
import { CheckoutData } from './types';
import checkoutDataExample from '../../../checkoutData.json';

const App = (): JSX.Element => {
  const [checkoutData, setCheckoutData] = useState<CheckoutData>(checkoutDataExample.data as CheckoutData);

  return (
    <CheckoutDataContext.Provider value={{ checkoutData, setCheckoutData }}>
      <AppRouter />
    </CheckoutDataContext.Provider>
  );
}

export default App;
