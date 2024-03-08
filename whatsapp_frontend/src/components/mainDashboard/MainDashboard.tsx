import { Divider, Grid } from "@mui/material";
import { useScreenDetectorMui } from "../../hooks/screenDetectorMui";
import { useNavigate, useParams } from "react-router-dom";
import Left from "../left/Left";
import Center from "../center/Center";
import Right from "../right/Right";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/storeHooks";

export default function MainDashboard() {
    const { id } = useParams()

    const loggedInUser = useAppSelector(state => state.contacts.loggedInUser)

    const navigate = useNavigate()

    const screen = useScreenDetectorMui()


    useEffect(() => {
        if (loggedInUser) {
            navigate(`/${loggedInUser}`);
        } else {
            navigate("/login", { replace: true })
        }
    }, [loggedInUser])


    return (
        <>
            {
                loggedInUser ?
                    <>
                        <Grid
                            container
                            direction="row"
                            sx={{
                                height: "100vh",
                                fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                            }}
                        >
                            {/* {((!id && screen.isMobile) || !screen.isMobile) && <Grid
                                item
                                xs={12} sm={6} md={4.65} lg={3.65} xl={3.65}
                            >
                                <Left />
                            </Grid>} */}
                            <Grid
                                item
                                xs={12} sm={6} md={4.65} lg={3.65} xl={3.65}
                                sx={{
                                    borderRight: !screen.isMobile ? "0.5px solid #313d45" : "none"
                                }}
                            >
                                <Left />
                            </Grid>
                            {/* <Grid
                                item
                                xs={12} sm={6} md={7.35} lg={8.35} xl={8.35}
                            >
                                <Center />
                            </Grid> */}
                            {((id && screen.isMobile) || !screen.isMobile) && <Grid
                                item
                                xs={12} sm={6} md={7.35} lg={8.35} xl={8.35}
                            >
                                <Center />
                            </Grid>}
                            {/* <Grid
                                item
                                xs={12} sm={6} md={7.35} lg={8.35} xl={8.35}
                                borderLeft={screen.isDesktop && "0.5px solid #313d45"}
                            >
                                <Right />
                            </Grid> */}
                        </Grid>
                    </>
                    :
                    navigate("/login", { replace: true })
            }

        </>
    )
}
