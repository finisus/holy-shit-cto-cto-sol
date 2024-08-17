import Header from './Header.jsx';
import Footer from './Footer.jsx';
import pfpBanner from './assets/pfp.png';

function App() {
  return (
    <>
      <Header />
      <img src={pfpBanner} alt='Holy Shit!' />
      <Footer />
    </>
  );
}

export default App