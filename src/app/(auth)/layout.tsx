"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface signInLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: signInLayoutProps) => {
    const pathName = usePathname()
    const iSignIn = pathName === "/sign-in"?"Sign-in":"sign-up"

    
    return (
        <main className='bg-neutral-100 min-h-screen' >
            <div className='mx-auto max-w-screen-2xl p-4'>
                <nav className='flex justify-between items-center'>
                    <Image src="/logo.svg" height={56} width={152} alt="logo" />
                    <Button asChild variant={"secondary"}>
                        <Link href = {pathName === "/sign-in" ? "/sign-up":"/sign-in"}>
                        {iSignIn ? "SignUp" : "Login"}
                        </Link>
                    </Button>
                </nav>
            </div>

            <div className='flex flex-col items-center justify-center pt-4 md:pt-4'>
                {children}
            </div>
        </main>

    )
}

export default AuthLayout