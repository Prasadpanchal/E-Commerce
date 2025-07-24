// frontend/src/pages/SignUpPage.js

import React, { useState } from 'react';
import './SignUpPage.css'; // Make sure this CSS file is in the same directory
import signupBg from '../assets/login_bg.png'; 

import { PhonecodeSelect } from "react-country-state-city";
// import { StateSelect, CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";


const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    email: '',
    countryCode: '+91',
    phoneNo: '',
    otp: ['', '', '', ''], // For 4-digit OTP
    address: '',
    locality: '',
    pincode: '',
    city: '',
    state: '',
    landmark: '',
    altPhoneNo: '',
  });

  const [showOtpFields, setShowOtpFields] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    if (/^\d*$/.test(value) && value.length <= 1) { // Only allow single digit
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData((prevData) => ({ ...prevData, otp: newOtp }));

      // Move to next input if a digit is entered
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSendOtp = () => {
    // Implement OTP sending logic here (e.g., to formData.phoneNo)
    console.log('Sending OTP to:', formData.phoneNo);
    setShowOtpFields(true);
    setTimer(30);
    setTimerActive(true);
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          setTimerActive(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const handleVerifyOtp = () => {
    // Implement OTP verification logic here
    console.log('Verifying OTP:', formData.otp.join(''));
    // Show success/failure message
  };

  const handleSaveNext = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Implement form submission logic here
    console.log('Form Data:', formData);
    // Redirect or show success message
  };

  return (
    <div className="signup-page-container">
      <img className="signup-background-image" src={signupBg} alt="Sign Up Background" />
      <div className="signup-card">
        <h1 className="signup-title font-ADLaM_Display">Sign Up</h1>
        <form onSubmit={handleSaveNext} className="signup-form">
          <div className="form-row">
            <div className="input-group half-width">
              <label htmlFor="firstName" className="input-label font-Arimo_Hebrew_Subset_Italic">First name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="signup-input"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
              />
            </div>
            <div className="input-group half-width">
              <label htmlFor="lastName" className="input-label font-Arimo_Hebrew_Subset_Italic">Last name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="signup-input"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group half-width">
              <label htmlFor="gender" className="input-label font-Arimo_Hebrew_Subset_Italic">Gender</label>
              <div className="select-wrapper">
                <select
                  id="gender"
                  name="gender"
                  className="signup-input select-input"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <span className="select-arrow font-Arimo_Hebrew_Subset_Italic"></span>
              </div>
            </div>
            <div className="input-group half-width">
              <label htmlFor="dob" className="input-label font-Arimo_Hebrew_Subset_Italic">Date Of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="signup-input"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group full-width">
            <label htmlFor="email" className="input-label font-Arimo_Hebrew_Subset_Italic">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="signup-input"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>

          <div className="form-row phone-otp-row">
            <div className="input-group full-width">
              <label htmlFor="phoneNo" className="input-label font-Arimo_Hebrew_Subset_Italic">Phone No.</label>
              <div className="custom-phone-wrapper">
                <div className="country-code-wrapper">
                  <PhonecodeSelect
                    value={formData.countryCode}
                    onChange={(val) => setFormData((prev) => ({ ...prev, countryCode: val }))}
                    className="country-dropdown" required
                  />
                </div>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  className="phone-number-input"
                  placeholder="Phone No."
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="button" className="send-otp-button" onClick={handleSendOtp} disabled={timerActive}>
              <span className="button-text font-Arimo_Hebrew_Subset_Italic">Send OTP</span>
            </button>
          </div>

          {showOtpFields && (
            <div className="otp-verification-section">
              <div className="input-group full-width">
                <label htmlFor="otp-input-0" className="input-label font-Arimo_Hebrew_Subset_Italic">Enter OTP</label>
                <div className="otp-inputs-wrapper">
                  {formData.otp.map((digit, index) => (
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
                {timerActive && <span className="otp-timer font-ADLaM_Display">00.{timer < 10 ? `0${timer}` : timer}</span>}
              </div>
              <button type="button" className="verify-button" onClick={handleVerifyOtp}>
                <span className="button-text font-Arimo_Hebrew_Subset_Italic">Verify</span>
              </button>
            </div>
          )}

          <h2 className="address-section-title font-Arimo_Hebrew_Subset_Italic">Address</h2>
          <div className="form-row address-row">
            <div className="input-group half-width">
              <label htmlFor="locality" className="input-label font-Inder">Locality</label>
              <input
                type="text"
                id="locality"
                name="locality"
                className="signup-input small-input"
                value={formData.locality}
                onChange={handleChange}
                placeholder="Locality"
                required
              />
            </div>
            <div className="input-group half-width">
              <label htmlFor="pincode" className="input-label font-Inder">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="signup-input small-input"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
              />
            </div>
          </div>

          <div className="input-group full-width">
            <label htmlFor="address" className="input-label font-Inder">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="signup-input"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              required
            />
          </div>

          <div className="form-row address-row">
            <div className="input-group half-width">
              <label htmlFor="city" className="input-label font-Inder">City/District/Town</label>
              <input
                type="text"
                id="city"
                name="city"
                className="signup-input small-input"
                value={formData.city}
                onChange={handleChange}
                placeholder="City/District/Town"
                required
              />
            </div>
            <div className="input-group half-width">
              <label htmlFor="state" className="input-label font-Inder">State</label>
              <div className="select-wrapper">
                <select
                  id="state"
                  name="state"
                  className="signup-input select-input small-input"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  {/* Add more states */}
                </select>
                <span className="select-arrow font-Inika"></span>
              </div>
            </div>
          </div>

          <div className="form-row address-row">
            <div className="input-group half-width">
              <label htmlFor="landmark" className="input-label font-Inder">Landmark</label>
              <input
                type="text"
                id="landmark"
                name="landmark"
                className="signup-input small-input"
                value={formData.landmark}
                onChange={handleChange}
                placeholder="Landmark"
                required
              />
            </div>
            <div className="input-group half-width">
              <label htmlFor="altPhoneNo" className="input-label font-Inder">Alternate Phone no.</label>
              <input
                type="tel"
                id="altPhoneNo"
                name="altPhoneNo"
                className="signup-input small-input"
                value={formData.altPhoneNo}
                onChange={handleChange}
                placeholder="Alternate Phone no."
                required
              />
            </div>
          </div>

          <button type="submit" className="save-next-button">
            <span className="button-text font-Arimo_Hebrew_Subset_Italic">Submit</span> {/* <--- मजकूर 'Submit' मध्ये बदलला आहे */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
