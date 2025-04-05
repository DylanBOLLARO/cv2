'use client'

import { HeaderCard } from '@/components/card-title'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { SkillsCard } from '@/components/skill-card'
import { skeleton } from '@/constants/skeleton'

export default function Page() {
    const { page } = useParams() as { page: string }
    const { projectDetails } = useParams() as { projectDetails: string }
    const { projectsExperience } = useParams() as { projectsExperience: string }

    const base_t = useTranslations()
    const intl_t = useTranslations(
        `${page}.${projectsExperience}.projects.${projectDetails}`
    )

    const router = useRouter()
    const locale = useLocale()

    return (
        <>
            <HeaderCard
                title={intl_t(`name`)}
                backButton={() =>
                    router.push(`/${locale}/${page}/${projectsExperience}`)
                }
            />

            <div className="flex gap-5 flex-col md:flex-row">
                <Image
                    className="bg-muted w-full rounded-xl md:max-w-sm"
                    src={
                        skeleton[page][projectsExperience].projects[
                            projectDetails
                        ]['image-source']
                    }
                    width={500}
                    height={500}
                    alt={
                        skeleton[page][projectsExperience].projects[
                            projectDetails
                        ]['image-alt']
                    }
                />
                <p className="text-lg flex-1 text-justify">
                    {intl_t(`description`)}
                </p>
            </div>

            <HeaderCard title={base_t(`developed-features`)} />

            {skeleton[page][projectsExperience].projects[projectDetails][
                'developed-features'
            ].map((key: any) => (
                <div key={key} className="flex items-center gap-x-5">
                    <div className="rounded-full w-3 h-3 bg-primary" />
                    <p className="text-lg flex-1 text-justify">
                        {intl_t(`developed-features.${key}`)}
                    </p>
                </div>
            ))}

            <HeaderCard title={base_t(`technologies-used`)} />

            <SkillsCard
                listSkills={
                    skeleton[page][projectsExperience].projects[projectDetails][
                        'technologies-used'
                    ].items
                }
                className={'xl:grid-cols-5'}
            />
        </>
    )
}
