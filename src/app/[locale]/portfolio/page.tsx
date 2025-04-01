'use client'

import { BlogCard } from '@/components/blog-card'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations()

    const dataPortfolio = [
        {
            title: t('portfolio.overcraft.name'),
            description: t('portfolio.overcraft.description'),
            imageSrc: '/oc_main_page.png',
            badges: ['Frontend', 'Backend', 'DevOps'],
            leftButton: 'Github',
            rightButton: 'Overcraft',
            leftUrl: 'https://github.com/DylanBOLLARO/overcraft-deployment.git',
            rightUrl: 'https://overcraft.bollarodylan.fr/',
        },
        {
            title: t('portfolio.web-cv.name'),
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
            <Card>
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-2xl">
                        {t('portfolio.name')}
                    </CardTitle>
                </CardHeader>
            </Card>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {dataPortfolio.map((data) => {
                    return <BlogCard key={data.title} data={data} />
                })}
            </div>
        </>
    )
}
