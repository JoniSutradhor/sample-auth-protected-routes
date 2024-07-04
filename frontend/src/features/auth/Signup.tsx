import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import AuthServices from "../../services/auth/AuthServices";
import FormInput from "./FormInput";

interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password") as unknown as string, undefined],
      "Passwords must match"
    )
    .required("Confirm Password is required"),
});

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: SignupFormInputs) => {
    AuthServices.signup(data.email, data.password)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Signup failed", error);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2 bg-slate-500 p-10">
        <p className="text-2xl">Sign Up</p>
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
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <span className="text-blue-800 font-bold">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
