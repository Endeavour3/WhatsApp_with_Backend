import { createBrowserRouter } from "react-router-dom";
import MainDashboard from "../components/mainDashboard/MainDashboard";
import Registration from "../components/register/Registration";
import NewChatDrawer from "../components/left/newChatDrawer/NewChatDrawer";
import ChannelsDrawer from "../components/left/channelsDrawer/ChannelsDrawer";
import StatusDrawer from "../components/left/statusDrawer/StatusDrawer";
import CommunitiesDrawer from "../components/left/communitiesDrawer/CommunitiesDrawer";
import ProfileDrawer from "../components/left/profileDrawer/ProfileDrawer";
import Login from "../components/login/Login";
import Center from "../components/center/Center";
import ContactsList from "../components/left/contactsList/ContactsList";
import ContactChat from "../components/center/contactChat/ContactChat";

export const router = createBrowserRouter([
    {
        path: "/:id",
        element: <MainDashboard />,
        children: [
            {
                path: "/:id/profile",
                element: <ProfileDrawer />
            },
            {
                path: "/:id/:receiverId",
                element: <ContactChat />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Registration />
    },

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
