import React, { useState } from 'react';
import { MdClose, MdSmartphone } from 'react-icons/md';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
  EnterOtpDiv,
  EnterOtpForm,
  EnterOtpFormInput,
  EnterOtpFormInputDiv,
  EnterOtpFormInputMainDiv,
  EnterOtpFormInputVerifyButton,
  EnterOtpheader,
  LoginContainer,
  LoginHeader,
  LoginHeaderTitle,
  MobileOTPBoxBottomMessage,
  MobileOTPBoxBottomMessageDes,
  MobileOTPBoxBottomMessageLink,
  MobileOTPBoxBottomMessageLinkDiv,
  MobileOTPBoxBottomMessageTitle,
  MobileOTPBoxContainer,
  MobileOTPBoxFooter,
  MobileOTPBoxFooterCheckbox,
  MobileOTPBoxFooterCheckboxLabel,
  MobileOTPBoxFooterLink,
  MobileOTPBoxHeader,
  MobileOTPBoxHeaderTitle,
  MobileOTPForm,
  MobileOTPFormBottomHR,
  MobileOTPFormendNum,
  MobileOTPFormInput,
  MobileOTPFormInputDiv,
  MobileOTPFormInputEnd,
  MobileOTPFormInputEndInput,
  MobileOTPFormInputMiddle,
  MobileOTPFormMessage,
  MobileOTPFormMessageDiv,
  MobileOTPFormstartDiv,
} from './Login.style';

