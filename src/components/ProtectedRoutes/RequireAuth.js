import { Navigate,} from 'react-router-dom';
import { getCookies } from '../../utils';

const RequireAuth = ({ children}) => {
    const isAuthenticated = getCookies('user');
    if (!isAuthenticated) {
        return <Navigate replace to={'/signin'}/>
    }
  return children
};

export default RequireAuth;