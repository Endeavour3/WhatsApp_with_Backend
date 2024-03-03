import { Box, Stack, Input, CircularProgress, IconButton } from "@mui/material"
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BackIcon, SearchIcon, XaltIcon } from "../../../assects/icons/Icons";
import { setSearchText } from "../../../store/messagesSlice";

export default function SearchBar() {
  const searchText = useSelector((state) => state.messages.searchText)

  const [searchIcon, setSearchIcon] = useState(true)

  const [xaltIcon, setXaltIcon] = useState(false)

  const [circularProgress, setCircularProgress] = useState(false)

  const inputRef = useRef(null);

  const dispatch = useDispatch()

  function handleCircularProgress() {
    setXaltIcon(false)
    setCircularProgress(true)

    setTimeout(() => {
      setCircularProgress(false)
      setXaltIcon(true)
    }, 1000)
  }

  return (
    <>
      <Box
        sx={{
          boxSizing: "border-box",
          padding: "7px 12px 7px",
          width: "100%",
        }}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          sx={{
            bgcolor: "#202C33",
            borderRadius: "8px"
          }}
        >
          {
            searchIcon ? (
              <IconButton
                id="searchIcon"
                sx={{
                  padding: "5.5px 29px 5.5px 12px"
                }}
                onClick={(e) => {
                  setSearchIcon(false)
                  inputRef.current.focus();
                }}
              >
                <SearchIcon color="#8696a0" height={24} width={24} />
              </IconButton>
            ) : (
              <IconButton
                id="backIcon"
                sx={{
                  padding: "5.5px 29px 5.5px 12px"
                }}
                onClick={(e) => {
                  setSearchIcon(true)
                  setXaltIcon(false)
                  dispatch(setSearchText(""))
                }}
              >
                <BackIcon color="#00a884" height={24} width={24} />
              </IconButton>
            )
          }
          <Input
            id="messageField"
            placeholder="Search or start a new chat"
            inputRef={inputRef}
            onClick={() => {
              setSearchIcon(false)
            }}
            onChange={(e) => {
              dispatch(setSearchText(e.currentTarget.value))
              handleCircularProgress()
            }}
            value={searchText}
            disableUnderline
            sx={{
              width: "100%",
              fontFamily: "inherit",
              padding: "2.44px 0px 2px",
              color: "#d1d7db",
              fontSize: "15px",
            }}
          />
          <Stack
            direction="row"
            sx={{
              padding: "5.5px 6px 5.5px 1px"
            }}
            onClick={() => {
              dispatch(setSearchText(""))
              inputRef.current.focus();
            }}
          >
            {!((xaltIcon || circularProgress) && searchText !== "") ? (
              <></>
            ) : xaltIcon ? (
              <XaltIcon
                id="xaltIcon"
                color="#8696a0" height={24} width={24}
              />
            ) : (
              <CircularProgress
                variant="indeterminate"
                thickness={5}
                size={20}
                sx={{
                  color: "#00a884",
                }}
              />
            )}
          </Stack>
        </Stack>
      </Box>
    </>
  )
}