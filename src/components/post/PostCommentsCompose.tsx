import { PostDomain } from "@/internal-domain/PostDomain";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useSWR from "swr";


export const PostCommentsCompose = (props:{groupId: string, postId: string}) => {
    const router = useRouter();
    var postDomain = PostDomain()
    
    async function fetcher() {
        return await postDomain.getPostComments({groupId: props.groupId, postId: props.postId})
    }
  
    const {data , error} = useSWR(
      "/api/post/comments",
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

        {data?.data!.map((item, index) =>(

            <Link
            key={item.commentId} 
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
                        <div className="text-slate-400 text-xs">
                            {item.commentUserName}
                        </div>
                        <div className="text-sm">
                            {item.comment}
                        </div>
                    </div>
                </div>
            </Link>
        ))}
        </>
    )
}