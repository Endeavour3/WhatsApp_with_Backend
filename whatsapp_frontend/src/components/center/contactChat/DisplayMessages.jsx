import { Typography, Paper, IconButton } from "@mui/material"
import { List, ListItem, Stack } from '@mui/material';
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DoubleTickIcon, SingleTickIcon } from "../../../assects/icons/Icons";
import moment from "moment";
import { useGetMessagesByContactQuery } from "../../../store/messageApi";


export default function DisplayMessages() {
    const { id } = useParams()

    const { receiverId } = useParams()

    const messages = useSelector((state) => state.messages.messages)

    // const { data, error, isLoading } = useGetMessagesByContactQuery({ send_from: 1, send_to: 2});

    // console.log("useGetMessagesByContactQuery", data, error, isLoading)

    // messages = data

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
                    {messages.filter((message) => message.send_to == receiverId).map((message, index, array) => (
                        <ListItem
                            key={message.id}
                            ref={index === array.length - 1 ? lastMessageRef : null}
                            sx={{
                                justifyContent: id == message.send_from ? "flex-end" : "flex-start",
                            }}
                        >
                            <Paper elevation={1} sx={{
                                bgcolor: "#005c4b",
                                padding: "9px"
                            }} >
                                <Typography sx={{ font: "inherit", fontSize: "14.2px", color: "#e9edef" }}>{message.message_content}</Typography>
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
                                        {moment(message.created_at).format('h:mm A')}
                                    </Typography>
                                    {
                                        // Object.hasOwn(message, "deliveredAt") ? (
                                        message.delivered_at ? (
                                            <IconButton
                                                sx={{
                                                    padding: "0px",
                                                    marginLeft: "3px"
                                                }}
                                            >
                                                <DoubleTickIcon height={11} width={16}
                                                    color={message.read_at ? "#53bdeb" : "#99beb7"}
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
