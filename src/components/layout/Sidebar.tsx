import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '@/constants/general.const'
import { useRouter } from 'next/router'
import { TSidebarLink } from '@/types/general.types'

const Sidebar = () => {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className="px-4 p-6 bg-grayfc">
      {sidebarLinks.map((link) => (
        <SidebarLink
          key={link.title}
          link={link}
          isActive={pathname === link.path}
        />
      ))}
    </div>
  )
}

interface ISidebarLinkProps {
  link: TSidebarLink
  isActive: boolean
}

const SidebarLink = ({ link, isActive }: ISidebarLinkProps) => {
  return (
    <Link
      href={link.path}
      className={`
          px-6 
          py-4 
          flex 
          items-center 
          gap-c10 
          font-bold 
          text-base 
          text-gray80 
          rounded-xl 
          ${isActive ? 'bg-primary text-grayfc' : 'hover:text-primary'}
          `}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  )
}

export default Sidebar
