'use client'

import { BlogCardContainer } from '@/components/blog-card-container'
import { HeaderCard } from '@/components/card-title'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { ContactMe } from '@/components/contact-me'
import { skeleton } from '@/constants/skeleton'

export default function Page() {
    const { page } = useParams() as { page: string }
    const t = useTranslations(page)

    return (
        <>
            <HeaderCard title={t('name')} />
            <BlogCardContainer skeleton={skeleton[page]} intl={page} />

            {page === 'contact-me' && <ContactMe />}
        </>
    )
}
