import { Typography, Paper, IconButton } from "@mui/material"
import { List, ListItem, Stack } from '@mui/material';
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DoubleTickIcon, SingleTickIcon } from "../../../assects/icons/Icons";


export default function DisplayMessages() {
    // const { contactId } = useParams()

    const personalId = useSelector((state) => state.contacts.personalInfo.contactId)

    const contactId = 2

    const messages = useSelector((state) => state.messages.messages)

    const lastMessageRef = useRef(null)

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <>
            <Stack
                sx={{
                    height: "100%",
                    overflow: 'auto',
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#374045',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#111b21',
                    },
                }}
            >
                <List>
                    {messages.filter((message) => message.sendTo === contactId).map((message, index, array) => (
                        <ListItem
                            key={message.id}
                            ref={index === array.length - 1 ? lastMessageRef : null}
                            sx={{
                                justifyContent: personalId === message.sendFrom ? "flex-end" : "flex-start",
                            }}
                        >
                            <Paper elevation={1} sx={{
                                bgcolor: "#005c4b",
                                padding: "9px"
                            }} >
                                <Typography sx={{ font: "inherit", fontSize: "14.2px", color: "#e9edef" }}>{message.messageContent}</Typography>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"flex-end"}
                                    alignItems={"center"}
                                >
                                    <Typography
                                        sx={{
                                            font: "inherit",
                                            fontSize: "11px",
                                            color: "#99beb7"
                                        }}
                                    >
                                        {message.createdAt.time}
                                    </Typography>
                                    {
                                        // Object.hasOwn(message, "deliveredAt") ? (
                                            message.deliveredAt ? (
                                                <IconButton
                                                    sx={{
                                                        padding: "0px",
                                                        marginLeft: "3px"
                                                    }}
                                                >
                                                    <DoubleTickIcon height={11} width={16}
                                                        color={message.readAt ? "#53bdeb" : "#99beb7"}
                                                    />
                                                </IconButton>
                                            ) : (
                                                <IconButton
                                                    sx={{
                                                        padding: "0px",
                                                        marginLeft: "3px"
                                                    }}
                                                >
                                                    <SingleTickIcon height={11} width={16} color="#99beb7" />
                                                </IconButton>
                                            )
                                        // ) : (
                                        //     <></>
                                        // )
                                    }
                                </Stack>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </>
    )
}
