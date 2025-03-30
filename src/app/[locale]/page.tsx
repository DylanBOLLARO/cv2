import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HomePage() {
    const t = useTranslations()

    return (
        <div className="flex flex-col gap-y-5">
            <Card>
                <CardHeader>
                    <CardTitle className="text-center font-bold text-4xl md:text-5xl">
                        BOLLARO Dylan
                    </CardTitle>
                    <CardDescription className="text-xl text-center md:text-2xl">
                        {t('a-propos-de-moi.job')}
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="flex flex-col gap-5 md:flex-row">
                <Image
                    className="rounded-2xl border-2 p-1 min-w-[350px] self-center"
                    src="/me.jpg"
                    width={350}
                    height={350}
                    alt="Picture of the author"
                />
                <p className="text-justify text-2xl">
                    {`
                    Bonjour👋 J'ai 24 ans et je suis un développeur JavaScript
                    full-stack. Après avoir obtenu ma licence en systèmes
                    électroniques et informatiques, j'ai choisi de me
                    spécialiser dans le développement web. J'ai maintenant près
                    de deux ans d'expérience en tant que développeur JavaScript
                    full-stack !`}
                </p>
            </div>
        </div>
    )
}
