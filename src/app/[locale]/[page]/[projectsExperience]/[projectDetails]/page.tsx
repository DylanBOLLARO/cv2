'use client'

import { HeaderCard } from '@/components/card-title'
import { SkillsCard } from '@/components/skill-card'
import { skeleton } from '@/constants/skeleton'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'

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

    const backButtonUrl = `/${locale}/${page}/${projectsExperience}`

    const projectsPath =
        skeleton[page][projectsExperience].projects[projectDetails]

    return (
        <>
            <HeaderCard
                title={intl_t(`name`)}
                backButton={() => router.push(backButtonUrl)}
            />

            <div className="flex gap-5 flex-col md:flex-row">
                <Image
                    className="bg-muted w-full rounded-xl md:max-w-sm"
                    src={projectsPath?.['image-source']}
                    width={500}
                    height={500}
                    alt={projectsPath['image-alt']}
                />
                <p className="text-lg flex-1 text-justify">
                    {intl_t(`description`)}
                </p>
            </div>

            {projectsPath['developed-features'].length > 0 && (
                <>
                    <HeaderCard title={base_t(`developed-features`)} />
                    {projectsPath['developed-features'].map((key: any) => (
                        <div key={key} className="flex items-center gap-x-5">
                            <div className="rounded-full w-3 h-3 bg-primary" />
                            <p className="text-lg flex-1 text-justify">
                                {intl_t(`developed-features.${key}`)}
                            </p>
                        </div>
                    ))}
                </>
            )}

            {projectsPath['technologies-used']?.items?.length > 0 && (
                <>
                    <HeaderCard title={base_t(`technologies-used`)} />
                    <SkillsCard
                        listSkills={projectsPath['technologies-used']?.items}
                        className={'xl:grid-cols-5'}
                    />
                </>
            )}
        </>
    )
}
