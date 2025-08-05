import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Approutes from './routers/Allroutes'

const App = () => {
  const location = useLocation();

  const hideNavbarPaths = ['/'];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);
  const Register3=['/Register3'];
  const Register3NoNavbar=Register3.includes(location.pathname);
  const LoginR=['/Login'];
  const Login4=LoginR.includes(location.pathname);
  return (
    <div>
      {!shouldHideNavbar &&  !Register3NoNavbar&&!Login4&&<Navbar />}
      <Approutes />
    </div>
  );
};

export default App;
