'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'This field has to be filled.' })
        .email('This is not a valid email.'),
    subject: z.string().min(3, {
        message: 'subject must be at least 3 characters.',
    }),
    message: z.string().min(20, {
        message: 'Message must be at least 20 characters.',
    }),
})

import { Card, CardContent } from '@/components/ui/card'
import { useLocale, useTranslations } from 'next-intl'
import { Textarea } from './ui/textarea'
import { sendMail } from '@/lib/send-mail'
import { useState } from 'react'
import Link from 'next/link'

export const ContactMe = () => {
    const t = useTranslations()
    const locale = useLocale()
    const [showMessage, setShowMessage] = useState<boolean>(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            subject: '',
            message: '',
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const { email, subject, message } = data
        const text = `Email: ${email}\n\nSubject: ${subject}\n\nMessage: ${message}`

        const response: any = await sendMail({
            email,
            subject,
            text,
        })

        if (response?.accepted !== undefined) {
            setShowMessage(true)
        }
    }

    return (
        <Card>
            <CardContent className="flex w-full justify-center">
                {showMessage && (
                    <div className="flex flex-col gap-5">
                        <div className="text-lg font-bold text-green-600 text-justify">
                            {t('contact-me.sended-email')}
                        </div>

                        <Button asChild>
                            <Link href={`/${locale}/`}>
                                {t('contact-me.back-home-page')}
                            </Link>
                        </Button>
                    </div>
                )}
                {!showMessage && (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className=" w-full space-y-6"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t('contact-me.email')}
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t('contact-me.subject')}
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t('contact-me.message')}
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                className="h-32"
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">
                                {t('contact-me.send')}
                            </Button>
                        </form>
                    </Form>
                )}
            </CardContent>
        </Card>
    )
}
