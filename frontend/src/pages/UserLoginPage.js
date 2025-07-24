import React, { useState, useEffect } from 'react';
import './UserLoginPage.css'; // Make sure this CSS file is in the same directory
import loginBg from '../assets/login_bg.png'; // Assuming you have a background image
import { Link } from 'react-router-dom';

const UserLoginPage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']); // For 4-digit OTP
  const [showOtpFields, setShowOtpFields] = useState(false); // Changed from showOtpField
  const [timer, setTimer] = useState(60); // Timer for 60 seconds (01.00)
  const [timerActive, setTimerActive] = useState(false);

  // Effect for OTP timer countdown
  useEffect(() => {
    let countdown;
    if (timerActive && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
      clearInterval(countdown); // Ensure timer stops at 0
    }
    return () => clearInterval(countdown); // Cleanup on unmount or timer stop
  }, [timerActive, timer]);

  const handleEmailOrMobileChange = (e) => {
    setEmailOrMobile(e.target.value);
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) { // Only allow single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if a digit is entered and not the last input
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSendOtp = () => {
    // Implement OTP sending logic here
    console.log('Sending OTP to:', emailOrMobile);
    setShowOtpFields(true);
    setTimer(60); // Reset timer to 60 seconds
    setTimerActive(true);
  };

  const handleVerifyOtp = () => {
    // Implement OTP verification logic here
    console.log('Verifying OTP:', otp.join('')); // Join the array to get the full OTP
    // Redirect or show success message
  };

  return (
    <div className="login-page-container">
      <img className="login-background-image" src={loginBg} alt="Login Background" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1440x981/E0E0E0/000000?text=Background"; }} />
      <div className="login-card">
        <h1 className="login-title font-ADLaM_Display">Login</h1>

        <div className="input-group">
          {/* <label htmlFor="emailMobile" className="input-label font-ADLaM_Display">Enter Email ID / Mobile Number</label> */}
          <input
            type="text"
            id="emailMobile"
            className="login-input"
            placeholder="Email ID / Mobile Number"
            value={emailOrMobile}
            onChange={handleEmailOrMobileChange}
          />
        </div>

        <button className="send-otp-button" onClick={handleSendOtp} disabled={timerActive}>
          <span className="button-text font-ADLaM_Display">Send OTP</span>
        </button>

        {showOtpFields && (
          <>
            <div className="otp-input-section"> {/* New wrapper for OTP inputs and timer */}
              <label htmlFor="otp-input-0" className="otp-label font-Arimo_Hebrew_Subset_Italic">Enter OTP</label>
              <div className="otp-inputs-wrapper">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength="1"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Backspace' && !digit && index > 0) {
                        document.getElementById(`otp-input-${index - 1}`).focus();
                      }
                    }}
                  />
                ))}
              </div>
              {timerActive && (
                <span className="otp-timer font-ADLaM_Display">
                  00.{timer < 10 ? `0${timer}` : timer}
                </span>
              )}
            </div>

            <button className="verify-button" onClick={handleVerifyOtp}>
              <span className="button-text font-ADLaM_Display">Verify</span>
            </button>
          </>
        )}

        <div className="signup-link-container">
          <p className="signup-text font-ADLaM_Display">
            Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
