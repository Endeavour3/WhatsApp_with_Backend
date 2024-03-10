import { CardMedia, Stack } from "@mui/material";
import ChatToolBar from "./ChatToolBar";
import DisplayMessages from "./DisplayMessages";
import SendMessage from "./SendMessage";
import whatsappBackground from '../../../assects/images/whatsappBackground.png'

export default function ContactChat() {

    return (
        <>
            <Stack
                direction="column"
                height={"100%"}
                width={"100%"}
                sx={{
                    bgcolor: "#0b141a",
                    // backgroundImage: `url(${whatsappBackground})`,
                    backgroundImage: `linear-gradient(rgba(11, 20, 26, 0.95), rgba(11, 20, 26, 0.95)), url(${whatsappBackground})`,
                }}
            >
                <ChatToolBar />
                <DisplayMessages />
                <SendMessage />
            </Stack>
        </>
    )
}