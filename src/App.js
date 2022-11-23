import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import {HomeTab, ShopTab, ContactTab, TermsInfoTab, CartTab} from '../src/components/navTabs/NavTabs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTab />}></Route>
        <Route path="/Shop" element={<ShopTab />}></Route>
        <Route path="/Contact" element={<ContactTab />}></Route>
        <Route path="/TermsInfo" element={<TermsInfoTab />}></Route>
        <Route path="/Cart" element={<CartTab />}></Route>
      </Routes>
    </>
  )
}

export default App;
