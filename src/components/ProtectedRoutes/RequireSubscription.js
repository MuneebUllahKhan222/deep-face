import { Navigate,} from 'react-router-dom';
import { getCookies } from '../../utils';

const RequireSubscription = ({ children}) => {
    const isAuthenticated = getCookies('user');
    if (!isAuthenticated?.lockerSubscription) {
        return <Navigate replace to={'/'}/>
    }
  return children
};

export default RequireSubscription ;