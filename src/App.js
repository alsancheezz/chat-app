import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route index element={<Login />} />
          <Route path='home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
