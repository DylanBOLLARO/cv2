import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

export const DlCvButton = ({ className }: any) => {
    const t = useTranslations()

    return (
        <Button asChild variant={'outline'} className={cn(className)}>
            <Link href={`/CV.pdf`} target="_blank">
                {t('cv')}
            </Link>
        </Button>
    )
}
