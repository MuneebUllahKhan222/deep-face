import { Navigate,} from 'react-router-dom';
import { getCookies } from '../../utils';

const RequireNoAuth = ({ children}) => {
    const isAuthenticated = getCookies('user');
    if (isAuthenticated) {
        return <Navigate replace to={'/'}/>
    }
  return children
};

export default RequireNoAuth;