import {
  IconBuilding,
  IconDashborard,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar,
} from '@/components/icons'
import { TSidebarLink } from '@/types/general.types'

export const sidebarLinks: TSidebarLink[] = [
  {
    path: '/',
    icon: <IconDashborard />,
    title: 'Dashboard',
  },
  {
    path: '/property',
    icon: <IconBuilding />,
    title: 'Property',
  },
  {
    path: '/agent',
    icon: <IconPerson />,
    title: 'Agent',
  },
  {
    path: '/review',
    icon: <IconStar />,
    title: 'Review',
  },
  {
    path: '/message',
    icon: <IconMessage />,
    title: 'Message',
  },
  {
    path: '/profile',
    icon: <IconProfile />,
    title: 'Profile',
  },
]
