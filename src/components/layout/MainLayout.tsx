import React, { Fragment } from 'react'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

interface IMainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Fragment>
      <Topbar></Topbar>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
    </Fragment>
  )
}

export default MainLayout
