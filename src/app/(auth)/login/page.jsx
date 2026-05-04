'use client';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

  const [isShowPassword, setIsShowPassword] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async(data) => {
    console.log(data);
    const { email, password } = data;

    const { data : res, error } = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
});

if(error){
  alert(error.message);
}
if(res){
  alert("Login Successfull");
}
  };

 const handleGitHubSignIn = async () => {
   const data = await authClient.signIn.social({
     provider: "github",
   });
  console.log(data);
}

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-200/60 rounded-[2rem] p-4 sm:p-6 transition-all duration-300 hover:shadow-3xl animate__animated animate__fadeInUp animate__faster">
        <div className="card-body px-4 py-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-base-content">
              Welcome Back
            </h1>
            <p className="text-base-content/60 mt-2 text-sm">
              Please enter your details to sign in.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset w-full p-0 border-0 bg-transparent">
              {/* Email */}
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`input input-bordered w-full focus:input-primary transition-all duration-300 ${
                  errors.email ? "input-error" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-error text-xs mt-1">
                  {errors.email.message}
                </p>
              )}

              {/* Password */}
              <label className="label mt-4">
                <span className="label-text font-semibold">Password</span>
              </label>

              <div className="relative w-full">
                <input
                  type={isShowPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`input input-bordered w-full pr-10 focus:input-primary transition-all duration-300 ${
                    errors.password ? "input-error" : ""
                  }`}
                  placeholder="Enter your password"
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-base-content/50 hover:text-base-content transition-colors"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {errors.password && (
                <p className="text-error text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="flex justify-end mt-2 mb-6">
                <a
                  href="#"
                  className="text-xs text-base-content/70 hover:text-primary transition-colors font-medium"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 rounded-xl"
              >
                Sign In
              </button>
            </fieldset>
          </form>

          <div className="divider text-xs text-base-content/50 my-8 font-medium">
            OR CONTINUE WITH
          </div>

          <div className="flex flex-col gap-3.5">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline bg-base-100 hover:bg-base-200 hover:text-base-content border-base-300 transition-all duration-300 hover:-translate-y-0.5 rounded-xl"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="transparent"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <button
              onClick={handleGitHubSignIn}
              className="btn btn-neutral shadow-md transition-all duration-300 hover:-translate-y-0.5 rounded-xl"
            >
              <svg
                aria-label="GitHub logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Login with GitHub
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-base-content/70">
              Don&#39;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-primary hover:text-primary-focus hover:underline transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;