import { useTheme } from 'next-themes'
import { Avatar, AvatarImage } from './ui/avatar'
import { cn } from '@/lib/utils'

export const SkillsCard = ({ listSkills, className = '' }: any) => {
    const { theme } = useTheme()
    return (
        <div className={cn('grid grid-cols-2 md:grid-cols-3 gap-3', className)}>
            {listSkills?.map((i: any) => {
                return (
                    <div
                        key={i.name}
                        className="flex flex-1 p-3 bg-accent/20 hover:bg-accent/30 text-nowrap flex-col gap-3 justify-center items-center rounded-md"
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
