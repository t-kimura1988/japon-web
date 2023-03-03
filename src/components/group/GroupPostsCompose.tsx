'use client'
import { GroupDomain } from "@/internal-domain/GroupDomain";
import { PostDomain } from "@/internal-domain/PostDomain";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";

export const GroupPostsCompose = (props:{groupId: string}) => {

    const router = useRouter();
    const postDomain = PostDomain()
    
    async function fetcher() {
      return await postDomain.getPostOfGroup({groupId: props.groupId})
    }
  
    const {data , error} = useSWR(
      "http://localhost:3000/api/post/group-list",
      fetcher
    )

    return (
        <>
            <div>

            {data?.data!.map((item, index) =>(

                <Link  
                key={item.postId} 
                rel="icon" 
                href={{
                    pathname: "/post-comment",
                    query: { groupId: item.groupId, postId: item.postId},
                }}>
                    <div
                        key={item.postId}
                        className="p-1 divide-y border-b border-slate-800 cursor-pointer"
                    >
                        <div>
                            <div className="text-lg">
                                {item.postTitle}
                            </div>
                            <div className="text-slate-400 text-xs">
                                作成者：{item.postCreateUserFamilyName + " " + item.postCreateUserGivenName}
                            </div>
                            <div className="text-sm">
                                {item.postBody}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            </div>
        </>
    )
}