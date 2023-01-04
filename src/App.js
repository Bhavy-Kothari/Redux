import {BrowserRouter , Routes , Route} from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import './App.css';

const App = () =>  {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
