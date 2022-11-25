import './TermsInfoTab.css'
import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function TermsInfoTab() {
  return (
    <>
      <HeaderBar />
      <Header />
      <main className='terms-container'>
        <section className='terms-wrapper'>
          <h2>Shipping Rates</h2>
            <p>Worldwide shipping available.
            All shipment pricing is based upon weight.</p>
          <span>INTERNATIONAL SHIPMENTS MAY BE SUBJECT TO PAY DUTIES AND TAXES WHICH IS OUT OF OUR CONTROL.</span>
          <h2>Order Processing</h2>
            <p> Please allow 5-15 business days to process orders. 
            Once order is shipped you will receive a tracking number via email. 
            Please allow 2-5 days to arrive once shipped for domestic shipments and an additional 10-15 days for international shipments. 
            We are not responsible for any lost or stolen packages. If you have any questions regarding your order email info@WRLDWD.com.</p> 
          <h2>Sales Tax</h2>
            <p> Applicable sales tax will be added to your order.</p>
          <h2>Return Policy</h2>
            <p>All sales are final. No refunds or exchanges. If you were sent the wrong item or if the product is defective contact us via email.</p>
        </section>  
      </main>
      <Footer />
    </>
  )
}

export default TermsInfoTab
