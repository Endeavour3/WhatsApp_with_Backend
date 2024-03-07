import React from 'react'
import ContactChat from './contactChat/ContactChat'
import DefaultCenter from './defaultCenter/DefaultCenter'
import { Outlet, useParams } from 'react-router-dom'

export default function Center() {
  const { receiverId } = useParams()

  return (
    <>
      {
        receiverId ? <Outlet /> : <DefaultCenter />
      }
    </>
  )
}