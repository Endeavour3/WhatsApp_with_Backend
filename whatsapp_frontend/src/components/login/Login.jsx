import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReactPhoneInput from 'react-phone-input-2';
import { CircularProgress, Grid, Stack, Typography } from '@mui/material';
import 'react-phone-input-2/lib/style.css';

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    console.log("phoneNumber", phoneNumber)
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!phoneNumber) {
            alert('Please enter your mobile number');
            return;
        }

        // const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digits

        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3005/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber: phoneNumber.replace(/\D/g, '') })
            });

            if (response.ok) {
                alert('OTP sent successfully!');
                // Optionally, show a timer indicating OTP expiry.
            } else {
                console.error('Error sending OTP:', response.statusText);
                alert('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();

        if (!otp) {
            alert('Please enter the received OTP code');
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phoneNumber: phoneNumber.replace(/\D/g, ''), otp: otp })
            });

            if (response.ok) {
                const data = await response.json();
                // Store user data (e.g., access token) in local storage or state
                navigate('/chat'); // Redirect to the chat interface
            } else {
                console.error('Error verifying OTP:', response.statusText);
                alert('Invalid OTP code. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Grid
            item
            xs={12} sm={12} md={12} lg={12} xl={12}
            sx={{
                height: "100vh",
            }}
        >
            <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"inherit"}
                height={"inherit"}
            >
                <Typography variant='h6' fontFamily={"inherit"}>Login with Mobile No</Typography>
                <form
                    onSubmit={handleLogin}
                >
                    {/* <TextField
                            label="Phone Number"
                            variant="outlined"
                            type="tel"
                            value={phoneNumber}
                            onChange={(phone) => {
                                setPhoneNumber(phone)
                            }}
                            placeholder="Enter your mobile number"
                            autoComplete="off"
                            fullWidth
                            InputProps={{
                                inputComponent: ReactPhoneInput,
                                inputProps: {
                                    country: 'in',
                                },
                            }}
                        /> */}

                    <ReactPhoneInput
                        value={phoneNumber}
                        // isValid={checkInternationalPhone}
                        onChange={(phone) => {
                            setPhoneNumber(phone)
                        }}
                        // onChange={handleChange}
                        country="in"
                    />
                    <Button type="submit" variant="contained" disabled={isLoading}>
                        {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Send OTP'}
                    </Button>
                </form>
                {(otp) && (
                    <div>
                        <TextField
                            label="OTP Code"
                            variant="outlined"
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP code"
                            fullWidth
                            disabled={isLoading}
                        />
                        <Button variant="contained" type="button"
                            onClick={handleVerifyOtp}
                            disabled={isLoading}>
                            {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Verify OTP'}
                        </Button>
                    </div>
                )}
            </Stack>
        </Grid>
    );
}








// import React, { useState } from "react";
// import ReactPhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// // import { checkInternationalPhone } from "./Validation";

// export default function App() {
//     const [phone, setPhone] = useState("");
//     const [formatted, setFormatted] = useState("");
//     const [valid, setValid] = useState(false);

//     const handleChange = (value, data) => {
//         setFormatted(value.slice(data.dialCode.length));
//         setPhone(value);
//         setValid(checkInternationalPhone(value.slice(data.dialCode.length)));
//     };

//     return (
//         <div className="container">
//             <ReactPhoneInput
//                 value={phone}
//                 isValid={checkInternationalPhone}
//                 onChange={handleChange}
//                 country="in"
//             />
//         </div>
//     );
// }

// /**
//  * DHTML phone number validation script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
//  */

// // Declaring required variables
// // const digits = "0123456789";
// // non-digit characters which are allowed in phone numbers
// var phoneNumberDelimiters = "()- ";
// // characters which are allowed in international phone numbers
// // (a leading + is OK)
// var validWorldPhoneChars = phoneNumberDelimiters + "+";
// // Minimum no of digits in an international phone no without the country code.
// var minDigitsInIPhoneNumber = 7;

// function isInteger(s) {
//     let i;
//     for (i = 0; i < s.length; i++) {
//         // Check that current character is number.
//         const c = s.charAt(i);
//         if (c < "0" || c > "9") {
//             return false;
//         }
//     }
//     // All characters are numbers.
//     return true;
// }

// function trim(s) {
//     let i;
//     let returnString = "";
//     // Search through string's characters one by one.
//     // If character is not a whitespace, append to returnString.
//     for (i = 0; i < s.length; i++) {
//         // Check that current character isn't whitespace.
//         const c = s.charAt(i);
//         if (c !== " ") {
//             returnString += c;
//         }
//     }
//     return returnString;
// }

// function stripCharsInBag(s, bag) {
//     let i;
//     let returnString = "";
//     // Search through string's characters one by one.
//     // If character is not in bag, append to returnString.
//     for (i = 0; i < s.length; i++) {
//         // Check that current character isn't whitespace.
//         const c = s.charAt(i);
//         if (bag.indexOf(c) === -1) {
//             returnString += c;
//         }
//     }
//     return returnString;
// }

// export function checkInternationalPhone(strPhone) {
//     let bracket = 3;

//     strPhone = trim(strPhone);

//     if (strPhone.indexOf("+") > 1) {
//         return false;
//     }

//     if (strPhone.indexOf("-") !== -1) {
//         bracket = bracket + 1;
//     }

//     if (strPhone.indexOf("(") !== -1 && strPhone.indexOf("(") > bracket) {
//         return false;
//     }

//     const brchr = strPhone.indexOf("(");

//     if (strPhone.indexOf("(") !== -1 && strPhone.charAt(brchr + 2) !== ")") {
//         return false;
//     }

//     if (strPhone.indexOf("(") === -1 && strPhone.indexOf(")") !== -1) {
//         return false;
//     }

//     const s = stripCharsInBag(strPhone, validWorldPhoneChars);
//     return isInteger(s) && s.length >= minDigitsInIPhoneNumber;
// }

// export function ValidateForm(phoneValue) {
//     if (!phoneValue) {
//         alert("Please Enter your Phone Number");
//         return false;
//     }

//     if (!checkInternationalPhone(phoneValue)) {
//         alert("Please Enter a Valid Phone Number");
//         return false;
//     }
//     return true;
// }









// import { Grid } from '@mui/material'
// import React from 'react'

// export default function Registration() {
//     return (
//         <>
//             <Grid
//                 item
//                 xs={12} sm={12} md={12} lg={12} xl={12}
//                 sx={{
//                     height: "100vh",
//                     // bgcolor: "#111b21"
//                 }}
//             >
//                 Registraion

//             </Grid>
//         </>
//     )
// }


// ContactForm.js
// import { useForm } from 'react-hook-form';
// import { TextField, Button, CircularProgress, CardMedia } from '@mui/material';
// import { useAddContactMutation, useGetContactQuery } from '../../store/contactApi';
// import { useState } from 'react';

// export default function Registration() {
//     const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
//     const [addContact, { isLoading }] = useAddContactMutation();

//     const contact = useGetContactQuery(2)

//     console.log("contact", contact.data)

//     // const [profile, setProfile] = useState("")
//     // console.log("profile", profile)

//     // const buffer = new Buffer(profile);

//     // const base64String = buffer.toString('base64');


//     const onSubmit = async (data) => {
//         try {
//             const formData = new FormData();
//             formData.append('contact_no', data.contact_no);

//             console.log("formData", formData)

//             const result = await addContact(formData);
//             console.log("addContact", result)
//             reset();
//         } catch (error) {
//             console.error(error);
//             setError('general', { type: 'manual', message: 'Failed to submit data' });
//         }
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <TextField {...register('contact_no')} label="Contact Number" />

//                 <Button type="submit" variant="contained" disabled={isLoading}>
//                     {isLoading ? <CircularProgress size={24} /> : 'Submit'}
//                 </Button>
//                 {errors.general && <p>{errors.general.message}</p>}
//             </form>
//         </>
//     );
// };
