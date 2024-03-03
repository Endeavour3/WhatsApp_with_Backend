import { Divider, Grid } from "@mui/material";
import { useScreenDetectorMui } from "../../hooks/screenDetectorMui";
import { useParams } from "react-router-dom";
import Left from "../left/Left";
import Center from "../center/Center";
import Right from "../right/Right";

export default function MainDashboard() {
    const { contactNo } = useParams()

    const screen = useScreenDetectorMui()

    return (
        <>
            <Grid
                container
                direction="row"
                sx={{
                    height: "100vh",
                    fontFamily: "Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif",
                }}
            >
                {/* {((!contactNo && isMobile) || !isMobile) && <Grid
                    item
                    xs={12} sm={6} md={4.65} lg={3.65} xl={3.65}
                >
                    <Left />
                </Grid>} */}
                <Grid
                    item
                    xs={12} sm={6} md={4.65} lg={3.65} xl={3.65}
                    borderRight={!screen.isMobile && "0.5px solid #313d45"}
                >
                    <Left />
                </Grid>
                <Grid
                    item
                    xs={12} sm={6} md={7.35} lg={8.35} xl={8.35}
                >
                    <Center />
                </Grid>
                {/* {((contactNo && isMobile) || !isMobile) && <Grid
                    item
                    xs={12} sm={6} md={7.35} lg={8.35} xl={8.35}
                >
                    <Center />
                </Grid>} */}
                {/* <Grid
                    item
                    xs={12} sm={6} md={7.35} lg={8.35} xl={8.35}
                    borderLeft={screen.isDesktop && "0.5px solid #313d45"}
                >
                    <Right />
                </Grid> */}
            </Grid>
        </>
    )
}
