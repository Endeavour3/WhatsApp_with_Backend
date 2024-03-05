<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import PhoneInput from 'react-phone-input-2';
import { Grid, Stack } from '@mui/material';
import 'react-phone-input-2/lib/style.css';

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    // console.log("phoneNumber", phoneNumber)
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
            const response = await fetch('/api/send-otp', {
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
                // bgcolor: "#111b21"
            }}
        >
            <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"inherit"}
                height={"inherit"}
            >

                Login page
                {/* <div className="login-container">
                    <h1>Login with Phone Number</h1>
                    <form
                    // onSubmit={handleLogin}
                    >
                        <TextField
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
                                inputComponent: PhoneInput,
                                inputProps: {
                                    country: 'in',
                                },
                            }}
                        />
                        <Button type="submit" variant="contained" disabled={isLoading}>
                            {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Send OTP'}
                        </Button>
                    </form>
                    {phoneNumber && (
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
                                // onClick={handleVerifyOtp}
                                disabled={isLoading}>
                                {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Verify OTP'}
                            </Button>
                        </div>
                    )}
                </div> */}
            </Stack>
        </Grid>
    );
}
=======
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import CircularProgress from '@mui/material/CircularProgress';
// import PhoneInput from 'react-phone-input-2';
// import { Grid, Stack } from '@mui/material';
// import 'react-phone-input-2/lib/style.css';

// export default function Login() {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     // console.log("phoneNumber", phoneNumber)
//     const [otp, setOtp] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (!phoneNumber) {
//             alert('Please enter your mobile number');
//             return;
//         }

//         // const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digits

//         setIsLoading(true);
//         try {
//             const response = await fetch('/api/send-otp', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ phoneNumber: phoneNumber.replace(/\D/g, '') })
//             });

//             if (response.ok) {
//                 alert('OTP sent successfully!');
//                 // Optionally, show a timer indicating OTP expiry.
//             } else {
//                 console.error('Error sending OTP:', response.statusText);
//                 alert('An error occurred. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error sending OTP:', error);
//             alert('An error occurred. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const handleVerifyOtp = async (e) => {
//         e.preventDefault();

//         if (!otp) {
//             alert('Please enter the received OTP code');
//             return;
//         }

//         setIsLoading(true);
//         try {
//             const response = await fetch('/api/verify-otp', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ phoneNumber: phoneNumber.replace(/\D/g, ''), otp: otp })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 // Store user data (e.g., access token) in local storage or state
//                 navigate('/chat'); // Redirect to the chat interface
//             } else {
//                 console.error('Error verifying OTP:', response.statusText);
//                 alert('Invalid OTP code. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error verifying OTP:', error);
//             alert('An error occurred. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <Grid
//             item
//             xs={12} sm={12} md={12} lg={12} xl={12}
//             sx={{
//                 height: "100vh",
//                 // bgcolor: "#111b21"
//             }}
//         >
//             <Stack
//                 direction={"column"}
//                 justifyContent={"center"}
//                 alignItems={"center"}
//                 width={"inherit"}
//                 height={"inherit"}
//             >

//                 Login page
//                 {/* <div className="login-container">
//                     <h1>Login with Phone Number</h1>
//                     <form
//                     // onSubmit={handleLogin}
//                     >
//                         <TextField
//                             label="Phone Number"
//                             variant="outlined"
//                             type="tel"
//                             value={phoneNumber}
//                             onChange={(phone) => {
//                                 setPhoneNumber(phone)
//                             }}
//                             placeholder="Enter your mobile number"
//                             autoComplete="off"
//                             fullWidth
//                             InputProps={{
//                                 inputComponent: PhoneInput,
//                                 inputProps: {
//                                     country: 'in',
//                                 },
//                             }}
//                         />
//                         <Button type="submit" variant="contained" disabled={isLoading}>
//                             {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Send OTP'}
//                         </Button>
//                     </form>
//                     {phoneNumber && (
//                         <div>
//                             <TextField
//                                 label="OTP Code"
//                                 variant="outlined"
//                                 type="text"
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                                 placeholder="Enter OTP code"
//                                 fullWidth
//                                 disabled={isLoading}
//                             />
//                             <Button variant="contained" type="button"
//                                 // onClick={handleVerifyOtp}
//                                 disabled={isLoading}>
//                                 {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Verify OTP'}
//                             </Button>
//                         </div>
//                     )}
//                 </div> */}
//             </Stack>
//         </Grid>
//     );
// }
>>>>>>> 5ddd816198d2aefff5b252c123dbd4d7460f5280
