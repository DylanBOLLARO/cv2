'use client'

import { BlogCardContainer } from '@/components/blog-card-container'
import { HeaderCard } from '@/components/card-title'
import { ProjectItem } from '@/types'
import { useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations()

    const projectsPortfolio: Array<ProjectItem> = [
        {
            name: t('portfolio.overcraft.name'),
            description: t('portfolio.overcraft.description'),
            imageSrc: '/oc_main_page.png',
            badges: ['Frontend', 'Backend', 'DevOps'],
            leftButton: 'Github',
            rightButton: 'Overcraft',
            leftUrl: 'https://github.com/DylanBOLLARO/overcraft-deployment.git',
            rightUrl: 'https://overcraft.bollarodylan.fr/',
        },
        {
            name: t('portfolio.web-cv.name'),
            description: t('portfolio.web-cv.description'),
            badges: ['Frontend', 'DevOps'],
            imageSrc: '/cv_main_page.jpg',
            leftButton: 'Github',
            rightButton: 'Web CV',
            leftUrl: 'https://github.com/DylanBOLLARO/cv2',
            rightUrl: 'https://cv.bollarodylan.fr/fr',
        },
    ]

    return (
        <>
            <HeaderCard title={t('portfolio.name')} />
            <BlogCardContainer list={projectsPortfolio} />
        </>
    )
}
