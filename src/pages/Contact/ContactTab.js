import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../Contact/ContactTab.css';

function ContactTab() {
  return (
    <>
      <HeaderBar />
      <Header />
      <div className='contact-container'>
        <a href='mailto:info@wrldwd.com'>INFO@WRLDWD.COM</a>
      </div>
      <Footer />
    </>
  )
}

export default ContactTab
