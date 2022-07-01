import { BrowserRouter, Route, Routes } from "react-router-dom";

import Checkout from './pages/Checkout/Checkout';
import ErrorDenied from './pages/errors/ErrorDenied/ErrorDenied';
import NotFound from './pages/errors/NotFound/NotFound';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Checkout />} />
          <Route path='/error/denied' element={<ErrorDenied />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
