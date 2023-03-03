
import {FaChevronDown, FaSignOutAlt} from "react-icons/fa";
import {AiTwotoneSetting} from "react-icons/ai"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export const AccountMainNavMenu = () => {
    const router = useRouter()

    const links = [
        {
            name: "setting",
            headTitle: <span className="md:text-sm">設定</span>,
            subMenu: true, 
            subLinks: [
                {
                    Header: "私",
                    subLink: [
                        {
                            name: "編集",
                            link: (
                                <>
                                    <button className="flex" onClick={() => {
                                        router.push("/account/edit")
                                    }}>
                                        <AiTwotoneSetting />
                                        <span className="px-2">更新</span>
                                    </button>
                                </>
                            )
                        },
                        {
                            name: "退出",
                            link: (
                                <>
                                    <button className="flex" onClick={() => {
                                    }}>
                                        <FaSignOutAlt />
                                        <span className="px-2">退出</span>
                                    </button>
                                </>
                            )
                        }
                    ]
                }

            ]
        },
        {
            name: "add",
            headTitle: <span className="md:text-sm">追加</span>,
            subMenu: true,
            subLinks: [
                {
                    Header: "私",
                    subLink: [
                        {
                            name: "グループ追加",
                            link: (
                                <>
                                    <button className="flex" onClick={() => {
                                        router.push("/group/create")
                                    }}>
                                        <AiTwotoneSetting />
                                        <span className="px-2">グループ</span>
                                    </button>
                                </>
                            )
                        },
                        {
                            name: "投稿",
                            link: (
                                <>
                                    <button className="flex" onClick={() => {
                                        router.push("/post/create")
                                    }}>
                                        <AiTwotoneSetting />
                                        <span className="px-2">投稿</span>
                                    </button>
                                </>
                            )
                        }
                    ]
                }

            ]
        }
    ]
    return(
        <>
            {
                links.map(link=>(
                    <div key={link.name}>
                        <div className="text-left md:cursor-pointer group">
                            <div className='flex text-inline'>
                                {link.headTitle}
                                <span className='pl-2'>
                                    <FaChevronDown size={20} className='text-sm group-hover:rotate-180' />
                                </span>

                            </div>
                            {link.subMenu && (
                                <div className="absolute top-25 hidden group-hover:md:block hover:md:block">
                                    <div className="py-3">
                                        <div className="w-4 h-4 left-3 absolute mt-1 bg-violet-900 rotate-45"></div>
                                    </div>
                                    <div className="bg-violet-900 p-3.5">
                                        <div className="border-b">
                                        {
                                            link.subLinks.map((subLinks)=>(
                                                <div key={subLinks.Header}>
                                                    {subLinks.subLink.map(slink=>(
                                                        <li key={slink.name} className="flex py-5">
                                                            {slink.link}
                                                        </li>
                                                    ))}
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
        </>
    )
}