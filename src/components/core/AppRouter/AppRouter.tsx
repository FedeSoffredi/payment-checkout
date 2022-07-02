import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Checkout from '../../../pages/Checkout/Checkout';
import NotFound from '../../../pages/NotFound/NotFound';
import TransactionStatus from '../../../pages/TransactionStatus/TransactionStatus';
import { TransactionStatus as TransactionStatusEnum } from '../../../pages/TransactionStatus/types';
import AppRouterController from './AppRouterController';


const AppRouter = (props: React.PropsWithChildren<{}>): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' children={<Checkout />} />
                <Route 
                    exact 
                    path={`/status/:status(${AppRouterController.generateOptionsParam(TransactionStatusEnum)})`}
                    children={<TransactionStatus />} 
                />
                <Route exact path='*' children={<NotFound />} />
            </Switch>
            {props.children}
        </BrowserRouter>
    );
};

export default AppRouter;
