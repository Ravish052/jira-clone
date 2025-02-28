
import DottedSeparator from '@/components/dotted-separator'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { z } from "zod"
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import Link from 'next/link'
import { registerSchema } from '../schemas'
import { useRegister } from '../api/useRegister'





const SignUpCard = () => {

    const {mutate} = useRegister()
    const form = useForm<z.infer<typeof registerSchema>>({
            resolver: zodResolver(registerSchema),
            defaultValues: {
                email: "",
                password: "",
                name : ""
            }
        })

    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        mutate({json :values})
    }

    return (
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className='flex items-center justify-center text-center p-7'>
                <CardTitle className=' text-2xl'>
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By Signing Up you agree to our
                    <Link href={"/terms"}>
                        <span className='text-blue-700'> Privacy Policy</span>
                    </Link>{" "}
                    And
                    <Link href={"/terms"}>
                        <span className='text-blue-700'> Terms of service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className='px-7 mb-2'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                        <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type={"text"}
                                            placeholder='Enter Your Name'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />



                        <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type={"text"}
                                            placeholder='Enter Your E-mail address'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            type={"password"}
                                            placeholder='Enter Password'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button disabled={false} size={"lg"} className='w-full' >
                            Sign Up
                        </Button>
                    </form>
                </Form>
            </CardContent>

            <div className='px-7 mb-2'>
                <DottedSeparator />
            </div>

            <CardContent className='p-7 flex flex-col gap-y-4'>
                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className='w-full'
                >
                    <FcGoogle className='mr-2 size-5' />
                    Sign up with google
                </Button>

                <Button
                    disabled={false}
                    variant={"secondary"}
                    size={"lg"}
                    className='w-full'
                >
                    <FaGithub className='mr-2 size-5' />
                    Sign up with github
                </Button>
            </CardContent>
            <div className='px-7'>
                <DottedSeparator />
            </div>
            <CardContent className='p-7 flex items-center  justify-center'>
                <p>
                    Already have an account ?
                    <Link href="/sign-in">
                        <span className='text-blue-700'>&nbsp;Log in</span>
                    </Link>
                </p>
                <DottedSeparator />
            </CardContent>
        </Card>


    )
}

export default SignUpCard