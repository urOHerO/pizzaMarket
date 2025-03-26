import { Link, useNavigate } from "react-router";
import Button from "../../Button/Button";
import Headling from "../../Headling/Headling";
import Input from "../../Input/Input";
import s from "./Login.module.css";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../../helpers/API";
import { LoginResponce } from "../../../interfaces/auth.interface";

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

const Login = () => {
  const [error, setError] = useState<string | null>();
  const navigate = useNavigate();

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    const target = event.target as typeof event.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponce>(`${PREFIX}auth/login`, {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem('jwt', data.token)
      navigate('/')
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div className={s.login}>
      <Headling>Вход</Headling>
      {error && <div className={s.error}>{error}</div>}
      <form className={s.form} onSubmit={submit}>
        <div className={s.field}>
          <label htmlFor="email">Ваш email</label>
          <Input id="email" name="email" placeholder="Email" />
        </div>
        <div className={s.field}>
          <label htmlFor="password">Ваш пароль</label>
          <Input
            id="password"
            name="password"
            placeholder="Пароль"
            type="password"
          />
        </div>
        <Button appearence="big">Вход</Button>
      </form>
      <div className={s.links}>
        <div>Нет аккаунта?</div>
        <Link to="/auth/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default Login;
