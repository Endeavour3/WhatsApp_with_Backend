import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../components/mainDashboard/MainDashboard";
// import Login from "../components/login/Login";
import Registration from "../components/register/Registration";
import NewChatDrawer from "../components/left/newChatDrawer/NewChatDrawer";
import ChannelsDrawer from "../components/left/channelsDrawer/ChannelsDrawer";
import StatusDrawer from "../components/left/statusDrawer/StatusDrawer";
import CommunitiesDrawer from "../components/left/communitiesDrawer/CommunitiesDrawer";
import ProfileDrawer from "../components/left/profileDrawer/ProfileDrawer";

export const router = createBrowserRouter([
    {
        path: "/:id",
        element: <MainDashboard />,
        children:[
            
        ]
    },
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    {
        path: "/register",
        element: <Registration />
    },
    // {
    //     path: "/profile",
    //     element: <ProfileDrawer />
    // },
    // {
    //     path: "/communities",
    //     element: <CommunitiesDrawer />
    // },
    // {
    //     path: "/status",
    //     element: <StatusDrawer />
    // },
    // {
    //     path: "/channels",
    //     element: <ChannelsDrawer />
    // },
    // {
    //     path: "/newchat",
    //     element: <NewChatDrawer />
    // },
])
