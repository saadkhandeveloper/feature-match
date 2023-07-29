import CategoriesTable from '@/components/CategoriesTable'
import ServicesInCategories from '@/components/ServicesInCategories'
import React from 'react'

const page = () => {
  return (
  <div>
    <div className="relative w-full h-fit bg-[#12141d]">

    <CategoriesTable title="" linkName="" src=""/>
    </div>
    {/* For All Categories */}

    <ServicesInCategories />
    <ServicesInCategories />
    <ServicesInCategories />
    <ServicesInCategories />
  </div>
  )
}

export default page