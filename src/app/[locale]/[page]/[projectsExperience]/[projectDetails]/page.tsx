'use client'

import { HeaderCard } from '@/components/card-title'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import { skeleton } from '../../../../../../skeleton/skeleton'

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
                    className="bg-muted w-full rounded-xl md:flex-1"
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
                <p className="flex-2 text-lg">{intl_t(`description`)}</p>
            </div>

            {['project-objectives', 'main-features', 'technologies-used'].map(
                (item) => {
                    return (
                        <div>
                            <HeaderCard title={base_t(item)} />
                            {skeleton[page][projectsExperience].projects[
                                projectDetails
                            ][item].map((key: any) => (
                                <p key={key}>{intl_t(`${item}.${key}`)}</p>
                            ))}
                        </div>
                    )
                }
            )}
        </>
    )
}
