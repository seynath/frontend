import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


