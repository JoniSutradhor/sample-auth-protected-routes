import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setToken } from "../auth/authSlice";
import axios from "axios";
import AuthServices from "../../services/auth/AuthServices";
import FormInput from "./FormInput";

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    AuthServices.login(data.email, data.password)
      .then((response) => {
        dispatch(setToken(response?.token));
        navigate("/products");
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 bg-slate-500 p-10">
        <p className="text-2xl">Login</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <FormInput
            label="Email"
            name="email"
            register={register}
            error={errors.email}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span className="text-blue-800 font-bold">
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
