import { NavLink } from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


const Welcome = () => {
   return (
  <div>Welcome, my friend! Do I know you?</div>
  );
};

export const WelcomeWithRedirect = withAuthRedirect(Welcome)