const LoginOtp = () => {
  const navigate = useNavigate();
  const [joinMobile, setJoinMobile] = useState('');
  const [joinOtp, setJoinOtp] = useState('');
  const [otp, setOtp] = useState('');
  const {
    mobile1,
    mobile2,
    mobile3,
    mobile4,
    mobile5,
    mobile6,
    mobile7,
    mobile8,
    mobile9,
    mobile10,
  } = joinMobile;
  const onInputChange = (e) => {
    setJoinMobile({ ...joinMobile, [e.target.name]: e.target.value });
  };
  const sendOtptoUser = async (e) => {
    e.preventDefault();
    const mobileNumber =
      joinMobile.mobile1 +
      joinMobile.mobile2 +
      joinMobile.mobile3 +
      joinMobile.mobile4 +
      joinMobile.mobile5 +
      joinMobile.mobile6 +
      joinMobile.mobile7 +
      joinMobile.mobile8 +
      joinMobile.mobile9 +
      joinMobile.mobile10;
    try {
      const res = await axios.post(
        'http://localhost:8080/api/user/sendOTP',
        mobileNumber,
      );
      const myJSON = JSON.stringify(mobileNumber);
      localStorage.setItem('mobile', myJSON);
      const otpres = res.data.message.split(' ')[3];
      setOtp(otpres);
      alert(otpres);
    } catch (error) {
      console.log(error);
    }
  };

  const { otp1, otp2, otp3, otp4 } = joinOtp;
  const onInputOtpChange = (e) => {
    setJoinOtp({ ...joinOtp, [e.target.name]: e.target.value });
  };
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const oOtp = joinOtp.otp1 + joinOtp.otp2 + joinOtp.otp3 + joinOtp.otp4;
    if (oOtp === otp) {
      alert('OTP verified');
      navigate('/register');
    } else {
      alert('OTP not verified');
    }
  };
  console.log(otp);
  return (
    <LoginContainer>
      <LoginHeader>
        <Link to={'/'}>
          <MdClose />
        </Link>
        <LoginHeaderTitle>Login/Sign Up</LoginHeaderTitle>
      </LoginHeader>
      <MobileOTPBoxContainer>
        <MobileOTPBoxHeader>
          <MdSmartphone style={{ height: '30px', width: '30px' }} />
          <MobileOTPBoxHeaderTitle>
            Login/Sign Up Using Phone
          </MobileOTPBoxHeaderTitle>
        </MobileOTPBoxHeader>
        <MobileOTPForm onSubmit={sendOtptoUser}>
          <MobileOTPFormstartDiv>
            <MobileOTPFormendNum>+91</MobileOTPFormendNum>
          </MobileOTPFormstartDiv>
          <MobileOTPFormInputMiddle>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile1'
                value={mobile1}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>

            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile2'
                value={mobile2}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile3'
                value={mobile3}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile4'
                value={mobile4}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile5'
                value={mobile5}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile6'
                value={mobile6}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile7'
                value={mobile7}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile8'
                value={mobile8}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile9'
                value={mobile9}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
            <MobileOTPFormInputDiv>
              <MobileOTPFormInput
                autoComplete='off'
                type='tel'
                maxLength='1'
                name='mobile10'
                value={mobile10}
                onChange={(e) => onInputChange(e)}
              />
            </MobileOTPFormInputDiv>
          </MobileOTPFormInputMiddle>
          <MobileOTPFormInputEnd>
            <MobileOTPFormInputEndInput type='submit' value='Request OTP' />
          </MobileOTPFormInputEnd>
        </MobileOTPForm>
        <MobileOTPFormMessageDiv>
          <MobileOTPFormMessage>
            Enter your phone number to request an OTP
          </MobileOTPFormMessage>
        </MobileOTPFormMessageDiv>
        <MobileOTPFormBottomHR />
        <EnterOtpDiv>
          <EnterOtpheader>
            Enter the 4 digit OTP received on your phone.
          </EnterOtpheader>
          <EnterOtpForm onSubmit={handleVerifyOtp}>
            <EnterOtpFormInputMainDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput
                  type='tel'
                  maxLength='1'
                  name='otp1'
                  value={otp1}
                  onChange={(e) => onInputOtpChange(e)}
                />
              </EnterOtpFormInputDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput
                  type='tel'
                  maxLength='1'
                  name='otp2'
                  value={otp2}
                  onChange={(e) => onInputOtpChange(e)}
                />
              </EnterOtpFormInputDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput
                  type='tel'
                  maxLength='1'
                  name='otp3'
                  value={otp3}
                  onChange={(e) => onInputOtpChange(e)}
                />
              </EnterOtpFormInputDiv>
              <EnterOtpFormInputDiv>
                <EnterOtpFormInput
                  type='tel'
                  maxLength='1'
                  name='otp4'
                  value={otp4}
                  onChange={(e) => onInputOtpChange(e)}
                />
              </EnterOtpFormInputDiv>
            </EnterOtpFormInputMainDiv>
            <EnterOtpFormInputVerifyButton type='submit' value='Verify OTP' />
          </EnterOtpForm>
        </EnterOtpDiv>
        <MobileOTPBoxFooter>
          <MobileOTPBoxFooterCheckbox type='checkbox' />
          <MobileOTPBoxFooterCheckboxLabel>
            Get Important Updates on Whatsapp.
          </MobileOTPBoxFooterCheckboxLabel>
          <MobileOTPBoxFooterLink>Terms and Conditions</MobileOTPBoxFooterLink>
        </MobileOTPBoxFooter>
      </MobileOTPBoxContainer>
      <MobileOTPBoxBottomMessage>
        <MobileOTPBoxBottomMessageTitle>
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and we'll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </MobileOTPBoxBottomMessageTitle>
        <MobileOTPBoxBottomMessageLinkDiv>
          <MobileOTPBoxBottomMessageDes fs='12px'>
            By Signing up or logging in, you agree to our
          </MobileOTPBoxBottomMessageDes>
          <MobileOTPBoxBottomMessageLink fs='14px'>
            {' '}
            Terms and Conditions
          </MobileOTPBoxBottomMessageLink>
        </MobileOTPBoxBottomMessageLinkDiv>
      </MobileOTPBoxBottomMessage>
    </LoginContainer>
  );
};

export default LoginOtp;
