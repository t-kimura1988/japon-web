"use client"
import { JaponAuthContext } from "@/context/JaponAuthProvider";
import { AccountDomain } from "@/internal-domain/AccountDomain";
import { JaponApiError } from "@/types/error/JaponApiError";
import { registerVersion } from "firebase/app";
import { usePathname, useRouter } from 'next/navigation';
import React, {useContext, useEffect, useState} from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import styles from '../../page.module.css'

type Inputs = {
    familyName: string
    givenName: string
    nickName: string
}

export default function AccountCreate() {
    const auth = useContext(JaponAuthContext);

    const router = useRouter()

    const [serverErrMsg, setServerErrMsg] = useState<String | null>(null)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()

    useEffect(() => {
        console.log(auth)
    }, [])

    const save: SubmitHandler<Inputs> = async (data) => {
        try {
            var accountDomain = AccountDomain()
            var res = await accountDomain.createAccount({
                familyName: data.familyName,
                givenName: data.givenName,
                nickName: data.nickName
            })

            router.push("/")

        } catch(e) {
            if(e instanceof JaponApiError) {
                setServerErrMsg(e.message)
            }

        }
    }
    return(
        <>
            <div className="p-4 h-full">
                <div className="md:flex w-full h-full">
                    <div className="hidden md:inline-block basis-1/3"></div>
                    <div className="md:basis-1/3 w-full pt-px">
                        <form
                            className="shadow-md dark:bg-slate-800 rounded px-8 pt-6 pb-8 mb-4"
                            action="/api/account/save"
                            method="post"
                            onSubmit={handleSubmit(save)}
                        >
                            <div className="mb-4">

                            { serverErrMsg && <p>{serverErrMsg}</p>}
                            <label className="block dark:text-white text-gray-700 text-sm font-bold mb-2">
                                FamilyName
                            </label>
                            <input {...register('familyName', {
                                        required: 'NICKNAME IS REQUIRED',
                                        maxLength: {value: 100, message: "100文字以内で"},
                                        pattern: {value: /^[ぁ-ん一-龠]*$/, message: "日本語のみ"}
                                    })}
                                className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="familyName"
                                type="text"
                                placeholder="familyName"
                            />
                            { errors.familyName && <p>{errors.familyName?.message}</p>}
                            </div>
                            <div className="mb-6">
                                <label 
                                    className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
                                >
                                    Given Name
                                </label>
                                <input {...register('givenName', {
                                        required: 'GIVENNAME IS REQUIRED',
                                        maxLength: {value: 100, message: "100文字以内で"},
                                        pattern: {value: /^[ぁ-ん一-龠]*$/, message: "日本語のみ"}
                                    })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="givenName"
                                    type="text"
                                    placeholder="givenName"
                                />
                                { errors.givenName && <p>GIVEN NAME ERROR</p>}
                            </div>
                            <div className="mb-6">
                                <label 
                                    className="block dark:text-white text-gray-700 text-sm font-bold mb-2"
                                >
                                    Nick Name
                                </label>
                                <input {...register('nickName', {
                                        required: 'NICKNAME IS REQUIRED',
                                        maxLength: {value: 100, message: "100文字以内で"},
                                        pattern: {value: /^[ぁ-ん一-龠]*$/, message: "日本語のみ"}
                                    })}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    id="nickName"
                                    type="text"
                                    placeholder="nickName"
                                />
                                { errors.nickName && <p>{errors.nickName?.message}</p>}
                            </div>
                            <div className="flex items-center justify-between">
                                <button 
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                    type="submit"
                                >
                                    Sign In
                                </button>
                                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2020 Acme Corp. All rights reserved.
                        </p>
                    </div>
                    <div className="hidden md:inline-block md:basis-1/3"></div>
                </div>
            </div>
        </>
    )
}
