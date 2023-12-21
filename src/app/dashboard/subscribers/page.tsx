import SectionNavbar from '@/components/common/SectionNavbar'
import { SubscribersList } from '@/components/dashboard/subscribers/SubscribersList'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionNavbar/>
      <SubscribersList/>
    </>
  )
}

export default page