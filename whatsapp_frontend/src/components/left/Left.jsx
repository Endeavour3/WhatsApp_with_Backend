import React from 'react'
import { Stack } from '@mui/material'
import ContactsList from './contactsList/ContactsList'
import { Outlet, useInRouterContext, useLocation, useParams } from 'react-router-dom'
import ProfileDrawer from './profileDrawer/ProfileDrawer'

export default function Left() {
    const location = useLocation()

    // const query = uses

    const { id } = useParams()

    return (
        <Stack
            direction={"column"}
            bgcolor={"#111b21"}
            height={"100%"}
            width={"100%"}
        >
            {
                id ?
                    // <ContactsList />
                    <ProfileDrawer />
                    :
                    <Outlet />
            }
        </Stack>
    )
}