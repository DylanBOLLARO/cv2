'use client'

import { useTranslations } from 'next-intl'
import { LangSelector } from './lang-selector'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
export const Header = () => {
    const t = useTranslations()

    const menu = [
        {
            title: `${t('about-me.name')}`,
            url: '/',
        },
        {
            title: `${t('portfolio.name')}`,
            url: '/portfolio',
        },
        {
            title: `${t('experiences.name')}`,
            url: 'experiences',
        },
        {
            title: `${t('education.name')}`,
            url: '/education',
        },
        {
            title: `${t('contact-me.name')}`,
            url: '/contact-me',
        },
    ]

    return (
        <div className="flex py-3 gap-3 px-5 md:px-20 border-b w-full">
            {/* Mobile Menu */}
            <div className="block xl:hidden">
                <div className="flex items-center justify-between">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size={'icon'}
                                className="flex xl:hidden"
                                variant={'outline'}
                            >
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetTitle className="hidden"></SheetTitle>
                        <SheetContent
                            className="overflow-y-auto pt-10"
                            aria-describedby={''}
                        >
                            <div className="flex flex-col gap-6 p-4">
                                {menu.map((item) => renderMobileMenuItem(item))}
                                <LangSelector />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="flex-1 gap-10 items-center hidden xl:flex">
                {menu.map((item) => {
                    return (
                        <Link
                            href={item.url}
                            key={item.title}
                            className="link-hover"
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </div>
            <div className="flex gap-3 justify-end w-full ">
                <Button asChild variant={'outline'}>
                    <Link
                        href={`${process.env.NEXT_PUBLIC_LINKEDIN}`}
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                </Button>

                <Button asChild variant={'outline'}>
                    <Link
                        href={`${process.env.NEXT_PUBLIC_GITHUB}`}
                        target="_blank"
                    >
                        Github
                    </Link>
                </Button>
                <LangSelector className="hidden md:flex" />
                <ModeToggle />
            </div>
        </div>
    )
}

const renderMobileMenuItem = (item: any) => {
    return (
        <Link
            key={item.title}
            href={item.url}
            className="text-xl font-semibold"
        >
            {item.title}
        </Link>
    )
}
