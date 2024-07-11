import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Layout from './components/layout/Layout';
import Store from './views/Store';
import Products from './views/Products';

function App() {
  return (
    <div className="container-fluid p-0 vh-100">
      {/* Quitar vh-100 si se malogra para movil */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Login} />

          <Route exact path='/Store' Component={Layout}>
            <Route index Component={Store} />
            <Route exact path="Products" Component={Products} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
