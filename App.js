import Header from './Header';
import DevCardList from './DevCardList';
import CustCardList from './CustCardList';
import './App.css';
import Newsletter from './Newsletter';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <DevCardList />
      <br />
      <CustCardList />
      <br />
      <Newsletter />
      <br />
      <Footer />
    </div>
  );
}

export default App;