'use client'
import { AccountDomain } from "@/internal-domain/AccountDomain"
import { GroupDomain } from "@/internal-domain/GroupDomain";
import { useRouter } from "next/navigation";
import useSWR from "swr";

export const GroupDetailCompose = (props:{groupId: string}) => {

    const router = useRouter();
    var groupDomain = GroupDomain()
    
    async function fetcher() {
      return await groupDomain.getGroupDetail({groupId: props.groupId})
    }
  
    const {data , error} = useSWR(
      "http://localhost:3000/api/goal/detail",
      fetcher
    )
    

    return (
        <>
            <div className="p-5">
              <div className="text-2xl">
                {data?.data!.groupName}
              </div>
              <span className="text-slate-400 text-sm">
                現在参加者：{data?.data!.groupJoinNum}人
              </span>
              <div className="text-slate-400 text-sm">
                作成者：{data?.data!.groupCreateUserName}
              </div>
              <div className='py-2 text-xl'>
                {data?.data!.groupDetail}
              </div>
            </div>
        </>
    )
}
