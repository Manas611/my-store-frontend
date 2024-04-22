import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home';
import Available from './pages/Available';
import Sell from './pages/Sell';
import TopNav from './pages/TopNav';
import Navbar from './pages/Navbar';



function App() {
  return (
    <div className=''>
      
      <Navbar />


        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/buy' element={<Available />}></Route>
            <Route path='/sell' element={<Sell />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <Navbar/> */}
      <TopNav />
    </div>
  );
}

export default App;
