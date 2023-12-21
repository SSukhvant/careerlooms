import AddCategory from '@/components/dashboard/category/AddCategory'
import CategoryList from '@/components/dashboard/category/CategoryList'
import SectionNavbar from '@/components/common/SectionNavbar'
import React from 'react'

const page = () => {
  return (
    <>
    <SectionNavbar/>
    <AddCategory/>
    <CategoryList/>
    </>
  )
}

export default page
