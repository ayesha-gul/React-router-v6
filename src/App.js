
import './App.css'; 
import { Home } from './Home';
import { About } from './About';
import { Route,  Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
<Routes >
  <Route path="/" element={<Home/>}>Home </Route>
  <Route path="about" element={<About/>}>About</Route>
</Routes>
    </div>
  );
} 

export default App;
