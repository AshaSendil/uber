import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import {
  validateEmail,
} from "../../utils/validationUtils";
import { STRINGS } from "../../constants/CommonString";
import { useDispatch } from "react-redux";
import { registerUser } from "./loginAndRegister.action";
import Google from "../../assets/Images/google.png";
import terolo from "../../assets/Images/bm.png";
import LinkedIn from "../../assets/Images/linkedin.png";
import Human from "../../assets/Images/humun-app-color.png"
import axios from "axios";
import { BsFillEyeFill } from "react-icons/bs";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [signupData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorStates, setErrorStates] = useState({
    isValidName: false,
    isValidEmail: false,
    isValidPassword: false,
    userExists: false,
  });
  const initialValues = { userName: "", email: "", password: "", retypepassword: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [errors, setErrorMessage] = useState();
  const [userName, setUserName] = useState(false)
  const regex = /^[A-Za-z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  const [email, setEmail] = useState("")
  const [error, setError] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)
  const [formErrors, setFormErrors] = useState({});
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);

  const handleShow = () => {
    setShow(!show);

  }
  const handleShows = () => {
    setShows(!shows);

  }
  const matchInput = (input, allInputs) => {
    return input === allInputs.password ? undefined : 'Passwords do not match';
  }
  const onSignupPress = (e) => {
    e.preventDefault();
    setErrorStates({ ...errorStates, userExists: false });

    if (
      signupData.userName === "" &&
      signupData.email === "" &&
      signupData.password === ""
    ) {
      setErrorStates({
        isValidName: true,
        isValidEmail: true,
        isValidPassword: true,
        userExists: false,
      });
    } else if (signupData.userName === "") {
      setErrorStates({ ...errorStates, isValidName: true });
    } else if (signupData.email === "" || !validateEmail(signupData.email)) {
      setErrorStates({ ...errorStates, isValidEmail: true });
    } else if (signupData.password === "" || signupData.password.length < 8) {
      setErrorStates({ ...errorStates, isValidPassword: true });
    } else {
      setLoading(true);
      setTimeout(() => {
        const data = {
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
        };
        dispatch(registerUser(data, errorStates, setErrorStates, navigate));

        setLoading(false);
      }, 3000);
      navigate("/sign-in");
    }
  };


  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (regex.test(email) === false || userName === "") {
      setUserName(true);
      setError("Please enter valid email address");

    }
    else {
      setError('');
      return true
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
    const data = {
      name: formValue.userName,
      email: formValue.email,
      password: formValue.password,
    };
    dispatch(registerUser(data, errorStates, setErrorStates, navigate));

  setLoading(false);

  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!values.userName) {
      errors.userName = "User name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter the valid Email";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 character";
    } else if (values.password.length > 15) {
      errors.password = "Password cannot exceed more than 15 character";
    }
    if (values.password !== values.retypepassword) {
      errors.retypepassword = "Password is not matching"
     }
    return errors;

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  return (
    <div className="!font-Jakarta">
      {/* <div className="company-name flex items-center ml-4 mt-5">
        <span className="text-primary text-base font-semibold uppercase">Human</span>
      </div> */}
      <img className="md:absolute lg:absolute xl:absolute top-6 left-6 p-6 md:p-0 lg:p-0 xl:p-0" src={Human} alt="Terolo logo" />
      <div className="md:absolute lg:absolute xl:absolute inset-0 items-center justify-center flex flex-col">
        <div className="w-full md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
          <div className="w-full text-center md:text-center lg:text-center xl:text-left mb-5 mt-0 md:my-6 lg:my-6 xl:my-6">
            <text className="text-xl font-semibold text-center text-primary">
              {STRINGS.SIGN_UP}
            </text>
          </div>
          {/* google and linkedIn */}
          <div className="py-2 space-x-6 w-full pt-0">
            <div className="flex px-3 h-10 pr-6 justify-center space-x-3 items-center border transition-colors border-bordercolor rounded-md   cursor-pointer hover:text-primary hover:border-subHover">
              <img src={Google} alt="googleLogo" className="w-6 h-6" />
              <div className="font-semibold text-sm">Google</div>
            </div>
          </div>

          <div className="py-2 space-x-6 w-full pt-0">
            <div className="flex px-3 h-10 pr-6 justify-center space-x-3 items-center border transition-colors border-bordercolor rounded-md   cursor-pointer hover:text-primary hover:border-subHover">
              <img src={LinkedIn} alt="googleLogo" className="w-6 h-6" />
              <div className="font-semibold text-sm">LinkedIn</div>
            </div>
          </div>

          <div className="text-main w-full text-center my-5">
            <p className="w-full border-b-2 border-bordercolor text-sm text-center mt-2.5 mb-5 mx-0 leading-0">
              <span className="text-subHover text-primary font-semibold py-0 px-2.5  bg-white">
                {STRINGS.SIGNUP_WITH_EMAIL}
              </span>
            </p>
          </div>

          <div className="w-full flex-grow">
            <form onSubmit={handleSubmit}>

              <div className="relative mb-4">
                <input type="userName" id="floating_outlined" name="userName"
                  className="h-10 block px-2.5 pb-2.5 pt-2 w-full  text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="User Name"
                  value={formValue.userName}
                  onChange={handleChange} />

                {/* <label for="floating_outlined" className="absolute text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Name</label> */}
                <span className="text-red-500 mt-10">{formErrors.userName}</span>
              </div>

              <div className="relative  mb-4">
                <input type="" id="floating_outlined"
                  name="email"
                  className="h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="Email"
                  value={formValue.email}
                  onChange={handleChange}
                />
                {/* <label for="floating_outlined" className="absolute text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >Email</label> */}
                <span className="text-red-500 mt-10">{formErrors.email}</span>
              </div>

              <div className="relative mb-4">
                <input id="floating_outlined"
                  type={show ? "text" : "password"}
                  name="password"
                  className="h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder="Password"
                  value={formValue.password}
                  onChange={handleChange}
                />
                <BsFillEyeFill onClick={handleShow} className="absolute right-5 top-3 text-lg " />
                {/* <label for="floating_outlined" className="absolute  text-textcolor text-sm font-semibold  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label> */}
                <span className="text-red-500 mt-10">{formErrors.password}</span>

              </div>
              <div className="relative mb-5">
                                <input type={shows ? "text" : "password"} id="floating_outlined"
                                    name="retypepassword"
                                    value={formValue.retypepassword}
                                    onChange={handleChange}
                                    className="h-10 block px-2.5 pb-2.5 pt-2 w-full  text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                    placeholder="Retype Password" />
                                <BsFillEyeFill onClick={handleShows} className="absolute right-5 top-3 text-lg " />
                                <span className="text-red-500 mt-10">{formErrors.retypepassword}</span>
                            </div>

              <div className="text-xs font-normal tracking-wide mt-2.5 mb-1">
                By signing up, I accept the Terolo{" "}
                <span className="text-primary">
                  <a href="/" target="__blank">
                    Terms of Service
                  </a>
                </span>{" "}
                and acknowledge the{" "}
                <span className="text-primary">
                  <a href="/" target="__blank">
                    Privacy policy.
                  </a>
                </span>
              </div>
              <Button
                loading={loading}
                buttonclassName={"mx-0 mt-3 "}
                buttonStyle={
                  "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
                }
                buttonText={"Signup"}

              />
            </form>
            {errorStates.userExists && (
              <div className="items-center justify-center mb-2 flex z-10">
                <p className="text-red-500 font-semibold leading-normal">
                  User with this Email already exists
                </p>
              </div>
            )}
            <div className="items-center justify-center flex z-10">
              <text className="text-sm text-textcolor font-semibold leading-normal mt-6 mb-7">
                Already have an account?{" "}
                <button
                  className="cursor-pointer text-sm font-semibold text-primary transition-colors underline hover:text-primary"
                  type="button"
                  onClick={() => navigate("/sign-in")}                >
                  {"Sign in"}
                </button>
              </text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
