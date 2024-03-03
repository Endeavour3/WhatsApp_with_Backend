import { Typography, Grid, Stack, IconButton, Avatar, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BackIcon, PencilIcon, ProfileIcon } from "../../../assects/icons/Icons";

export default function ProfileDrawer() {
  const personalInfo = useSelector((state) => state.contacts.personalInfo)

  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction={"column"}
        bgcolor={"#111b21"}
        height={"100%"}
        width={"100%"}
      >
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