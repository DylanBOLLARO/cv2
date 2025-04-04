import { useTheme } from 'next-themes'
import { Avatar, AvatarImage } from './ui/avatar'

export const SkillsCard = ({ listSkills }: any) => {
    const { theme } = useTheme()

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {listSkills?.items?.map((i: any) => {
                return (
                    <div
                        key={i.name}
                        className="flex flex-1 p-3 bg-accent text-nowrap flex-col gap-3 justify-center items-center rounded-md hover:bg-accent/80"
                    >
                        <p className="text-muted-foreground">{i.name}</p>
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
