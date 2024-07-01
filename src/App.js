import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Layout from './components/layout/Layout';
import Home from './views/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Login} />

          <Route exact path='/Home' Component={Layout}>
            <Route index Component={Home} />
            {/* <Route exact path="Test" Component={Test}/> */}
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
