import { Stack, Avatar, Typography, IconButton, Dialog, DialogContent, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Menu, MenuItem } from "@mui/material";
// import { openWhatsAppDesktop } from "../functions";
import { useNavigate, useParams } from "react-router-dom";
import { useScreenDetectorMui } from "../../../hooks/screenDetectorMui";
import { BackIcon, DownArrowIcon, MenuDotIcon, ProfileIcon, SearchIcon, VideoCallIcon } from "../../../assects/icons/Icons";
import { openWhatsAppDesktop } from "./contactChatFunctions";

export default function ChatToolBar() {
    // const contacts = useSelector((state) => state.contacts.contacts)

    const { receiverId } = useParams()

    const navigate = useNavigate()

    // let selectedUser = contacts.find((contact) => contact.contactId === receiverId)

    let selectedUser = useSelector((state) => state.contacts.contacts.find((contact) => contact.contactId == receiverId))

    const dispatch = useDispatch()

    const screen = useScreenDetectorMui()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const menuItems = [
        'Contact info',
        'Select messages',
        'Close chat',
        'Mute notifications',
        'Disappearing messages',
        'Clear chat',
        'Delete chat',
        'Report',
        'Block'
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    function VideoCallModal({ isOpen, onClose }) {
        return (
            <Dialog
                open={isOpen}
                onClose={(event, reason) => {
                    if (reason === 'backdropClick') {
                        onClose();
                    }
                }}
            >
                <DialogContent
                    sx={{
                        position: 'fixed',
                        top: '15%',
                        left: '58%',
                        zIndex: 1,
                        backgroundColor: '#233138',
                        padding: "0px",
                        borderRadius: "16px",
                        width: "460px",
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            padding: '12px 20px 14px',
                        }}
                    >
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                        >
                            <Typography
                                sx={{
                                    color: '#d1d6d8',
                                    fontFamily: 'inherit',
                                    fontSize: '17px',
                                    fontWeight: '450',
                                    textAlign: 'left',
                                }}
                            >
                                Make calls with the Windows app
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#8696a0',
                                    fontFamily: 'inherit',
                                    fontSize: '14px',
                                    textAlign: 'left',
                                }}
                            >
                                Download WhatsApp for Windows to start making calls.
                            </Typography>
                        </Stack>
                        <IconButton
                            onClick={() => openWhatsAppDesktop()}
                            sx={{
                                font: 'inherit',
                                bgcolor: '#00a884',
                                color: '#111b21',
                                fontFamily: 'inherit',
                                fontSize: '14px',
                                fontWeight: '600',
                                textAlign: 'center',
                                padding: '10px 24px',
                                borderRadius: '24px',
                                '&:hover': { bgcolor: '#06cf9c' },
                            }}
                        >
                            Get the app
                        </IconButton>
                    </Stack>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <>
            <VideoCallModal isOpen={isModalOpen} onClose={handleCloseModal} />
            {
                selectedUser && (
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        // whiteSpace={"nowrap"}
                        // overflow={"hidden"}
                        sx={{
                            padding: "10px 16px",
                            boxSizing: "border-box",
                            bgcolor: "#202c33",
                            width: "100%"
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            {screen.isMobile && <BackIcon
                                id="backIcon"
                                color="#d9dee0"
                                height={24}
                                width={24}
                                onClick={(e) => {
                                    navigate(`/`)
                                }}
                            />}
                            <IconButton
                                id="personalProfileIcon"
                                onClick={(e) => { }}
                                sx={{
                                    padding: "0px",
                                    '&:hover': { cursor: "pointer" }
                                }}
                            >
                                {
                                    selectedUser.profilePicture ? (
                                        <Avatar sx={{ height: "40px", width: "40px" }} alt={selectedUser.contactName} src={selectedUser.profilePicture} />
                                    ) : (
                                        <ProfileIcon height={40} width={40} bgcolor="#6a7175" color="#cfd4d6" />
                                    )
                                }
                            </IconButton>
                            <Stack
                                direction={"column"}
                                justifyContent="center"
                                alignItems="flex-start"
                                paddingLeft={"15px"}
                            // width={"40%"}
                            // overflow={"hidden"}
                            // textOverflow={"ellipsis"}
                            >
                                <Typography
                                    sx={{
                                        color: "#ede9ef",
                                        font: "inherit",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        '&:hover': { cursor: "pointer" }
                                    }}
                                >
                                    {selectedUser.contactName}
                                </Typography>

                                {
                                    selectedUser.contactLastSeen ?
                                        <Typography
                                            sx={{
                                                color: '#8696A0',
                                                font: 'inherit',
                                                fontSize: '13px',
                                            }}
                                        >
                                            last seen today at {selectedUser.contactLastSeen.time}
                                        </Typography>
                                        :
                                        <Typography
                                            sx={{
                                                color: '#8696A0',
                                                font: 'inherit',
                                                fontSize: '13px',
                                            }}
                                        >
                                            Click here for contact info
                                        </Typography>
                                }
                            </Stack>
                        </Stack>
                        <Stack
                            id="icons"
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={1}
                        >
                            {!screen.isMobile && <IconButton
                                title="Get the app for calling"
                                onClick={() => {
                                    handleOpenModal()
                                }}
                                sx={{
                                    color: "#4c5c66",
                                    border: "1px solid #2f3b43",
                                    borderRadius: "50px",
                                    padding: "5px 10px",
                                    bgcolor: isModalOpen ? "#374248" : "none",
                                    display: "flex",
                                }}
                            >
                                <VideoCallIcon height={24} width={24} color={"#4c5c66"} sx={{ marginRight: "6px" }} />
                                <DownArrowIcon height={13} width={13} color={"#4c5c66"} />
                            </IconButton>}
                            <IconButton
                                sx={{
                                    padding: "0px 8px"
                                }}
                            >
                                <SearchIcon color="#aebac1" height={30} width={30} />
                            </IconButton>
                            <IconButton
                                id="menuDotIcon"
                                onClick={(e) => {
                                    // dispatch(setLeftTopNavigationButtons({ "buttonName": e.currentTarget.id, "buttonValue": true }))
                                    handleClick(e)
                                }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                sx={{
                                    borderRadius: "50%",
                                    bgcolor: anchorEl && "#374248",
                                    "&:hover": { bgcolor: "#202c33" }
                                }}
                            >
                                <MenuDotIcon height={"24px"} width={"24px"} color="#aebac1" />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
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
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                {menuItems.map((item, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleClose}
                                        sx={{
                                            fontFamily: "inherit",
                                            padding: "9px 24px 9px 24px",
                                            fontSize: "14.5px",
                                            '&:hover': { bgcolor: "#182229" },
                                        }}
                                    >
                                        {item}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Stack>
                    </Stack>
                )
            }
        </>
    )
}

