'use client'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'
import { useEffect } from 'react'
import useSWR from "swr";
import {Group} from "@/types/group/Group";
import {AccountDomain} from "@/internal-domain/AccountDomain";
import {JaponUser} from "@/types/JaponUser";
import {AccountMainNavMenu} from "@/components/account/AccountMainNavMenu";

const Menus = [
  {title: "私のグループ", redirectUrl: "/account/my-group"},
  {title: "参加グループ", redirectUrl: "/account/join-group"}
]

export const AccountMain = ( {children}: any) => {
    const pathName = usePathname()
    var accountDomain = AccountDomain()
    const router = useRouter()

    async function fetcher() {
        return await accountDomain.getJaponAccount()
    }

    const {data , error} = useSWR(
        "http://localhost:3000/api/account/show",
        fetcher
    )

    const user: JaponUser = data?.data!

    if (user === undefined) {
        return <>LOADING...</>
    }

    return (
    <>
        <nav className="p-3 bg-dark-purple">
            <div className="flex items-center font-medium justify-around">
                <div className={`sm:text-xl md:text-2xl`}>
                    {user.familyName + " " + user.givenName + "のプロフィール"}
                </div>
                <div className="text-3xl md:hidden">
                    <div >
                        menu
                    </div>
                </div>
                <ul className='md:flex hidden uppercase items-center gap-8'>
                    <AccountMainNavMenu />

                </ul>

            </div>
        </nav>
        <div className="p-5">
          <div className="text-xl">
              {user.familyName + " " + user.givenName}
          </div>
          <div>
              {user.nickName}
          </div>
        </div>
        <div className="bg-dark-purple">
        <nav className="pl-3 flex flex-row">
            <ul className='md:flex'>
            {Menus.map((menu, index) =>(
                <Link key={menu.redirectUrl}  rel="icon" href={menu.redirectUrl} >
                  <li
                    key={menu.redirectUrl}
                    className={`ext-gray-300 text-sm flex items-center gap-x-4 cursor-pointer
                    p-2 hover:bg-light-white rounded-md ${pathName === menu.redirectUrl && 'bg-light-white'}`}>
                      <span className={`origin-left duration-200`}>{menu.title}</span>
                  </li>
                </Link>
            ))}
            </ul>
        </nav>
        </div>
        <div>
        { children }
        </div>
    </>

    )
}
