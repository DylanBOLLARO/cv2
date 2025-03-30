'use client'

import { useTranslations } from 'next-intl'
import { LangSelector } from './lang-selector'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
export const Header = () => {
    const t = useTranslations()

    const menu = [
        {
            title: `${t('a-propos-de-moi.name')}`,
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
            title: `${t('diplomes-et-formations.name')}`,
            url: '/formations',
        },
    ]

    return (
        <div className="flex py-3 gap-3 px-5 md:px-20 border-b w-full">
            {/* Mobile Menu */}
            <div className="block lg:hidden">
                <div className="flex items-center justify-between">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                size={'icon'}
                                className="flex lg:hidden"
                                variant={'outline'}
                            >
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="overflow-y-auto pt-10">
                            <div className="flex flex-col gap-6 p-4">
                                {menu.map((item) => renderMobileMenuItem(item))}
                                <LangSelector />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <div className="flex-1 gap-10 items-center hidden lg:flex">
                <Link href="/" className="link-hover">
                    {t('a-propos-de-moi.name')}
                </Link>
                <Link href="/portfolio" className="link-hover">
                    {t('portfolio.name')}
                </Link>
                <Link href="/experiences" className="link-hover">
                    {t('experiences.name')}
                </Link>
                <Link href="/formations" className="link-hover">
                    {t('diplomes-et-formations.name')}
                </Link>
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
    if (item.items) {
        return (
            <>
                {item.items.map((subItem: any) => (
                    <SubMenuLink key={subItem.title} item={subItem} />
                ))}
            </>
        )
    }

    return (
        <Link
            key={item.title}
            href={item.url}
            className="text-md font-semibold"
        >
            {item.title}
        </Link>
    )
}

const SubMenuLink = ({ item }: { item: any }) => {
    return (
        <Link
            className="flex flex-row gap-5 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground items-center"
            href={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-sm leading-snug text-muted-foreground">
                        {item.description}
                    </p>
                )}
            </div>
        </Link>
    )
}
