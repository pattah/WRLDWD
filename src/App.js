import './App.css';
import HeaderBar from '../src/components/HeaderBar';
import Header from '../src/components/Header'
import MainSlider from '../src/components/MainSlider';
import YoutubeLogo from '../src/components/YoutubeLogo';
import Footer from '../src/components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TermsInfoTab from '../src/components/navTabs/TermsInfoTab';

function App() {
  return (
    <BrowserRouter>
    <HeaderBar />
    <Header />
    <MainSlider />
    <YoutubeLogo />
    <Footer />

    <Routes>
        <Route path="/essa" element={<TermsInfoTab />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
