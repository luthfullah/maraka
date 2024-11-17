import { Navigate } from 'react-router-dom';

function ProtectedRoute({ token, element }) {
  return token ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
