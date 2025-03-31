import { BlogCard } from '@/components/blog-card'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

export default function Page() {
    const t = useTranslations()

    const dataExperiences = [
        {
            title: t('experiences.projet-ulysseus.name'),
            description: t('experiences.projet-ulysseus.description'),
            imageSrc: '/universite-cote-dazur.png',
            startDate: `01.05.2023`,
            endDate: t('experiences.projet-ulysseus.end-date'),
        },
    ]

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-2xl">
                        {t('experiences.name')}
                    </CardTitle>
                </CardHeader>
            </Card>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {dataExperiences.map((data) => {
                    return <BlogCard key={data.title} data={data} />
                })}
            </div>
        </>
    )
}
