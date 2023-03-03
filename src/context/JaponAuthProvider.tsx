
import { auth } from "@/config/FirebaseConfig";
import { updateCurrentUser } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { JaponAuth } from "../types/JaponAuth";
import { AccountDomain } from "../internal-domain/AccountDomain";
import { usePathname, useRouter } from 'next/navigation';
import { JaponUser } from "@/types/JaponUser";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { JaponApiError } from "@/types/error/JaponApiError";
import Loading from "@/app/loading";

export const JaponAuthContext = createContext<JaponAuth>({firebaseUser: undefined, japonUser: null, isLoading: false})

export const JaponAuthProvider = ({children}: any) => {

    const pathName = usePathname()
    const router = useRouter()
    
    const [japonUser, setJaponUser] = useState<JaponAuth>({firebaseUser: undefined, japonUser: null, isLoading: false})

    const isAvailableView = pathName === "/login"
    const isCreateUser = pathName === "/account/create"

    function getJaponAccount(): Promise<AxiosResponse<JaponUser | null>> {

        var accountDomain = AccountDomain()
        return accountDomain.getJaponAccount()
    }

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            !user && !isAvailableView && (router.push("/login"))
            japonUser.firebaseUser = user
            
            try {
                if(!isCreateUser) {
                    japonUser.isLoading = true
                    let res = await getJaponAccount()
                    japonUser.isLoading = false
                    japonUser.japonUser = res.data
                } else {
                    japonUser.isLoading = false
                }

                router.push(pathName!)
            } catch(e) {
                if(e instanceof JaponApiError) {
                    console.log(e.errorCd)
                    if("E0004" === e.errorCd) {
                        !isCreateUser && (router.push("/account/create"))
                    }
                }
                japonUser.isLoading = false
            } finally {
                setJaponUser(japonUser)
            }
        })
    }, [])

    return (
        <JaponAuthContext.Provider value={japonUser}>
            {children}
        </JaponAuthContext.Provider>
    )
}