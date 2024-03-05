import { Typography, Grid, Stack, IconButton, Avatar, Box, Menu, MenuItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BackIcon, PencilIcon, ProfileIcon } from "../../../assects/icons/Icons";
import { useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { useSetProfileMutation } from "../../../store/contactApi";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


export default function ProfileDrawer() {
  const personalInfo = useSelector((state) => state.contacts.personalInfo)

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    switch (e.currentTarget.id) {
      case 'Mark as unread':
        // dispatch(setUnreadMessages(localUserMobileNo))
        break;
    }
    setAnchorEl(null);
  };

  const [clientXposition, setClientXposition] = useState(null)

  const [clientYposition, setClientYposition] = useState(null)



  const [setProfile, { isLoading, isSuccess, isError }] = useSetProfileMutation();

  const [file, setFile] = useState(null);

  const handleChange = async (selectedFile) => {
    try {
      const formData = new FormData();
      formData.append('profile_picture', selectedFile);

      const id = 1

      const result = await setProfile({ id, formData })

      console.log("result", result)
    } catch (error) {
      console.error(error);
    }
  };


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    handleChange(event.target.files[0]); // Trigger callback with selected file
  };

  // const handleFileUpload = (data) => {
  //   const file = data.profile_picture[0];

  //   // Do something with the uploaded file, for example, dispatch an action or update state
  //   // For now, just log the file information
  //   console.log('Uploaded file:', data.profile_picture);

  //   // You can also close the menu if needed
  //   setAnchorEl(null);
  // };


  // const [selectedFile, setSelectedFile] = useState(null);
  // const fileInputRef = useRef(null);
  // const [mutate, { isLoading, error }] = useSetProfileMutation();

  // const handleOpenFilePicker = () => {
  //   fileInputRef.current.click();
  // };

  // const handleFileChange = (event) => {
  //   const newFile = event.target.files[0];
  //   console.log("formData", event.target.files)
  //   // setSelectedFile(newFile);
  // };

  // const handleUpload = async () => {
  //   if (!selectedFile) {
  //     // Handle no file selected case
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('profile_picture', selectedFile);

  //   try {
  //     // await mutate(formData);
  //     console.log("formData", formData)
  //     setSelectedFile(null);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
      <Stack
        direction={"column"}
        bgcolor={"#111b21"}
        height={"100%"}
        width={"100%"}
      >
        {/* <input
          id="fileInput"
          type="file"
          style={{ display: 'none' }}
          {...register('profile_picture')}
          onChange={handleSubmit(handleFileUpload)}
        /> */}

        <Box
          sx={{
            padding: "0px 20px 0px 23px",
            boxSizing: "border-box",
            bgcolor: "#202c33",
          }}
        >
          <Box sx={{ padding: "24.5px" }} />
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
              padding: "17.5px 0px 17.5px"
            }}
          >
            <IconButton
              sx={{
                padding: "0px 29px 0px 0px",
              }}
            >
              <BackIcon color="#d9dee0" height={24} width={24} />
            </IconButton>
            <Typography sx={{
              fontFamily: "inherit",
              color: "#d9dee0",
              fontSize: "19px",
              fontWeight: "600",
              '&:hover': { cursor: "default" },
            }}>Profile</Typography>
          </Stack>
        </Box>
        <IconButton
          onClick={(e) => {
            setClientXposition(e.clientX)
            setClientYposition(e.clientY + 10)
            e.stopPropagation();
            handleClick(e)
          }}
          sx={{
            padding: "28px 0px",
            '&:hover': { cursor: "pointer" }
          }}
        >   {
            personalInfo.profilePicture ? (
              <Avatar />
            ) : (
              <ProfileIcon height={"200"} width={"200"} bgcolor="#6a7175" color="#cfd4d6" />
            )
          }
          {/* <IconButton>
            <DefaultUserIcon
              height={"212"}
              width={"212"}
            />
            <CameraIcon />
            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="stretch"
              spacing={0}
            >
              <IconButton
                sx={{
                  fontSize: "13px",
                  color: "#c3c9c2"
                }}
              >
                ADD PROFILE PHOTO
              </IconButton>
            </Stack>
          </IconButton> */}
        </IconButton>
        <Menu
          id="account-menu"
          anchorEl={anchorEl}
          anchorReference="anchorPosition"
          anchorPosition={{
            top: open ? clientYposition : 0,
            left: open ? clientXposition : 0,
          }}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              color: "#d1d7db",
              bgcolor: "#233138",
            },
          }}
        >
          <MenuItem
            id={"Take photo"}
            onClick={(e) => {
              // handleClose(e)
            }}
            sx={{
              fontFamily: "inherit",
              padding: "9px 58px 9px 24px",
              fontSize: "14.5px",
              '&:hover': { bgcolor: "#182229" },
            }}
          >
            Take photo
          </MenuItem>
          <MenuItem
            id={"Upload photo"}
            // onClick={handleOpenFilePicker}
            component="label"
            sx={{
              fontFamily: "inherit",
              padding: "9px 58px 9px 24px",
              fontSize: "14.5px",
              '&:hover': { bgcolor: "#182229" },
            }}
            onChange={handleFileChange}
          >
            Upload photo
            {/* <VisuallyHiddenInput type="file" ref={fileInputRef} onChange={handleFileChange} /> */}
            <VisuallyHiddenInput type="file" />
          </MenuItem>
        </Menu>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2.6}
          sx={{
            padding: "14px 30px 10px",
            marginBottom: "10px",
          }}
        >
          <Typography sx={{
            font: "inherit",
            color: "#008069",
            fontSize: "14px",
            '&:hover': { cursor: "default" }
          }}>Your name</Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Typography sx={{ font: "inherit", color: "#d1d7db", fontSize: "16px" }}>{personalInfo.contactName}</Typography>
            <PencilIcon height={24} width={24} color="#8696a0" />
          </Stack>
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          sx={{
            margin: "4px 20px 28px 30px",
          }}
        >
          <Typography sx={{
            font: "inherit",
            color: "#8696a0",
            fontSize: "14px",
            '&:hover': { cursor: "default" },
          }}>
            This is not your username or pin. This name will be visible
            to your WhatsApp contacts.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2.6}
          sx={{
            padding: "14px 30px 10px",
            marginBottom: "10px",
          }}
        >
          <Typography sx={{
            font: "inherit",
            color: "#008069",
            fontSize: "14px",
            '&:hover': { cursor: "default" },
          }}>About</Typography>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Typography sx={{
              font: "inherit",
              color: "#d1d7db",
              fontSize: "16px",
            }}>{personalInfo.contactAbout}</Typography>
            <PencilIcon height={24} width={24} color="#8696a0" />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

















// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
// import { useSetProfileMutation } from '../../../store/contactApi';
// import { useState } from 'react';

// export default function ProfileDrawer() {
//   const [setProfile, { isLoading, isSuccess, isError }] = useSetProfileMutation();

//   const [errMsg, setErrMsg] = useState("")

//   const handleFileChange = async (selectedFile) => {
//     try {
//       const formData = new FormData();
//       formData.append('profile_picture', selectedFile);

//       const id = 1

//       const result = await setProfile({ id, formData })

//       console.log("result", result)
//     } catch (error) {
//       console.error(error);
//       setErrMsg(error)
//     }

//     // setProfile({ id, formData }) // Use formData for mutation body
//     //   .then(() => console.log('Profile updated successfully'))
//     //   .catch((error) => console.error('Error:', error));
//   };

//   return (
//     <div>
//       <InputFileUpload onChange={handleFileChange} />
//       {isLoading && <p>Uploading...</p>}
//       {isSuccess && <p>Profile updated successfully!</p>}
//       {isError && <p>Error: {errMsg}</p>}
//     </div>
//   );
// }



// // const VisuallyHiddenInput = styled('input')({
// //   clip: 'rect(0 0 0 0)',
// //   clipPath: 'inset(50%)',
// //   height: 1,
// //   overflow: 'hidden',
// //   position: 'absolute',
// //   bottom: 0,
// //   left: 0,
// //   whiteSpace: 'nowrap',
// //   width: 1,
// // });

// function InputFileUpload({ onChange }) {
//   const [file, setFile] = useState(null);

// const handleFileChange = (event) => {
//   setFile(event.target.files[0]);
//   onChange(event.target.files[0]); // Trigger callback with selected file
// };

//   return (
//     <Button
//       component="label"
//       role={undefined}
//       variant="contained"
//       tabIndex={-1}
//       onChange={handleFileChange}
//     >
//       Upload file
//       <VisuallyHiddenInput type="file" />
//     </Button>
//   );
// }
