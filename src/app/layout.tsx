'use client'
import { SetStateAction, useState } from 'react';
import { JaponAuthProvider } from '../context/JaponAuthProvider'
import './globals.css'
import { AiFillCaretLeft, AiOutlineHome } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IconContext } from 'react-icons'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [menuIndex, setMenuIndex] = useState(0);

  const pathName = usePathname()

  const Menus = [
    {title: "Home", tag: <AiOutlineHome></AiOutlineHome>, redirectUrl: "/home"},
    {title: "Account", tag: <MdOutlineAccountCircle></MdOutlineAccountCircle>, redirectUrl: "/account/my-group"}
  ]

  const handleClick = () => {
    setSideBarOpen((prev) => !prev)
  }

  const handleMenuClick = (index: number) => {
    console.log(index)
    setMenuIndex(index)
  }

  return (
    <JaponAuthProvider>
      
      <IconContext.Provider value={{ color: '#ccc', size: '30px' }}>
      <html lang="en" className='h-full'>
        {/*
          <head /> will contain the components returned by the nearest parent
          head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body>
          <div className='flex flex-row'>
            <div className='hidden md:flex '>

              <div className={`${sideBarOpen ? 'w-72' : 'w-24'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
                <AiFillCaretLeft
                  className={`absolute cursor-pointer rounded-full -right-3 top-9 border-2 border-dark-purple ${!sideBarOpen && "rotate-180"}` }
                  onClick={handleClick}
                />

                <ul>
                  {Menus.map((menu, index) =>(
                      <Link key={menu.redirectUrl} rel="icon" href={menu.redirectUrl} >
                        <li 
                          key={menu.redirectUrl} 
                          className={`ext-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
                          p-2 hover:bg-light-white rounded-md ${pathName === menu.redirectUrl && 'bg-light-white'}`}
                          >
                          {menu.tag}
                            <span className={`${!sideBarOpen && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                        </li>
                      </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className='font-semibold flex-1 h-screen overflow-y-scroll'>
              {children}
            </div>
          </div>
        </body>
      </html>
      </IconContext.Provider>
    </JaponAuthProvider>
  )
}
