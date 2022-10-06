import axios from "axios";
import React from "react";
import { MdClose, MdSmartphone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LoginContainer,
  LoginHeader,
  LoginHeaderTitle,
  MobileOTPBoxBottomMessage,
  MobileOTPBoxBottomMessageDes,
  MobileOTPBoxBottomMessageLink,
  MobileOTPBoxBottomMessageLinkDiv,
  MobileOTPBoxBottomMessageTitle,
  MobileOTPBoxContainer,
  MobileOTPBoxHeader,
  MobileOTPBoxHeaderTitle,
  MobileOTPFormBottomHR,
  RegisterPageForm,
  RegisterPageFormButton,
  RegisterPageFormEInput,
  RegisterPageFormEInputDiv,
  RegisterPageFormFLInput,
  RegisterPageFormFLInputDiv,
  RegisterPageFormTitle,
  RegisterPageGoogle,
  RegisterPageGoogleImg,
} from "./Login.style";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/userReducer";
import { ToastContainer, toast } from "react-toastify";
const LoginDetails = () => {
  const navigate = useNavigate();
  let mobileNumber = localStorage.getItem("mobile");
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const dispatch = useDispatch();
  const handleRegisterUser = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("http://localhost:8080/api/user/register", {
        email,
        firstName,
        lastName,
        mobileNumber,
      });
      dispatch(loginSuccess(res.data));
      toast.success("Registered Successfully");
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
      toast.error("Something went wrong");
    }
  };
  return (
    <LoginContainer>
      <LoginHeader>
        <MdClose />
        <LoginHeaderTitle>Login/Sign Up</LoginHeaderTitle>
      </LoginHeader>
      <MobileOTPBoxContainer>
        <MobileOTPBoxHeader>
          <MdSmartphone style={{ height: "30px", width: "30px" }} />
          <MobileOTPBoxHeaderTitle>Welcome!</MobileOTPBoxHeaderTitle>
        </MobileOTPBoxHeader>
        <MobileOTPBoxBottomMessageLinkDiv mt="40px" gap="10px">
          <MobileOTPBoxBottomMessageDes fs="16px">
            Phone Number Verified - +91 {`${mobileNumber}`}
          </MobileOTPBoxBottomMessageDes>
          <MobileOTPBoxBottomMessageLink fs="16px">
            (Terms and Conditions)
          </MobileOTPBoxBottomMessageLink>
        </MobileOTPBoxBottomMessageLinkDiv>

        <RegisterPageGoogle>
          <RegisterPageGoogleImg src="https://in.sugarcosmetics.com/desc-images/google.png" />
        </RegisterPageGoogle>
        <MobileOTPFormBottomHR />
        <RegisterPageForm onSubmit={handleRegisterUser}>
          <RegisterPageFormTitle>
            Or Enter Account Details
          </RegisterPageFormTitle>
          <RegisterPageFormFLInputDiv>
            <RegisterPageFormFLInput
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <RegisterPageFormFLInput
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </RegisterPageFormFLInputDiv>
          <RegisterPageFormEInputDiv>
            <RegisterPageFormEInput
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </RegisterPageFormEInputDiv>
          <RegisterPageFormButton type="submit" value="Save and Continue" />
        </RegisterPageForm>
      </MobileOTPBoxContainer>
      <MobileOTPBoxBottomMessage>
        <MobileOTPBoxBottomMessageTitle>
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and we'll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </MobileOTPBoxBottomMessageTitle>
        <MobileOTPBoxBottomMessageLinkDiv>
          <MobileOTPBoxBottomMessageDes fs="12px">
            By Signing up or logging in, you agree to our
          </MobileOTPBoxBottomMessageDes>
          <MobileOTPBoxBottomMessageLink fs="14px">
            Terms and Conditions
          </MobileOTPBoxBottomMessageLink>
        </MobileOTPBoxBottomMessageLinkDiv>
      </MobileOTPBoxBottomMessage>
      <ToastContainer />
    </LoginContainer>
  );
};

export default LoginDetails;
