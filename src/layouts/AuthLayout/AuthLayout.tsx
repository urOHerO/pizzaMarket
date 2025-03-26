import { Outlet } from "react-router";
import s from './AuthLayout.module.css'

const AuthLayout = () => {
  return (
    <div className={s.layout}>
      <div className={s.logo}>
        <img src="src/assets/logo(2).png" alt="Логотип компании" width='350px' height='400px'/>
      </div>
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
