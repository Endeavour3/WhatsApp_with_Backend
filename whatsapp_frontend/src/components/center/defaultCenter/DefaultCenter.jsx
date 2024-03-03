import { Stack, IconButton, Typography } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import defaultPage from '../../../assects/images/defaultPage.png'
import { openWhatsAppDesktop } from "../contactChat/contactChatFunctions";

export default function DefaultCenter() {
    return (

        <>
            <Stack
                direction={"column"}
                height={"100%"}
                width={"100%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                    bgcolor: "#222e35",
                    "&:hover": { cursor: "default" },
                    // height:"inherit",
                    // width:"inherit"
                }}
            >

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        width: "55%",
                        marginTop: "13.85%"
                    }}
                >
                    <CardMedia
                        component="img"
                        image={defaultPage}
                        alt="WhatsApp Desktop"
                        sx={{
                            bgcolor: 'none',
                            width: '320px',
                            height: '188px',
                        }}
                    />
                    <Typography
                        sx={{
                            color: "#d1d6d8",
                            fontSize: "32px",
                            fontWeight: "300",
                            margin: "24px 0px 0px",
                            textAlign: "center",
                            fontFamily: "inherit",
                        }}
                    >
                        Download WhatsApp for Windows
                    </Typography>
                    <Typography
                        sx={{
                            color: "#8696a0",
                            fontSize: "14px",
                            margin: "12px 0px 0px",
                            textAlign: "center",
                            padding: "0px 20px 0px",
                            fontFamily: "inherit",
                        }}
                    >
                        Make calls, share your screen and get a faster experience when you download the Windows app.
                    </Typography>
                    <IconButton
                        onClick={() => openWhatsAppDesktop()}
                        sx={{
                            font: "inherit",
                            bgcolor: "#00a884",
                            color: "#111b21",
                            fontSize: "14px",
                            fontWeight: "600",
                            margin: "35px 0px 0px",
                            textAlign: "center",
                            padding: "10px 24px",
                            borderRadius: "24px",
                            '&:hover': { bgcolor: "#06cf9c" },
                            fontFamily: "inherit"
                        }}
                    >Get the app</IconButton>
                </Stack>
                <Typography
                    sx={{
                        color: "#667781",
                        fontFamily: "inherit",
                        fontSize: "14px",
                        textAlign: "center",
                        marginBottom: "5.5%"
                    }}
                >
                    <svg viewBox="0 0 10 12" height="12" width="10" preserveAspectRatio="xMidYMid meet" className="" version="1.1"><title>lock-small</title><path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path></svg> Your personal messages are end-to-end encrypted
                </Typography>
            </Stack>
        </>
    )
}
