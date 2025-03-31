'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BACKEND, DEVOPS, FRONTEND } from '@/data'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { Avatar, AvatarImage } from './ui/avatar'

export const Skills = () => {
    const t = useTranslations()
    const stacks = [FRONTEND, BACKEND, DEVOPS]

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="text-md text-center md:text-2xl">
                        {t('competences.name')}
                    </CardTitle>
                </CardHeader>
            </Card>

            <div className="flex flex-wrap gap-3 w-full">
                {stacks.map((stack) => {
                    return (
                        <Card className="xl:flex-1 w-full" key={stack.name}>
                            <CardHeader>
                                <CardTitle className="text-md text-center md:text-xl">
                                    {stack.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <SkillsCard listSkills={stack} />
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

const SkillsCard = ({ listSkills }: any) => {
    const { theme } = useTheme()

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {listSkills?.items?.map((i: any) => {
                return (
                    <div
                        key={i.name}
                        className="flex flex-1 p-3 bg-accent text-nowrap flex-col gap-3 justify-center items-center rounded-md hover:bg-accent/80"
                    >
                        <p>{i.name}</p>
                        <Avatar className="rounded-md justify-center">
                            <AvatarImage
                                src={
                                    theme === 'light'
                                        ? i.imgDarkPath || i.imgPath
                                        : i.imgPath || i.imgDarkPath
                                }
                            />
                        </Avatar>
                    </div>
                )
            })}
        </div>
    )
}
