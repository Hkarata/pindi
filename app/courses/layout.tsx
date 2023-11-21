'use client'
import React from "react";
import Image from "next/image";
import {BroadActivityFeed24Regular } from '@fluentui/react-icons';
import Link from "next/link";
export default function Layout({
    children,
                                        }:
                                            {
                                                children: React.ReactNode
                                            }){
    return(
        <main className="p-1 h-screen">
            <header className="flex flex-row items-center p-2 space-x-2 bg-white drop-shadow-md h-24 rounded">
                <Image src="/img.png" width={75} height={75} alt="App logo" className="rounded-full object-contain"/>
                <p className="uppercase font-semibold text-indigo-500 tracking-wide text-sm">Pindi Administrative App</p>
            </header>
            <div className="flex mt-2 space-x-2 min-h-[calc(100vh-115px)]">
                <div className="basis-1/6 bg-white rounded shadow-md p-2 overflow-hidden">
                    <Link href="/courses">
                        <BroadActivityFeed24Regular/>
                        Dashboard
                    </Link>
                </div>
                <div className="basis-5/6 bg-white rounded shadow-md overflow-hidden">
                    {children}
                </div>
            </div>
        </main>

    )

}