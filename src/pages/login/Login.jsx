import React, { useEffect, useState } from 'react'
import { BUTTONS, STRINGS } from '../../constants/CommonString'
import { useNavigate } from 'react-router-dom';
import Google from "../../assets/Images/google.png";
import LinkedIn from "../../assets/Images/linkedin.png"
import { BsFillEyeFill } from "react-icons/bs";
import Button from "../../components/button";

export default function LoginPage() {
    const initialValues = { userName: "", email: "", password: "" };
    const [formValue, setFormValue] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [show, setShow] = useState(false);
    const [loading] = useState(false);
    const navigate = useNavigate()

    const [errorStates] = useState({
        isValidEmail: false,
        isValidPassword: false,
        incorrectCred: false,
      });
    
    const handleShow = () => {
        setShow(!show);
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
        navigate('/home')
       
    
      }

      const validate = (values) => {
        const errors = {};
        const regex = /^[A-Za-z0-9._%+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
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
        } else {
         
        }
        return errors;
        }
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
      }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
      }, [formErrors]);

  return (
    <div className="!font-Jakarta">
   
    <div className="absolute md:absolute lg:absolute xl:absolute inset-0 items-center justify-center flex flex-col">
      <div className="w-full md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative" >
        <div className="w-full text-center md:text-center lg:text-center xl:text-left mb-5 mt-0 md:my-6 lg:my-6 xl:my-6">
          <text className="text-xl font-semibold text-center text-primary">
            {STRINGS.SIGN_IN}
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
              {STRINGS.SIGNIN_WITH_EMAIL}
            </span>
          </p>
        </div>
        <div className="w-full flex-grow">
          <form onSubmit={handleSubmit}>
            <div className="relative  mb-10">
              <input type="email" id="floating_outlined"
                name="email"
                autoComplete="off"
                className="h-10 block px-2.5 pb-2.5 pt-2 w-full text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Email "
                value={formValue.email}
                onChange={handleChange} />
             
              <span className="text-red-500 mt-10">{formErrors.email}</span>
            </div>

            <div className="relative">
              <input type={show ? "text" : "password"} id="floating_outlined"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                className="h-10 block px-2.5 pb-2.5 pt-2 w-full  text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                placeholder="Password" />
              <BsFillEyeFill onClick={handleShow} className="absolute right-5 top-3 text-lg " />
              <span className="text-red-500 mt-10">{formErrors.password}</span>
            </div>


            <div className="flex justify-between my-6">
              <div className="form-check">
                <input
                  className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label inline-block text-sm text-textcolor pt-0.5 font-semibold"
                  for="flexCheckDefault"
                >
                  {STRINGS.REMEMBER_ME}
                </label>
              </div>

              <div className="forgot-txt pt-1.5 text-primary"><p className="cursor-pointer text-xs font-semibold" onClick={() => navigate("/forgot-password")}>Forgot Password?</p></div>
            </div>

            <Button
              loading={loading}
              buttonclassName={"mx-0"}
              buttonStyle={
                "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
              }
              buttonText={BUTTONS.SIGN_IN}
            />
          </form>
        </div>
        {errorStates.incorrectCred && (
          <div className="items-center -mt-3 justify-center flex z-10">
            <p className="text-red-500 font-semibold leading-normal">
              Invalid Email ID or Password
            </p>
          </div>
        )}
        <div className="items-center justify-center flex z-10">
          <text className="text-sm text-textcolor font-semibold leading-normal mt-6 mb-7">
            Don't have an account?{" "}
            <span
              className="cursor-pointer text-sm font-semibold text-primary transition-colors underline hover:text-primary"
              onClick={() => navigate("/sign-up")}
            >
              {"Signup for free"}
            </span>
          </text>
        </div>
      </div>

      {/* <div className="footer-txt py-5">
          <p className="text-textcolor">This site is protected by reCAPTCHA and the Google <span className="text-primary underline">Privacy Policy</span> and <span className="text-primary underline">Terms of Service</span> apply.</p>
        </div> */}
    </div>
  </div>  )
}
