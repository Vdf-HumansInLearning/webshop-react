import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import CartPage from './pages/CartPage';
import UsersPage from './pages/UsersPage';
import StorePage from './pages/StorePage';
import DetailsPage from './pages/DetailsPage';
import ProfilePage from './pages/ProfilePage';
import OrdersPage from './pages/OrdersPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/auth/login" element={<LoginPage />}/>
        <Route path="/auth/register" element={<RegisterPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/users" element={<UsersPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/phones" element={<StorePage />} />
        <Route path="/phones/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
