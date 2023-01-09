import {BrowserRouter , Routes , Route} from "react-router-dom";
import Registered from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import './App.css';

const App = () =>  {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/register" element={<Registered />} />
        < /Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
