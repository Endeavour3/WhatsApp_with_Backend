import { Avatar, IconButton, ListItem, Stack, List, Typography, Divider, Paper } from "@mui/material";
import { useState } from "react";
// import { useAppSelector, useDispatch } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DownArrowIcon, ProfileIcon } from "../../../assects/icons/Icons";
import { getContacts, getLastMessageText, truncateText } from "./contactsListFunctions";
// import { useGetContactsQuery } from "../../../store/contactApi";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHooks";
// import { useGetContactsQuery } from "../../../store/contacts/contactApi";


export default function Contacts() {
  const { id } = useParams<{ id?: string }>();

  const contacts = useAppSelector((state) =>
    state.contacts.contacts.filter((contact) => contact.contactId !== (id ? parseInt(id, 10) : undefined))
  );

  // const { data, error, isLoading } = useGetContactsQuery();

  // console.log("useGetContactsQuery", data, error, isLoading)

  const messages = useAppSelector((state) => state.messages.messages)

  const searchText = useAppSelector((state) => state.messages.searchText)

  const filterButtons = useAppSelector((state) => state.filters.filterButtons)

  const dispatch = useAppDispatch()

  const { contactId } = useParams()

  const navigate = useNavigate()

  const [dropdownIconIndex, setDropdownIconIndex] = useState(0);

  let contactsList = getContacts(contacts, searchText, filterButtons)

  const menuItems = [
    'Archive chat',
    'Mute notifications',
    'Delete chat',
    'Pin chat',
    'Mark as unread',
    'Block',
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any) => {
    switch (e.currentTarget.id) {
      case 'Mark as unread':
        // dispatch(setUnreadMessages(localUserMobileNo))
        break;
    }
    setAnchorEl(null);
  };

  const [clientXposition, setClientXposition] = useState(0)

  const [clientYposition, setClientYposition] = useState(0)

  return (
    <>
      <Paper sx={{
        // width: "100%",
        // height: "100%",
        overflow: 'auto',
        borderRadius: "0px",
        bgcolor: "#111b21",
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#374045',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#111b21',
        },
      }}> {
          contactsList.length < 1 ? (
            <>
              <Typography
                sx={{
                  color: "#667781",
                  fontFamily: "inherit",
                  fontSize: "14px",
                  padding: "72px 0px",
                  textAlign: "center",
                  // height: "100%",
                  // width: "100%"
                }}
              >
                No chats, contacts or messages found
              </Typography>
            </>
          ) : (
            <>
              <List
                sx={{
                  padding: "0px",
                  // height: "100%",
                  // width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {
                  contactsList.map((contact, index) => {
                    return (
                      <>
                        <ListItem
                          key={contact.contactId}
                          onClick={(e) => {
                            if (open) {
                              e.stopPropagation()
                            } else {
                              navigate(`${contact.contactId}`)
                            }
                          }}
                          onMouseEnter={() => setDropdownIconIndex(index)}
                          onMouseLeave={() => setDropdownIconIndex(0)}
                          sx={{
                            padding: "0px 15px 0px 0px",
                            // width: "100%",
                            boxSizing: "border-box",
                            bgcolor: Number(contactId) === contact.contactId ? "#2a3942" : "#111b21",
                            '&:hover': { bgcolor: "#202c33" },
                            justifyContent: "space-between",
                            alignItems: "center",
                            overflow:"hidden"
                          }}
                        >
                          <IconButton
                            sx={{
                              padding: "12px 15px 12px 13px",
                            }}
                          >
                            {
                              contact.profilePicture ? (
                                <Avatar sx={{ height: "49px", width: "49px" }} alt={contact.contactName} src={contact.profilePicture} />
                              ) : (
                                <ProfileIcon height={49} width={49} bgcolor="#6a7175" color="#cfd4d6" />
                              )
                            }
                          </IconButton>
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0.3}
                            overflow={"hidden"}
                            sx={{
                              width: "100%",
                              boxSizing: "border-box",
                            }}
                          >
                            <Typography
                              sx={{
                                color: "#ede9ef",
                                fontFamily: "inherit",
                                fontSize: "17px",
                                textAlign: "left",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                WebkitBoxOrient: "vertical"
                              }}
                            >
                              {contact.contactName}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#8696a0",
                                fontFamily: "inherit",
                                fontSize: "14px",
                                textAlign: "left",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: "1",
                                WebkitBoxOrient: "vertical"
                              }}
                            >
                              {
                                getLastMessageText(contact.contactId, messages) === "" ?
                                  // truncateText(contact.contactAbout)
                                  contact.contactAbout
                                  :
                                  // truncateText(getLastMessageText(contact.contactId, messages))
                                  getLastMessageText(contact.contactId, messages)
                              }
                            </Typography>
                          </Stack>
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-end"
                            spacing={0.6}
                          >
                            <Typography
                              sx={{
                                color: "#8696a0",
                                fontFamily: "inherit",
                                fontSize: "12px",
                                textAlign: "right",
                              }}
                            >
                              {contact.contactLastSeen.time}
                            </Typography>
                            <Stack
                              direction="row"
                              justifyContent="flex-end"
                              alignItems="center"
                            >
                              {
                                // contact.contactUnreadMessages && (
                                //   <IconButton
                                //     // onMouseEnter={() => setDropdownIconIndex(index)}
                                //     // onMouseLeave={() => setDropdownIconIndex(null)}
                                //     sx={{
                                //       color: "#111b21",
                                //       bgcolor: "#00a884",
                                //       fontFamily: "inherit",
                                //       fontSize: "12px",
                                //       textAlign: "center",
                                //       fontWeight: "500",
                                //       padding: "2.5px 7px",
                                //     }}
                                //   >
                                //     {contact.contactUnreadMessages}
                                //   </IconButton>
                                // )
                              }
                              <IconButton
                                // id="DownArrowIcon"
                                // id={contact.contactId}
                                onClick={(e) => {
                                  setClientXposition(e.clientX)
                                  setClientYposition(e.clientY + 10)
                                  e.stopPropagation();
                                  // setDropdownIconIndex(index)
                                  handleClick(e)
                                }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                sx={{
                                  padding: "0px",
                                  display: dropdownIconIndex === index ? 'block' : 'none',
                                }}
                              >
                                <DownArrowIcon height={20} width={20} color={"#8696a0"} />
                              </IconButton>
                              {/* <Menu
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
                                {menuItems.map((item, index) => (
                                  <MenuItem
                                    key={index}
                                    id={item}
                                    onClick={(e) => {
                                      handleClose(e)
                                    }}
                                    sx={{
                                      fontFamily: "inherit",
                                      padding: "9px 58px 9px 24px",
                                      fontSize: "14.5px",
                                      '&:hover': { bgcolor: "#182229" },
                                    }}
                                  >
                                    {item}
                                  </MenuItem>
                                ))}
                              </Menu> */}
                            </Stack>
                          </Stack>
                        </ListItem >
                        <Divider
                          key={(Number(contact.contactId) + index) + contact.contactName}
                          variant="inset"
                          orientation="horizontal"
                          sx={{
                            bgcolor: "#262f34",
                          }}
                        />
                      </>
                    )
                  })
                }
              </List >
            </>
          )
        }
      </Paper>
    </>
  )
}