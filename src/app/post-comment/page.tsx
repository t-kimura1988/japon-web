'use client'

import { PostCommentsCompose } from "@/components/post/PostCommentsCompose"
import { PostDetailCompose } from "@/components/post/PostDetailCompose"

export default function PostComment( { searchParams }: {
    searchParams: { groupId: string, postId: string },
  }) {

    return (
        <>
            
            <div
                className="p-1 divide-y border border-slate-800 cursor-pointer"
            >
                <PostDetailCompose groupId={searchParams.groupId} postId={searchParams.postId}/>
            </div>
            
            <PostCommentsCompose groupId={searchParams.groupId} postId={searchParams.postId}/>
        </>
    )
}