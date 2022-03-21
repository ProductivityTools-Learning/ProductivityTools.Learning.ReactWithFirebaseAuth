import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login.js"
import Dashboard from './Dashboard';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
