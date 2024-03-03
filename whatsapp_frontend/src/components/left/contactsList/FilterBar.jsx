import { Stack, IconButton, Divider } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setFilterButtons } from "../../../store/filtersSlice";

export default function FilterBar() {
  const filterButtons = useSelector((state) => state.filters.filterButtons)

  const dispatch = useDispatch()

  const buttonData = [
    { id: "buttonAll", label: "All" },
    { id: "buttonUnread", label: "Unread" },
    { id: "buttonContacts", label: "Contacts" },
    { id: "buttonGroups", label: "Groups" },
  ];

  return (
    <>
      <Stack
        direction="row"
        spacing="8px"
        flexWrap="wrap"
        sx={{
          padding: "2px 16px 7px",
          bgcolor: "#111B21"
        }}
      >
        {buttonData.map((button) => (
          <IconButton
            data-testid={button.id}
            key={button.id}
            id={button.id}
            onClick={(e) => {
              dispatch(setFilterButtons({ buttonName: e.currentTarget.id, buttonValue: true }))
            }}
            sx={{
              padding: "6px 12px",
              color: filterButtons[button.id] ? '#00a884' : '#8696A0',
              bgcolor: filterButtons[button.id] ? '#0a332c' : '#202C33',
              fontSize: "15px",
              fontWeight: "400",
              fontFamily: "inherit",
              cursor: "pointer",
              borderRadius: "42px",
              '&:hover': {
                bgcolor: filterButtons[button.id] ? '#0a332c' : '#26353d',
              },
            }}
          >
            {button.label}
          </IconButton>
        ))}
      </Stack>
      <Divider
        orientation="horizontal"
        sx={{
          bgcolor: "#262f34",
        }}
      />
    </>
  );
}
