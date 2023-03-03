import { PostDomain } from "@/internal-domain/PostDomain";
import { useRouter } from "next/navigation";
import useSWR from "swr";


export const PostDetailCompose = (props:{groupId: string, postId: string}) => {
    const router = useRouter();
    var postDomain = PostDomain()
    
    async function fetcher() {
        return await postDomain.getPostDetail({groupId: props.groupId, postId: props.postId})
    }
  
    const {data , error} = useSWR(
      "http://localhost:3000/api/post/detail",
      fetcher
    )

    var res = data?.data!

    if(res === undefined) {
        return (
            <>NYA______</>
        )
    }

    return(
        <>
        <div
            key={res.postId}
            className="p-2  cursor-pointer"
        >
            <div>
                <div className="text-sm text-slate-400">
                    {res.groupTitle}
                </div>
                <div className="text-lg">
                    {res.postTitle}
                </div>
                <div className="text-slate-400 text-xs">
                    作成者：{res.postCreateUserFamilyName + " " + res.postCreateUserGivenName}
                </div>
                <div className="text-sm">
                    {res.postBody}
                </div>
            </div>
        </div>
        </>
    )
}