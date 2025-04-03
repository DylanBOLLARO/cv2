'use client'

import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useParams, useRouter } from 'next/navigation'

export default function Page() {
    const { projectDetails } = useParams() as { projectDetails: string }
    const { projectsExperience } = useParams() as { projectsExperience: string }
    const t = useTranslations()
    const router = useRouter()
    const locale = useLocale()

    return (
        <>
            <Card>
                <CardHeader className="flex relative flex-col sm:flex-row items-center justify-center gap-y-5">
                    <Button
                        className="sm:absolute ml-5 left-0 z-10 cursor-pointer"
                        onClick={() =>
                            router.push(
                                `/${locale}/experiences/${projectsExperience}`
                            )
                        }
                    >
                        <ChevronLeft />
                        Back
                    </Button>
                    <CardTitle className="text-md text-center md:text-2xl">
                        {t(
                            `experiences.${projectsExperience}.projects.${projectDetails}.name`
                        )}
                    </CardTitle>
                </CardHeader>
            </Card>
        </>
    )
}
