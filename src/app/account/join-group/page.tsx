'use client'
import { AccountMain } from '@/components/account/AccountMain'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AccountDomain } from '@/internal-domain/AccountDomain'
import useSWR from "swr";
import { Group } from '@/types/group/Group'
import Link from 'next/link'

export default function JoinGroupList( children : any) {
  const pathName = usePathname()
  const [groupList, setGroupList] = useState<Group[]>()
  var accountDomain = AccountDomain()
  const router = useRouter()

  async function fetcher() {
    return await accountDomain.getMyCreateGroup()
  }

  const {data , error} = useSWR(
    "http://localhost:3000/api/account/myGroup",
    fetcher
  )
  

  const handleGroupDetail = (group: Group) => {
    router.push("/group")
  }

  return (
    <AccountMain>
    {data?.data!.map((group, index) =>(
      <Link  
        key={group.groupId} 
        rel="icon" 
        href={{
          pathname: "/group",
          query: { groupId: group.groupId},
        }}>
      <div 
        key={group.groupId} 
        className="p-1 divide-y border-b border-slate-800 cursor-pointer"
        // onClick={() => {handleGroupDetail(group)}}
      >
        <div>
          <div className="text-lg">
            {group.groupName}
          </div>
          <span className="text-slate-400 text-sm">
            現在参加者：{group.groupJoinNum}人
          </span>
          <div className="text-slate-400 text-sm">
            作成者：{group.groupCreateUserName}
          </div>
          <div className='py-2'>
            {group.groupDetail}
          </div>
        </div>

      </div>
      </Link>
    ))}
    </AccountMain>
        
  )
}
