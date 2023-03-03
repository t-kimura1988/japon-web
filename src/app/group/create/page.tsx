'use client'
import React, {useState, useEffect} from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { GroupDomain } from "@/internal-domain/GroupDomain";
import { useRouter } from "next/navigation";
import { JaponApiError } from "@/types/error/JaponApiError";

type Inputs = {
    groupName: string,
    publishLevel: string
}

const publishLevelOpts = [
    {key: '0', label: '非公開'},
    {key: '1', label: '公開'},
]

export default function GroupCreatePage () {

    // const [openPublishLevel, setOpenPublishLevel] = useState<Boolean>(false)
    const [serverErrMsg, setServerErrMsg] = useState<String | null>(null)

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors, isLoading, isSubmitting }
    } = useForm<Inputs>()

    const [loading, setLoading] = useState(false);

    const save: SubmitHandler<Inputs> = async (data) => {
        setLoading(true)
        
        try {
            var goalDomain = GroupDomain()
            var res = await goalDomain.createGoal({
                groupName: data.groupName,
                publishLevel: data.publishLevel
            })

            router.push("/home")

        } catch(e) {
            if(e instanceof JaponApiError) {
                setServerErrMsg(e.message)
            }

        } finally {
            setLoading(false)
        }
        
    }

    return(
        <div>
            <form 
                method="post"
                onSubmit={handleSubmit(save)}
                className="p-5"
            >
                <div>
                    {errors.groupName && <p>{errors.groupName.message}</p>}

                    <label key="group" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{isLoading}</label>
                    <input 
                        {...register('groupName', {
                            required: '集合名は必須です。',
                            maxLength: {value: 100, message: "100文字以内で"},
                            pattern: {value: /^[ぁ-ん一-龠]*$/, message: "日本語のみ"}
                        })}
                        type="text" 
                        id="group_name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="集会名" required></input>
                    
                    <div className="py-5">
                        <select {...register('publishLevel', {
                            validate: value => {
                                return publishLevelOpts.findIndex(item => item.key === value) != -1 ? true : 'ERROR'
                            }})}
                            className='dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 p-2 rounded-lg w-full'
                        >
                            {publishLevelOpts.map((item, i) => (
                                <option value={item.key} key={item.key}>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input 
                            disabled={loading}
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            value={"登録"}
                        >
                        </input>
                    </div>
                    {/* <button 
                        onClick={() => setOpenPublishLevel(!openPublishLevel)}
                        className="flex py-5 w-full text-center"
                        type="button"
                    >
                        
                        <AiFillCaretUp
                            className={`cursor-pointer -right-3 top-9 border-dark-purple  duration-200 ${openPublishLevel && "rotate-180"}` }
                        />
                        <span>公開レベル</span>
                    </button>
                    <div className={`absolute ${!openPublishLevel && 'hidden'} duration-200`}>
                        <ul className=" bg-violet-900 p-3.5">
                            <li className="p-2">
                                <span className="p-2">公開</span>
                            </li>
                            <li className="p-2">
                                <span className="p-2">非公開</span>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </form>
        </div>
    )
}