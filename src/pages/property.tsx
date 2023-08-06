import MainLayout from '@/components/layout/MainLayout'
import PropertyItem from '@/modules/property/PropertyItem'
import React from 'react'

type Props = {}

const property = (props: Props) => {
  return (
    <MainLayout>
      <div className="flex item-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <button
          className="
        flex 
        items-center 
        justify-center 
        py-3 
        px-5 
        bg-primary 
        text-sm 
        font-medium 
        leading-normal
        rounded-[10px] 
        text-grayfc"
        >
          + Add Property
        </button>
      </div>
      <div className="p-5 bg-white rounded-2xl">
        <div aria-label="filter"></div>
        <div
          aria-label="list"
          className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
        >
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <PropertyItem key={index}>{index}</PropertyItem>
            ))}
        </div>
        <div
          aria-label="pagination"
          className="flex items-center justify-between"
        >
          <p className="text-gray-80">Showing 1 to 10 Properties</p>
          <div className="flex items-center gap-[10px]">
            <button className="w-9 h-9 rounded-lg flex items-center text-white justify-center bg-primary">
              1
            </button>
            <button className="w-9 h-9 rounded-lg flex items-center justify-center ">
              2
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default property
