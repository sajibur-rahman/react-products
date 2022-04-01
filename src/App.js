import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ConditionalRendaring from './components/ConditionalRendaring';
import Grandpa from './components/Grandpa/Grandpa';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <h1>Welcome to products fair</h1>
      <Link to='/'>Home</Link>
      <Link to='/review'>Order review</Link>
      <Link to='/condition'>condion</Link>
      <Link to='/grandpa'>grandpa</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/review' element={<OrderReview/>}/>
        <Route path='/condition' element={<ConditionalRendaring/>}/>
        <Route path='/grandpa' element={<Grandpa/>}/>
      </Routes>      
    </div>
  );
}

export default App;
