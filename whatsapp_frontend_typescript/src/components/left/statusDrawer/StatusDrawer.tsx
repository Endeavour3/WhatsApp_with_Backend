import { Typography, Stack, IconButton, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../../assects/icons/Icons";

export default function StatusDrawer() {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction={"column"}
        bgcolor={"#111b21"}
      // height={"100%"}
      // width={"100%"}
      >
        <Box
          sx={{
            padding: "0px 20px 0px 23px",
            boxSizing: "border-box",
            bgcolor: "#202c33",
          }}
        >
          <Box sx={{ padding: "24.5px" }}></Box>
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
            }}>Status</Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}


