import SectionNavbar from '@/components/common/SectionNavbar'
import { MessagesList } from '@/components/dashboard/messages/MessagesList'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionNavbar/>
      <MessagesList/>
    </>
  )
}

export default page
