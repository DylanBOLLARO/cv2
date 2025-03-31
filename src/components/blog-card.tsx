import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export const BlogCard = ({ data }: any) => {
    return (
        <Card className="shadow-none overflow-hidden rounded-md h-full">
            <CardHeader className="p-0 px-1">
                <Image
                    className="aspect-video bg-muted w-full rounded-md"
                    src={data.imageSrc}
                    width={500}
                    height={500}
                    alt={data.title}
                />
            </CardHeader>
            <CardContent className="flex flex-col gap-5 h-full">
                {data?.badges && (
                    <div className="flex items-center gap-3">
                        {data?.badges?.map((badge: string, index: number) => (
                            <Badge key={index}>{badge}</Badge>
                        ))}
                    </div>
                )}

                <div className="flex flex-col flex-grow min-h-0">
                    <h3 className="text-[1.35rem] font-semibold tracking-tight">
                        {data.title}
                    </h3>
                    <p className="text-muted-foreground flex-grow">
                        {data.description}
                    </p>
                </div>

                {(data?.leftButton || data?.rightButton) && (
                    <div className="flex">
                        {data?.leftButton && (
                            <Button
                                variant={'secondary'}
                                className="flex mt-6 shadow-none mx-auto"
                            >
                                {data?.leftButton} <ChevronRight />
                            </Button>
                        )}
                        {data?.rightButton && (
                            <Button className="flex mt-6 shadow-none mx-auto">
                                {data?.rightButton} <ChevronRight />
                            </Button>
                        )}
                    </div>
                )}

                {(data?.startDate || data?.endDate) && (
                    <div className="flex justify-end text-muted-foreground font-semibold">
                        {`${data?.startDate}${data?.endDate ? ` - ${data?.endDate}` : ''}`}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
