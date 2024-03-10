import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReactPhoneInput from 'react-phone-input-2';
import { Box, CircularProgress, FormControl, Grid, Snackbar, SnackbarOrigin, Stack, Typography } from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';
import { useAppDispatch } from '../../hooks/storeHooks';
import { setLoggedInUser } from '../../store/contacts/contactsSlice';

interface State extends SnackbarOrigin {
    openSnakbar: boolean;
}

export default function Login() {
    const [snackbar, setSnackbar] = useState<State>({
        openSnakbar: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, openSnakbar } = snackbar;

    const alertMessage = useRef(``)

    const handleOpenOtpSnackbar = (newState: SnackbarOrigin, message: string) => {
        alertMessage.current = message;
        setSnackbar({ ...newState, openSnakbar: true });
    };

    const handleCloseOtpSnackbar = () => {
        setSnackbar({ ...snackbar, openSnakbar: false });
    };

    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const verifyOtp = useRef("")

    const dispatch = useAppDispatch()

    const handleLogin = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (!phoneNumber) {
            handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, `Please enter your mobile number`)
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_BASEURL}:${process.env.REACT_APP_SERVER_PORT}/send-otp`, {
                phoneNumber: phoneNumber.replace(/\D/g, ''),
            });
            if (response.status === 200) {
                verifyOtp.current = response.data.otp
                handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, `Your OTP for login is ${response.data.otp} copy it`)
            } else {
                console.error('Error sending OTP:', response.statusText);
                handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, `An error occurred. Please try again.`)
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, `An error occurred. Please try again.`)
        } finally {
            setIsLoading(false);
        }
    };


    const handleVerifyOtp = async (e: React.SyntheticEvent, otp: string, phoneNumber: string) => {
        e.preventDefault();

        if (!otp) {
            handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, `Please enter the received OTP code`)
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_BASEURL}:${process.env.REACT_APP_SERVER_PORT}/verify-otp`, {
                phoneNumber: phoneNumber.replace(/\D/g, ''),
                otp: otp
            });
            if (response.status === 200) {
                handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, response.data.message)
                dispatch(setLoggedInUser(response.data.contactId))
                navigate(`/${response.data.contactId}`);
            } else {
                console.error('Error verifying OTP:', response.statusText);
                handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, `Invalid OTP code. Please try again.`)
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            handleOpenOtpSnackbar({ vertical: 'top', horizontal: 'center' }, `An error occurred. Please try again.`)
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
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={openSnakbar}
                onClose={handleCloseOtpSnackbar}
                message={alertMessage.current}
                key={vertical + horizontal}
            />
            <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"inherit"}
                height={"inherit"}
                spacing={4}
            >
                <Typography variant='h6' fontFamily={"inherit"}>Sign In with Mobile No</Typography>
                <Box component={"form"}
                    onSubmit={handleLogin}
                    sx={{
                        // display:"flex",
                        // flexDirection:"column",
                        // justifyContent:"flex-end"
                    }}
                >

                    <ReactPhoneInput
                        value={phoneNumber}
                        // isValid={checkInternationalPhone}
                        onChange={(phone) => {
                            setPhoneNumber(phone)
                            console.log(phone)
                        }}
                        // onKeyDown={(e)=>{
                        //     if(e.key === "Enter") {
                        //         handleLogin(e)
                        //     }
                        // }}
                        // onChange={handleChange}
                        country="in"
                    // inputStyle={{
                    //     padding: "27.2px 14px",
                    //     width: "337.5px"
                    // }}
                    />
                    {/* <Stack
                        justifyContent={"flex-end"}
                    > */}
                    {!verifyOtp.current && <Button type="submit" variant="contained" disabled={isLoading}
                        sx={{
                            textTransform: "none",
                            borderRadius: "20px",
                            marginTop: "32px"
                        }}
                    >
                        Send OTP
                        {/* {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Send OTP'} */}
                    </Button>}
                    {/* </Stack> */}
                </Box>
                {verifyOtp.current && (
                    <Box>
                        <TextField
                            label="OTP Code"
                            variant="outlined"
                            type="text"
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value)
                                if (phoneNumber.length === 6) {
                                    handleVerifyOtp(e, otp, phoneNumber)
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && phoneNumber.length === 6) {
                                    handleVerifyOtp(e, otp, phoneNumber)
                                }
                            }}
                            fullWidth
                        // disabled={isLoading}
                        />
                        <Button variant="contained" type="button"
                            sx={{
                                textTransform: "none",
                                borderRadius: "20px",
                                marginTop: "32px"
                            }}
                            onClick={(e) => { handleVerifyOtp(e, otp, phoneNumber) }}
                        // disabled={isLoading}
                        >
                            Verify OTP
                            {/* {isLoading ? <CircularProgress size="small" color="inherit" /> : 'Verify OTP'} */}
                        </Button>
                    </Box>
                )}
                <Button
                    variant={'.&hover' ? 'contained' : "outlined"}
                    sx={{
                        textTransform: "none",
                        borderRadius: "20px"
                    }}
                    onClick={() => navigate("/register")}
                >Sign Up</Button>
            </Stack>
        </Grid>
    );
}