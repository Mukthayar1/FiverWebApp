import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker, Space } from "antd";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import { signUpUserSchema } from "../../services/AuthService";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/action/auth";


const Signup = () => {

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [checked, SetCheck] = useState(true)

  function onChange(date, dateString) { }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signUp(data, navigation, checked));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="pt-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <NavLink to="/">
              {/* <svg
                className="mb-12 md:mb-7 "
                width="89"
                height="27"
                viewBox="0 0 89 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#083683f2">
                  <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                </g>
                <g fill="#1dbf73">
                  <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                </g>
              </svg> */}
              <img src={'https://firebasestorage.googleapis.com/v0/b/clancers-inc.appspot.com/o/w1.jpeg?alt=media&token=2ee46425-98c8-4a55-af50-27f76eaedf0d '}
                style={{height:200,width:300}}
              />
            </NavLink>
          </div>
        </div>
        <div className=" px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="pt-8 lg:pt-0 md:-mt-3 text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold"
          >
            Sign up
          </h2>
          <div>
            <div>
              <div className="grid grid-cols-2">
                <div className="mr-2">
                  <input
                    className="w-full text-lg py-2 border-b  border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="First name"
                    {...register("firstName")}
                  />

                  <span className="text-red-600 m-0 p-0 text-xs">
                    {errors.firstName?.message}
                  </span>
                </div>
                <div>
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Last name"
                    {...register("lastName")}
                  />
                  <span className="text-red-600 m-0 p-0 text-xs">
                    {errors.lastName?.message}
                  </span>
                </div>
              </div>
              <div className="my-2">
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <span className="text-red-600 m-0 p-0 text-xs">
                  {errors.email?.message}
                </span>
              </div>
              {/* <div className="grid grid-cols-2">
                <div className="mr-2">
                  <input
                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    type="text"
                    placeholder="Phone number"
                    {...register("phone")}
                  />
                  <span className="text-red-600 m-0 p-0 text-xs">
                    {errors.phone?.message}
                  </span>
                </div>

                <div>
                  <Controller
                    control={control}
                    {...register("birthdate")}
                    render={({ field }) => (
                      <Space className="w-full" direction="vertical">
                        <DatePicker
                          format={"DD-MM-YYYY"}
                          onChange={(onChange) => field.onChange(onChange)}
                          selected={field.value}
                          placeholderText="Birthdate"
                          style={{ height: 45 }}
                          className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        />
                      </Space>
                    )}
                  />

                  <span className="text-red-600 m-0 p-0 text-xs">
                    {errors.birthdate?.message}
                  </span>
                </div>
              </div> */}

              {/* <div className="grid grid-cols-2 my-2">
                <div className="mr-2">
                  <div className="text-lg font-medium text-gray-700 tracking-wide">
                    <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type="text"
                      placeholder="Skill"
                      {...register("skill")}
                    />
                    <span className="text-red-600 m-0 p-0 text-xs font-normal">
                      {errors.skill?.message}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-lg font-medium text-gray-700 tracking-wide">
                    <input
                      className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                      type="text"
                      placeholder="Certification"
                      {...register("certification")}
                    />
                    <span className="text-red-600 m-0 p-0 text-xs font-normal">
                      {errors.certification?.message}
                    </span>
                  </div>
                </div>
              </div> */}





              <div>
                <div className="flex justify-between items-center"></div>
                <input
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                />
                <span className="text-red-600 m-0 p-0 text-xs">
                  {errors.password?.message}
                </span>
              </div>


              <FormGroup>
                <FormControlLabel control={
                  <Checkbox checked={checked == true ? true : false}
                    onChange={() => SetCheck(true)} />} label="I am freelancer" />
                <FormControlLabel control={
                  <Checkbox checked={checked != true ? true : false}
                    onChange={() => SetCheck(false)} />} label="I am client" />
              </FormGroup>

              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg text-base"
                >
                  Sign up
                </button>
              </div>
            </div>
            <div className="mt-4 text-sm font-display font-semibold text-gray-700 text-center">
              Already have an account?
              <NavLink
                to="/signin"
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
              >
                Sign in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <svg
            className="w-5/6 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            id="f080dbb7-9b2b-439b-a118-60b91c514f72"
            data-name="Layer 1"
            viewBox="0 0 528.71721 699.76785"
          >
            <title>Login</title>
            <rect y="17.06342" width={444} height={657} fill="#535461" />
            <polygon
              points="323 691.063 0 674.063 0 17.063 323 0.063 323 691.063"
              fill="#7f9cf5"
            />
            <circle cx={296} cy="377.06342" r={4} fill="#535461" />
            <polygon
              points="296 377.66 298.773 382.463 301.545 387.265 296 387.265 290.455 387.265 293.227 382.463 296 377.66"
              fill="#535461"
            />
            <polygon
              points="337 691.063 317.217 691 318 0.063 337 0.063 337 691.063"
              fill="#7f9cf5"
            />
            <g opacity="0.1">
              <polygon
                points="337.217 691 317.217 691 318.217 0 337.217 0 337.217 691"
                fill="#fff"
              />
            </g>
            <circle cx={296} cy="348.06342" r={13} opacity="0.1" />
            <circle cx={296} cy="346.06342" r={13} fill="#535461" />
            <line
              x1="52.81943"
              y1="16.10799"
              x2="52.81943"
              y2="677.15616"
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
              opacity="0.1"
            />
            <line
              x1="109.81943"
              y1="12.10799"
              x2="109.81943"
              y2="679.15616"
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
              opacity="0.1"
            />
            <line
              x1="166.81943"
              y1="9.10799"
              x2="166.81943"
              y2={683}
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
              opacity="0.1"
            />
            <line
              x1="223.81943"
              y1="6.10799"
              x2="223.81943"
              y2="687.15616"
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
              opacity="0.1"
            />
            <line
              x1="280.81943"
              y1="3.10799"
              x2="280.81943"
              y2={688}
              fill="none"
              stroke="#000"
              strokeMiterlimit={10}
              strokeWidth={2}
              opacity="0.1"
            />
            <ellipse
              cx="463.21721"
              cy="95.32341"
              rx="39.5"
              ry={37}
              fill="#2f2e41"
            />
            <path
              d="M683.8586,425.93948l-10,14s-48,10-30,25,44-14,44-14l14-18Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#ffb8b8"
            />
            <path
              d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#7f9cf5"
            />
            <path
              d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z"
              transform="translate(-335.6414 -100.11607)"
              opacity="0.1"
            />
            <path
              d="M775.8586,215.93948s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#ffb8b8"
            />
            <path
              d="M708.8586,455.93948s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#2f2e41"
            />
            <path
              d="M762.8586,722.93948l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#2f2e41"
            />
            <path
              d="M728.8586,696.93948l13,31s5,13,0,16-19,21-10,23a29.29979,29.29979,0,0,0,5.49538.5463,55.56592,55.56592,0,0,0,40.39768-16.43936l8.10694-8.10694s-27.77007-63.94827-27.385-63.47414S728.8586,696.93948,728.8586,696.93948Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#2f2e41"
            />
            <circle cx="465.21721" cy="105.82341" r={34} fill="#ffb8b8" />
            <path
              d="M820.3586,253.43948l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S820.3586,253.43948,820.3586,253.43948Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#7f9cf5"
            />
            <path
              d="M775.8586,448.93948l-13,8s-50,34-24,40,41-24,41-24l10-12Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#ffb8b8"
            />
            <path
              d="M849.8586,301.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z"
              transform="translate(-335.6414 -100.11607)"
              opacity="0.1"
            />
            <path
              d="M853.8586,298.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#7f9cf5"
            />
            <path
              d="M786.797,157.64461s-11.5575-4.20273-27.31774,4.72807l8.40546,2.10136s-12.60819,1.05068-14.18421,17.8616h5.77875s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82943,13.65887,1.576-6.82944,3.15205,1.05069,2.10137-11.03217s5.25341,7.88012,9.45614,8.40546V195.2065s11.5575,13.13352,15.23489,12.60818l-5.25341-7.35477,7.35477,1.576-3.152-5.25341,18.91228,5.25341-4.20273-5.25341,13.13352,4.20273,6.3041,2.6267s8.9308-20.4883-3.67739-34.67251S798.61712,151.60318,786.797,157.64461Z"
              transform="translate(-335.6414 -100.11607)"
              fill="#2f2e41"
            />
          </svg>
        </div>
      </div>
    </form>
  );
};

export default Signup;
