import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 40%;
  margin: 0 auto;
  background-image: url("https://in.sugarcosmetics.com/Login_bg.svg");
  box-shadow: 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 100;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  padding: 10px 20px;
  transition: width 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  color: #fff;
`;
export const LoginHeaderClose = styled.div``;
export const LoginHeaderTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

// Mobile OTP Box

export const MobileOTPBoxContainer = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  padding: 20px;
  margin: 20px 0;
`;
export const MobileOTPBoxHeader = styled.div`
  display: flex;
  gap: 15px;
  text-align: center;
  align-items: center;
`;
export const MobileOTPBoxHeaderTitle = styled.p`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.87);
  margin-top: -5px;
`;

export const MobileOTPForm = styled.form`
  display: flex;
  gap: 20px;
  align-items: center;
  text-align: center;
  margin: 30px 0 10px 0;
`;
export const MobileOTPFormstartDiv = styled.div``;
export const MobileOTPFormendNum = styled.h2`
  text-align: center;
  align-items: center;
`;

export const MobileOTPFormInputMiddle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 10px;
`;
export const MobileOTPFormInputDiv = styled.div``;
export const MobileOTPFormInput = styled.input`
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);
  text-align: center;
  align-items: center;
  width: 25px;
  height: 40px;
  margin: auto;
`;

export const MobileOTPFormInputEnd = styled.div``;
export const MobileOTPFormInputEndInput = styled.input`
  background-color: #333;
  color: white;
  width: 130px;
  font-size: 14px;
  border: none;
  padding: 10px;
  font-weight: 600;
`;

export const MobileOTPFormMessageDiv = styled.div`
  text-align: left;
  margin: 0 0 10px 10px;
  width: 100%;
`;
export const MobileOTPFormMessage = styled.p`
  color: #fc2779;
  font-size: 14px;
  font-weight: 500;
`;

export const MobileOTPFormBottomHR = styled.hr`
  display: block;
  width: 100%;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
  border-style: inset;
  border-width: 1px;
`;

export const EnterOtpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  gap: 10px;
  color: rgba(0, 0, 0, 0.87);
  margin: 20px 0;
`;
export const EnterOtpheader = styled.p`
  font-size: 14px;
`;

export const EnterOtpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  text-align: center;
  justify-content: flex-start;
`;
export const EnterOtpFormInputMainDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  text-align: center;
  justify-content: flex-start;
`;
export const EnterOtpFormInputDiv = styled.div``;
export const EnterOtpFormInput = styled.input`
  outline: none;
  width: 30px;
  height: 40px;
  border: 1px solid rgba(118, 118, 118, 0.3);
  text-align: center;
  align-items: center;
`;

export const EnterOtpFormInputVerifyButton = styled.input`
  color: #fff;
  width: 180px;
  margin-top: 20px;
  font-size: 14px;
  border: none;
  padding: 10px;
  background-color: #fdaac9;
`;

export const MobileOTPBoxFooter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  text-align: center;
`;
export const MobileOTPBoxFooterCheckbox = styled.input`
  accent-color: #fc2779;
  width: 20px;
  height: 15px;
`;

export const MobileOTPBoxFooterCheckboxLabel = styled.p`
  font-size: 14px;
  color: #000000de;
`;
export const MobileOTPBoxFooterLink = styled.p`
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);
  color: rgba(0, 0, 0, 0.87);
`;

// Mobile OTP Box Bottom Message

export const MobileOTPBoxBottomMessage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const MobileOTPBoxBottomMessageTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;
`;
export const MobileOTPBoxBottomMessageLinkDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: ${(props) => (props.mt ? props.mt : "0")};
  gap: ${(props) => (props.gap ? props.gap : "0")};
`;
export const MobileOTPBoxBottomMessageDes = styled.p`
  font-size: ${(props) => props.fs};
`;
export const MobileOTPBoxBottomMessageLink = styled.p`
  border-bottom: 1px solid rgba(0, 0, 0, 0.87);
  color: rgba(0, 0, 0, 0.87);
  font-size: ${(props) => props.fs};
`;
//Register Page Style

export const RegisterPageGoogle = styled.div`
  align-content: left;
  margin: 10px 0;
`;
export const RegisterPageGoogleImg = styled.img`
  width: 160px;
  height: 40px;
`;

export const RegisterPageForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const RegisterPageFormTitle = styled.p`
  font-size: 16px;
`;

export const RegisterPageFormFLInputDiv = styled.div`
  display: flex;
  gap: 10px;
`;
export const RegisterPageFormFLInput = styled.input`
  background-color: #f1f1f1;
  outline: none;
  border: none;
  padding: 8px 8px 8px 15px;
  margin-right: 10px;
  width: 200px;
`;
export const RegisterPageFormEInputDiv = styled.div``;
export const RegisterPageFormEInput = styled.input`
  outline: none;
  border: none;
  margin-top: 10px;
  width: 420px;
  background-color: #f1f1f1;
  padding: 8px 8px 8px 15px;
  margin-right: 10px;
`;

export const RegisterPageFormButton = styled.input`
  background-color: #fc2779;
  padding: 10px;
  color: #fff;
  outline: none;
  border: none;
  margin-top: 10px;
  width: 420px;
`;
