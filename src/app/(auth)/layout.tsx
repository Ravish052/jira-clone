import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface signInLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: signInLayoutProps) => {
    
    return (
        <main className='bg-neutral-100 min-h-screen' >
            <div className='mx-auto max-w-screen-2xl p-4'>
                <nav className='flex justify-between items-center'>
                    <Image src="/logo.svg" height={56} width={152} alt="logo" />
                    <Button variant={"secondary"}>
                        Sign UP
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