import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Button from "../../components/button";
import { BUTTONS, STRINGS } from "../../constants/CommonString";
import terolo from "../../assets/Images/bm.png";
import { BsFillEyeFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { loginUser, resetPassword } from "./loginAndRegister.action";

const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const tokenParam = window.location.href.split('?')[1]
    console.log('tokenParam', tokenParam);
    const initialValues = { password: "", retypepassword: "" };
    const [formValue, setFormValue] = useState(initialValues);
    const [show, setShow] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [shows, setShows] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }
    const handleShows = () => {
        console.log("set shows", setShows)
        setShows(!shows);
        console.log("set shows", setShows)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }
    const errors = {};
    const params = useParams();
    console.log("params===", params);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValue));
        setIsSubmit(true);
        const data = {
            password: formValue.password
        };
            dispatch(resetPassword(data, navigate,tokenParam));  
    }

    const validate = (values) => {
       
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
        //   else{
        //     navigate("/sign-up")
        //   }
        return errors;
        }
        
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);

    // const [newPass, setNewPass] = useState("");
    // const [dataIsCorrect, setDataIsCorrect] = useState(false);
    // const [errors, setErrors] = useState({});
    // const [resetSuccessful, setResetSuccessful] = useState(false)
    // const [response, setResponse] = useState([])
    // const [errorStates, setErrorStates] = useState(false);

    // let { resetLink } = useParams();
    // let { id } = useParams()
    // const handleformsubmit = (event) => {
    //     event.preventDefault();
    //     setErrors(Validation(newPass));
    //     setDataIsCorrect(true);
    // };
    // const handleClick = async (event) => {
    //     event.preventDefault();
    //     const data = {
    //         newPass,
    //         resetLink,
    //         id
    //     }
    //     console.log('process.env.REACT_APP_API_URL', process.env.REACT_APP_API_URL)
    //     const resetPassword = await put(`${process.env.REACT_APP_API_URL}`, "pub/reset_password", data)
    //     setResponse(resetPassword.response.status)
    //     if (resetPassword.response.status == 200) {
    //         setResetSuccessful(true);
    //         setTimeout(() => {
    //             navigate("/sign-in");
    //         }, "2000")
    //     } else {
    //         setResetSuccessful(false);
    //     }
    // }
    // const [loading] = useState(false);

    return (

        <div className="!font-Jakarta">
            <img className="md:absolute lg:absolute xl:absolute top-6 left-6 p-6 md:p-0 lg:p-0 xl:p-0" src={terolo} alt="Terolo logo" />
            <div className="absolute md:absolute lg:absolute xl:absolute inset-0 items-center justify-center flex flex-col">
                <div className="w-full md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
                    <div className="w-full text-center md:text-center lg:text-center xl:text-left mb-1 mt-0 md:mt-6 md:mb-1 lg:mt-6 lg:mb-1 xl:mt-6 xl:mb-1">
                        <text className="text-xl font-semibold text-center text-primary">
                            {STRINGS.RESET_YOUR_PASSWORD}
                        </text>
                    </div>
                    <div className="text-center md:text-center lg:text-center xl:text-left text-textcolor font-semibold text-normal w-full ">
                        {STRINGS.ENTER_NEW_PASSWORD}
                    </div>

                    <div className="w-full flex-grow">
                        <form onSubmit={handleSubmit}>

                            <div className="relative mb-5 mt-5">
                                <input type={show ? "text" : "password"} id="floating_outlined"
                                    name="password"
                                    value={formValue.password}
                                    onChange={handleChange}
                                    className="h-10 block px-2.5 pb-2.5 pt-2 w-full  text-textcolor text-sm font-normal bg-transparent rounded-md border border-bordercolor appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                                    placeholder="Password" />
                                <BsFillEyeFill onClick={handleShow} className="absolute right-5 top-3 text-lg " />
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
                            <Button
                                buttonclass={"mx-0 mt-10"}
                                // loading={loading}
                                buttonStyle={
                                    "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white"
                                }
                                buttonText={BUTTONS.CONFIRM}
                            />
                            {/* {errorStates.incorrectCred && (
                                <div className="items-center mb-3 justify-center flex z-10">
                                    <p className="text-red-500 font-semibold leading-normal">
                                        User with this Email ID does not exist
                                    </p>
                                </div>
                            )} */}
                            <div className="items-center justify-center flex z-10">
                                <text className="text-sm text-textcolor font-semibold leading-normal mt-6 mb-7">
                                    Remember password?{" "}
                                    <span
                                        className="cursor-pointer text-sm font-semibold text-primary transition-colors underline hover:text-primary"
                                        onClick={() => navigate("/sign-in")}
                                    >
                                        {"Sign in"}
                                    </span>
                                </text>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>

    );
}
export default ResetPassword;