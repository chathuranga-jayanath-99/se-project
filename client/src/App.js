import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/auth/Login';

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="login" element={<Login/>}/>
        </Routes>        
      </Router>
   
  );
}

export default App;
