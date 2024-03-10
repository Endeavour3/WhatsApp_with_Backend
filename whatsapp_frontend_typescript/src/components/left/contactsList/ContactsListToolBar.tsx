import { Stack, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import React, { ReactEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ChannelsIcon, CommunitiesIcon, MenuDotIcon, NewChatIcon, ProfileIcon, StatusIcon } from "../../../assects/icons/Icons";

export default function ContactsListToolBar() {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const menuItems = [
        'New group',
        'New community',
        'Starred messages',
        'Select chats',
        'Settings',
        'Log out',
    ];

    // const buttonData = [
    //     { id: "communities", title: "Communities", icon: <CommunitiesIcon /> },
    //     { id: "status", title: "Status", icon: <StatusIcon /> },
    //     { id: "channels", title: "Channels", icon: <ChannelsIcon /> },
    //     { id: "newchat", title: "New chat", icon: <NewChatIcon /> },
    //     { id: "menu", title: "Menu", icon: <MenuDotIcon /> },
    // ];

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
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
                    padding: "10px 16px",
                }}
            >
                {/* <Avatar alt="myProfilePicture" src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/379727675_1379561979616037_7922129445927542609_n.jpg?ccb=11-4&oh=01_AdRTfAs4DKjvazSPotZLZL2peIym2qNKzmmebs0BZjS_RQ&oe=65D6C6EE&_nc_sid=e6ed6c&_nc_cat=107"/> */}
                <IconButton
                    id="profileIcon"
                    onClick={() => {
                        // navigate(`profile`)
                    }}
                    sx={{
                        padding: "0px",
                        "&:hover": { cursor: "pointer" }
                    }}
                >
                    <ProfileIcon height={40} width={40} bgcolor="#6a7175" color="#cfd4d6" />
                </IconButton>

                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={1}
                >
                    <IconButton
                        id={"communities"}
                        onClick={() => {
                            // navigate(`communities`)
                        }}
                        sx={{
                            borderRadius: "50%",
                            "&:hover": { cursor: "pointer" },
                        }}
                    >
                        <CommunitiesIcon height={24} width={24} color="#aebac1" />
                    </IconButton>
                    <IconButton
                        id={"status"}
                        onClick={() => {
                            // navigate(`status`)
                        }}
                        sx={{
                            borderRadius: "50%",
                            "&:hover": { cursor: "pointer" },
                        }}
                    >
                        <StatusIcon height={24} width={24} color="#aebac1" bgcolor="#009588" />
                    </IconButton>
                    <IconButton
                        id={"channels"}
                        onClick={() => {
                            // navigate(`channels`)
                        }}
                        sx={{
                            borderRadius: "50%",
                            "&:hover": { cursor: "pointer" },
                        }}
                    >
                        <ChannelsIcon height={24} width={24} color="#aebac1" />
                    </IconButton>
                    <IconButton
                        id={"newchat"}
                        onClick={() => {
                            // navigate(`newchat`)
                        }}
                        sx={{
                            borderRadius: "50%",
                            "&:hover": { cursor: "pointer" },
                        }}
                    >
                        <NewChatIcon height={24} width={24} color="#aebac1" />
                    </IconButton>
                    <IconButton
                        id={"menu"}
                        onClick={(e) => {
                            handleClick(e)
                        }}
                        sx={{
                            borderRadius: "50%",
                            bgcolor: anchorEl && "#374248",
                            "&:hover": {
                                bgcolor: "#202c33",
                            },
                        }}
                    >
                        <MenuDotIcon height={24} width={24} color="#aebac1" />
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
                                    padding: "9px 24px 9px",
                                    fontSize: "14.5px",
                                    '&:hover': { bgcolor: "#182229" },
                                }}
                            >
                                {item}
                            </MenuItem>
                        ))}
                        <Divider orientation="horizontal" sx={{ bgcolor: "#324048" }} />
                        <MenuItem
                            onClick={handleClose}
                            sx={{
                                fontFamily: "inherit",
                                padding: "9px 24px 9px 24px",
                                fontSize: "14.5px",
                                '&:hover': { bgcolor: "#182229" }
                            }}
                        >
                            Get WhatsApp for Windows
                        </MenuItem>
                    </Menu>
                </Stack>
            </Stack>
        </>
    )
}