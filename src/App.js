import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomeTab, ShopTab, ContactTab, TermsInfoTab, CartTab} from '../src/components/navTabs/NavTabs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeTab />}></Route>
        <Route path="/Shop" element={<ShopTab />}></Route>
        <Route path="/Contact" element={<ContactTab />}></Route>
        <Route path="/TermsInfo" element={<TermsInfoTab />}></Route>
        <Route path="/Cart" element={<CartTab />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
