import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './css/style.css';
import Login from './component/login';
import Register from "./component/register";
import Navbar from "./component/navbar";
import Carousel from "./component/base-carousel";

 
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route>
        <Route path='/carousel' element={<Carousel/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
