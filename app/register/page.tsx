'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

export default function Registration(){

    const navigate = useRouter();
    //onSubmit={handleSubmit(OnSubmit)}
    const {register, handleSubmit} = useForm();
    // const OnSubmit = async (data: any) =>{
    //     console.log(data);
    //     await axios.post("",data).then((res) =>{
    //         // if (res.data == ""){
    //         //     navigate.push("/dashboard")
    //         // }
    //
    //         console.log(res)
    //     }).catch((error) =>{
    //         console.log(error)
    //     })
    //}

    return(
        <main className="flex justify-center flex-col items-center h-screen">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="flex flex-col">
                    <div className="p-8">
                        <div className="p-8 border-indigo-500 rounded-xl border-2 w-50">
                            <div className="w-full flex flex-row justify-center items-center mb-4">
                                <Image src="/img.png" width={100} height={100} alt="App logo" className="rounded-full object-contain"/>
                            </div>


                            <div className="uppercase text-center tracking-wide text-sm text-indigo-500 font-semibold">Pindi Administrative App</div>
                            <div className="pt-8">
                                <form >
                                    <label className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Staff Number
                                    </label>
                                    <br/>
                                    <input className="mt-2 mb-4 p-1 border-amber-300 border-b outline-none font-semibold w-96"
                                           type="email" placeholder="admin@pindi.edu" required {...register("Email")}/>
                                    <br/>
                                    <label className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Name
                                    </label>
                                    <br/>
                                    <input className="mt-2 mb-4 p-1 border-amber-300 border-b outline-none font-semibold w-96"
                                           type="email" placeholder="admin@pindi.edu" required {...register("Email")}/>
                                    <br/>
                                    <label className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Email
                                    </label>
                                    <br/>
                                    <input className="mt-2 mb-4 p-1 border-amber-300 border-b outline-none font-semibold w-96"
                                           type="email" placeholder="admin@pindi.edu" required {...register("Email")}/>
                                    <br/>
                                    <label className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                        Phone
                                    </label>
                                    <br/>
                                    <input className="mt-2 mb-4 p-1 border-amber-300 border-b outline-none font-semibold w-96"
                                           type="password" placeholder="***************" required {...register("Password")}/>
                                    <br/>
                                    <input type="submit" value="Sign In"
                                           onClick={() => {navigate.push('/dashboard')}}
                                           className="hover:bg-green-500 bg-indigo-500 w-96 p-2 cursor-pointer text-white rounded uppercase tracking-wide text-sm font-semibold"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}