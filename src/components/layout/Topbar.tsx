import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IconNotification, IconSearch } from '../icons'

const Topbar = () => {
  return (
    <div className="bg-grayfc px-5 py-4 flex items-center justify-between">
      <div className="flex items-center gap-[82px] flex-1">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-full.png" alt="Yariga" width={173} height={34.54} />
        </Link>
        <div className="p-[10px] h-[38px] rounded-lg bg-grayf4 flex items-center gap-2 flex-[0_1_405px]">
          <IconSearch></IconSearch>
          <input
            type="text"
            placeholder="Search Property, Customer etc"
            className="bg-transparent text-xs font-normal w-full text-primary placeholder:text-gray-80 outline-none"
          />
        </div>
      </div>
      <div className="flex items-center flex-shrink-0 gap-5">
        <span>
          <IconNotification></IconNotification>
        </span>
        <div className="flex items-center flex-shrink-0 gap-[10px]">
          <Image
            alt="image"
            src="https://th.bing.com/th/id/R.0407d8461aefa92339e50ff23942f0f4?rik=V7k8JA2erw1YyA&pid=ImgRaw&r=0"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold ">Hawkins Maru</h4>
            <span className="text-gray80">Company Manager</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
