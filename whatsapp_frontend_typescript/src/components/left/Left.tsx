import React from 'react'
import { Stack } from '@mui/material'
import ContactsList from './contactsList/ContactsList'
import { Outlet, useLocation, useParams } from 'react-router-dom'

export default function Left() {
    const location = useLocation()

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
                    <ContactsList />
                    :
                    <Outlet />
            }
        </Stack>
    )
}