import { IconButton, Input, Stack, List, ListItem, Dialog, Paper, Typography, Menu, MenuItem } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { generateMessage } from "../functions";
import { useParams } from "react-router-dom";
import { AttachmentIcon, CameraIconAdvanced, ContactIcon, DocumentIcon, NewStickerIcon, PhotoVideoIcon, PollIcon, SendIcon, SmileyIcon, VoiceCommandIcon } from "../../../assects/icons/Icons";
import { generateMessage } from "./contactChatFunctions";

export default function SendMessage() {
    // const { contactId } = useParams()

    const contactId = 2

    const [textToSend, setTextToSend] = useState("")

    const rotation = useRef(0);

    // const [isModalOpen, setIsModalOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const isModalOpen = Boolean(anchorEl);

    const inputRef = useRef(null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (contactId) {
            inputRef.current.focus()
        }
    }, [contactId])

    const handleRotateClick = () => {
        const newRotation = rotation.current === 0 ? 135 : 0;
        rotation.current = newRotation
    };

    const handleOpenModal = (event) => {
        handleRotateClick()
        // setIsModalOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleCloseModal = () => {
        handleRotateClick()
        // setIsModalOpen(false);
        setAnchorEl(null);
    };

    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                    bgcolor: "#202c33",
                    padding: "5px 16px",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    width={"100%"}
                >
                    <IconButton>
                        <SmileyIcon height={24} width={24} color={"#8696a0"} />
                    </IconButton>
                    <IconButton
                        onClick={(e) => { handleOpenModal(e) }}
                        sx={{
                            transform: `rotate(${rotation.current}deg)`,
                            transition: 'transform 0.4s ease',
                            padding: "8px",
                            borderRadius: "50%",
                            bgcolor: rotation.current == 135 ? "#374248" : "#202c33"
                        }}
                    >
                        <AttachmentIcon height={24} width={24} color={"#8696a0"} />
                    </IconButton>
                    <AttachmentModal anchor={anchorEl} isOpen={isModalOpen} onClose={handleCloseModal} />
                    <Input
                        inputRef={inputRef}
                        variant="standard"
                        id="messageText"
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                if (textToSend) {
                                    dispatch(generateMessage(textToSend, contactId))
                                    setTextToSend("")
                                }
                            }
                        }}
                        onChange={(e) => {
                            setTextToSend(e.currentTarget.value)
                        }}
                        placeholder=" Type a message"
                        value={textToSend}
                        disableUnderline
                        sx={{
                            margin: "5px 8px",
                            padding: "5px 12px",
                            borderRadius: "8px",
                            color: "#d1d7db",
                            bgcolor: "#2a3942",
                            textDecoration: "none",
                            fontFamily: "inherit",
                            fontSize: "15px",
                            width: "100%"
                        }}
                    />
                </Stack>
                {
                    textToSend ?
                        <IconButton
                            onClick={() => {
                                dispatch(generateMessage(textToSend, contactId))
                                setTextToSend("")
                            }}
                        >
                            <SendIcon height={24} width={24} color={"#8696a0"} />
                        </IconButton>
                        :
                        <IconButton>
                            <VoiceCommandIcon height={24} width={24} color={"#8696a0"} />
                        </IconButton>
                }
            </Stack>
        </>
    )
}


function AttachmentModal({ anchor, isOpen, onClose }) {
    const attachmentOptions = [
        { icon: <DocumentIcon height={20} width={16} color="#7f66ff" />, label: 'Document' },
        { icon: <PhotoVideoIcon height={20} width={20} color="#007bfc" />, label: 'Photos & Videos' },
        { icon: <CameraIconAdvanced height={20} width={19} color="#ff2e74" />, label: 'Camera' },
        { icon: <ContactIcon height={16} width={16} color="#009de2" />, label: 'Contact' },
        { icon: <PollIcon height={16} width={16} color="#ffbc38" />, label: 'Poll' },
        { icon: <NewStickerIcon height={24} width={24} color="#02a698" />, label: 'New Sticker' },
    ];

    return (
        <Menu
            anchorEl={anchor}
            id="account-menu"
            open={isOpen}
            onClose={onClose}
            // onClick={onClose}
            PaperProps={{
                // elevation: 0,
                sx: {
                    color: "#d1d7db",
                    bgcolor: "#233138",
                    padding: '3px',
                    borderRadius: '16px',
                },
            }}
        // transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        // anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {attachmentOptions.map((option, index) => (
                <MenuItem
                    key={index}
                    sx={{
                        margin: '0px 32px 0px 8px',
                        '&:hover': { bgcolor: '#182229', borderRadius: '8px' },
                        padding: '0px',
                        height: '40px',
                    }}
                >
                    <IconButton margin="0px 12px 0px 0px">{option.icon}</IconButton>
                    <Typography
                        sx={{
                            color: '#d1d7db',
                            fonfontFamilyt: 'inherit',
                            fontSize: '16px',
                            textAlign: 'left',
                        }}
                    >
                        {option.label}
                    </Typography>
                </MenuItem>
            ))}
        </Menu>
    )
}

// function AttachmentModal({ isOpen, onClose }) {
//     const attachmentOptions = [
//         { icon: <DocumentIcon height={20} width={16} color="#7f66ff" />, label: 'Document' },
//         { icon: <PhotoVideoIcon height={20} width={20} color="#007bfc" />, label: 'Photos & Videos' },
//         { icon: <CameraIconAdvanced height={20} width={19} color="#ff2e74" />, label: 'Camera' },
//         { icon: <ContactIcon height={16} width={16} color="#009de2" />, label: 'Contact' },
//         { icon: <PollIcon height={16} width={16} color="#ffbc38" />, label: 'Poll' },
//         { icon: <NewStickerIcon height={24} width={24} color="#02a698" />, label: 'New Sticker' },
//     ];

//     return (
//         <Dialog
//             open={isOpen}
//             onClose={(event, reason) => {
//                 if (reason === 'backdropClick') {
//                     onClose()
//                 }
//             }}
//         >
//             <Paper
//                 sx={{
//                     position: 'fixed',
//                     top: '48.7%',
//                     left: '34.2%',
//                     zIndex: 1,
//                     backgroundColor: '#233138',
//                     padding: '3px',
//                     borderRadius: '16px',
//                 }}
//             >
//                 <List>
//                     {attachmentOptions.map((option, index) => (
//                         <ListItem
//                             key={index}
//                             sx={{
//                                 margin: '0px 32px 0px 8px',
//                                 '&:hover': { bgcolor: '#182229', borderRadius: '8px' },
//                                 padding: '0px',
//                                 height: '40px',
//                             }}
//                         >
//                             <IconButton margin="0px 12px 0px 0px">{option.icon}</IconButton>
//                             <Typography
//                                 sx={{
//                                     color: '#d1d7db',
//                                     fonfontFamilyt: 'inherit',
//                                     fontSize: '16px',
//                                     textAlign: 'left',
//                                 }}
//                             >
//                                 {option.label}
//                             </Typography>
//                         </ListItem>
//                     ))}
//                 </List>
//             </Paper>
//         </Dialog>
//     );
// }

