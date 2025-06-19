import { Header } from '@/components/header'
import { ThemeProvider } from '@/components/theme-provider'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import './globals.css'

import { GeistSans } from 'geist/font/sans'

export const metadata: Metadata = {
    title: 'Bollaro Dylan',
    description:
        'Mon Web CV est une application moderne et interactive développée avec Next.js, offrant une navigation fluide et une expérience optimisée grâce à une interface soignée et un mode sombre.',
    keywords:
        'développeur, full-stack, React, NestJS, web CV, portfolio, JavaScript, TypeScript',
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${GeistSans.variable} antialiased`}>
                <NextIntlClientProvider>
                    <ThemeProvider
                        themes={['cyberpunk', 'dark', 'light', 'vintage']}
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        storageKey={'cv-db'}
                    >
                        <Header />
                        <div className="flex flex-col container mx-auto p-5 gap-y-5">
                            {children}
                        </div>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
