'use client'

import { GroupDetailCompose } from '@/components/group/GroupDetailCompose'
import { GroupPostsCompose } from '@/components/group/GroupPostsCompose'
import { useEffect, useState } from 'react'


export default function GroupPage( { searchParams }: {
    searchParams: { groupId: string },
  }) {

    return(
        <>
            <div
                className="p-1 divide-y border border-slate-800 cursor-pointer"
            >
                <GroupDetailCompose groupId={searchParams.groupId}/>
            </div>
            <div
                className="p-1 cursor-pointer"
            >
                <GroupPostsCompose groupId={searchParams.groupId} />
            </div>
        </>
    )
}