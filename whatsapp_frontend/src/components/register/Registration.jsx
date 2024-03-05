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
import { useForm } from 'react-hook-form';
import { TextField, Button, CircularProgress, CardMedia } from '@mui/material';
import { useAddContactMutation, useGetContactQuery } from '../../store/contactApi';
import { useState } from 'react';

export default function Registration() {
    const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
    const [addContact, { isLoading }] = useAddContactMutation();

    const contact = useGetContactQuery(2)

    console.log("contact", contact.data)

    // const [profile, setProfile] = useState("")
    // console.log("profile", profile)

    // const buffer = new Buffer(profile);

    // const base64String = buffer.toString('base64');


    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('contact_no', data.contact_no);
            formData.append('contact_name', data.contact_name);
            formData.append('contact_about', data.contact_about);
            formData.append('profile_picture', data.profile_picture[0]);

            console.log("formData", formData)

            const result = await addContact(formData);
            console.log("addContact", result)
            // setProfile(result.data.profile_picture.data)
            // setProfile(`data:image/jpg;base64,${Buffer.from(result.data.profile_picture).toString('base64')}`)
            reset(); // Clear form data after successful submission
        } catch (error) {
            console.error(error);
            setError('general', { type: 'manual', message: 'Failed to submit data' });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register('contact_no')} label="Contact Number" />
                <TextField {...register('contact_name')} label="Contact Name" />
                <TextField {...register('contact_about')} label="Contact About" />
                <input {...register('profile_picture')} type="file" />

                <Button type="submit" variant="contained" disabled={isLoading}>
                    {isLoading ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
                {errors.general && <p>{errors.general.message}</p>}
            </form>

            {/* <CardMedia
                component={"img"}
                // image={profile}
                src={`data:image/jpeg;base64,${base64String}`}
            ></CardMedia> */}
        </>
    );
};


// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function Registration() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(errors);

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
//             <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} />
//             <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
//             <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
//             <select {...register("Title", { required: true })}>
//                 <option value="Mr">Mr</option>
//                 <option value="Mrs">Mrs</option>
//                 <option value="Miss">Miss</option>
//                 <option value="Dr">Dr</option>
//             </select>

//             {/* <input {...register("Developer", { required: true })} type="radio" value="Yes" />
//             <input {...register("Developer", { required: true })} type="radio" value="No" /> */}

//             <input type="submit" />
//         </form>
//     );
// }




// import * as React from 'react';
// import { useForm } from 'react-hook-form';
// import {
//     TextField,
//     Button,
//     FormControl,
//     InputLabel,
//     Select,
//     MenuItem,
//     Typography,
//     Box,
//     CircularProgress,
// } from '@mui/material';
// import { useAddDataMutation } from '../../store/dataSlice';
// // import { useAddDataMutation } from './dataSlice'; // Import your dataSlice

// export default function Registration() {
//     const { register, handleSubmit, formState: { errors }, setError, reset, isLoading } = useForm();
//     const [addData, { isLoading: isSubmitting }] = useAddDataMutation();

//     const onSubmit = async (data) => {
//         try {
//             const formData = new FormData();
//             formData.append('contactno', data.contactno);
//             formData.append('name', data.name);
//             formData.append('profilePicture', data.profilePicture[0]);
//             formData.append('about', data.about);
//             await addData(formData);
//             reset(); // Clear form data after successful submission
//         } catch (error) {
//             console.error(error);
//             setError('general', { type: 'manual', message: 'Failed to submit data' });
//         }
//     };

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (!file || file.type.startsWith('image/')) {
//             setError('profilePicture', { type: 'manual', message: 'Invalid image format' });
//             return;
//         }
//         register('profilePicture')(event); // Update form data
//     };

//     return (
//         <Box component="form" onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//                 {...register('contactno', { required: 'Contact number is required' })}
//                 label="Contact Number"
//                 error={!!errors.contactno}
//                 helperText={errors.contactno?.message}
//             />
//             <TextField
//                 {...register('name', { required: 'Name is required' })}
//                 label="Name"
//                 error={!!errors.name}
//                 helperText={errors.name?.message}
//             />
//             <FormControl fullWidth>
//                 <InputLabel id="profile-picture-label">Profile Picture</InputLabel>
//                 <Select
//                     {...register('profilePicture', { required: 'Profile picture is required' })}
//                     labelId="profile-picture-label"
//                     error={!!errors.profilePicture}
//                     onChange={handleImageChange}
//                 >
//                     <MenuItem value="">Select Image</MenuItem>
//                     <MenuItem disabled>Only JPG/JPEG allowed</MenuItem>
//                 </Select>
//                 {errors.profilePicture && <Typography variant="body2" color="error">{errors.profilePicture.message}</Typography>}
//             </FormControl>
//             <TextField
//                 {...register('about', { maxLength: 250 })}
//                 label="About"
//                 multiline
//                 rows={4}
//                 error={!!errors.about}
//                 helperText={errors.about?.message ? 'Maximum 250 characters' : ''}
//             />
//             <Button type="submit" variant="contained" disabled={isLoading || isSubmitting}>
//                 {isLoading || isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
//             </Button>
//             {errors.general && <Typography variant="body2" color="error">{errors.general.message}</Typography>}
//         </Box>
//     );
// };