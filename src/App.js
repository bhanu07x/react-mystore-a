import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/products';

function App(props) {
  //let name="John"
  return (
    <div>
  <Header/>
  <Products/>
  <Footer/>
  </div>
  );
}
export default App;