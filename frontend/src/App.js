

import Header from './components/Header';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-5'>
        <Container>
          <Routes>
          <Route path='/' element={<HomeScreen/>} exact/>
          <Route path='/product/:id' element={<ProductScreen/>} ></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
