import { IconBed, IconCross, IconLocation } from '@/components/icons'
import Image from 'next/image'
import React from 'react'

interface PropertyItemProps {
  children: React.ReactNode
}

const PropertyItem: React.FC<PropertyItemProps> = ({ children }) => {
  return (
    <div className="flex gap-2">
      <div className="relative">
        <Image
          src={
            'https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?pid=ImgDet&rs=1'
          }
          alt="setup"
          width={200}
          height={125}
          className="object-cover rounded-xl flex-shrink-0"
        />
      </div>
      <div className="flex-1">
        <span
          className="inline-block text-xs 
        font-semibold text-primary py-2 px-[10px] rounded-[5px]
         bg-secondary mb-2"
        >
          $7400
        </span>
        <h3 className="text-base font-semibold text-primaryText mb-1">
          Metro Javakarta Hotel & Spa
        </h3>
        <div className="flex items-center gap-1 text-gray-80 mb-2">
          <IconLocation />
          <span>North Carolina, USA</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <IconBed />
            <span className="text-xs font-medium">4 Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <IconCross />
            <span className="text-xs font-medium">28M</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyItem
