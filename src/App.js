import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomeTab, ShopTab, ContactTab, TermsInfoTab, CartTab } from '../src/components/NavTabs';
import ItemPage from '../src/pages/Shop/ItemPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTab />}></Route>
        <Route path="/Shop" element={<ShopTab />}></Route>
          <Route path='/Shop/item/'>
            <Route path=':productId' element={<ItemPage />}/>
          </Route>
        <Route path="/Contact" element={<ContactTab />}></Route>
        <Route path="/TermsInfo" element={<TermsInfoTab />}></Route>
        <Route path="/Cart" element={<CartTab />}></Route>
      </Routes>
    </>
  )
}

export default App;
