'use client'

import { useLocale, useTranslations } from 'next-intl'
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
import { DlCvButton } from './dl-cv-button'

export const Header = () => {
    const t = useTranslations()
    const locale = useLocale()

    const menu = [
        {
            name: `${t('about-me.name')}`,
            url: `/${locale}/`,
        },
        {
            name: `${t('portfolio.name')}`,
            url: `/${locale}/portfolio`,
        },
        {
            name: `${t('experiences.name')}`,
            url: `/${locale}/experiences`,
        },
        {
            name: `${t('education.name')}`,
            url: `/${locale}/education`,
        },
        {
            name: `${t('contact-me.name')}`,
            url: `/${locale}/contact-me`,
        },
    ]

    return (
        <div className="flex py-3 gap-3 px-5 md:px-20 border-b w-full">
            {/* Mobile Menu */}
            <div className="block 2xl:hidden">
                <div className="flex items-center justify-between">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size={'icon'}
                                className="flex"
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
                                <DlCvButton />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="flex-1 gap-10 items-center hidden 2xl:flex ">
                {menu.map((item) => {
                    return (
                        <Link
                            href={item.url}
                            key={item.name}
                            className="link-hover"
                        >
                            {item.name}
                        </Link>
                    )
                })}
            </div>

            <div className="flex gap-3 justify-end w-full ">
                <DlCvButton className="hidden md:flex" />
                <Button asChild variant={'outline'}>
                    <Link
                        href={
                            'https://www.linkedin.com/in/dylan-bollaro-b117301ab/'
                        }
                        target="_blank"
                    >
                        LinkedIn
                    </Link>
                </Button>

                <Button asChild variant={'outline'}>
                    <Link
                        href={'https://github.com/DylanBOLLARO/'}
                        target="_blank"
                    >
                        Github
                    </Link>
                </Button>
                <LangSelector className="hidden md:flex w-[140px]" />
                <ModeToggle />
            </div>
        </div>
    )
}

const renderMobileMenuItem = (item: any) => {
    return (
        <Link key={item.name} href={item.url} className="text-xl font-semibold">
            {item.name}
        </Link>
    )
}
