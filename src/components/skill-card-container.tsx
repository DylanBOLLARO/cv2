import { SkillsCard } from './skill-card'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export const SkillCardContainer = ({ skillsList }: any) => {
    return (
        <div className="flex flex-wrap gap-3 w-full">
            {skillsList.map((stack: any) => {
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
    )
}
