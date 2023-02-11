import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import { Register, Login, Main } from './pages';
import { ProtectedRoute } from './utils/ProtectedRoute';

const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
