'use client'

import { AboutMe } from '@/components/about-me'
import { HeaderCard } from '@/components/card-title'
import { SkillCardContainer } from '@/components/skill-card-container'
import { BACKEND, DEVOPS, FRONTEND } from '@/data'
import { useTranslations } from 'next-intl'

export default function HomePage() {
    const t = useTranslations()

    return (
        <>
            <AboutMe />
            <HeaderCard title={t('competences.name')} />
            <SkillCardContainer skillsList={[FRONTEND, BACKEND, DEVOPS]} />
        </>
    )
}
