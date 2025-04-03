import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const BlogCard = ({ data }: any) => {
    return (
        <Card className={'w-full overflow-hidden'}>
            <div className="p-2">
                <Image
                    className="aspect-video bg-muted w-full rounded-lg"
                    src={data.imageSrc}
                    width={500}
                    height={500}
                    alt={data.name}
                />
            </div>

            {data?.badges && (
                <div className="flex items-center gap-3 px-6">
                    {data?.badges?.map((badge: string, index: number) => (
                        <Badge key={index}>{badge}</Badge>
                    ))}
                </div>
            )}

            <CardHeader className="flex flex-col flex-grow">
                <CardTitle className="text-xl">{data.name}</CardTitle>
                <CardDescription className="flex-grow">
                    {data.description}
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between text-nowrap gap-5">
                {(data?.leftButton || data?.rightButton) && (
                    <>
                        {data?.leftButton && (
                            <Button
                                variant={'outline'}
                                className="flex shadow-none mx-auto flex-1"
                                asChild
                            >
                                {data.leftUrl ? (
                                    <Link
                                        href={data.leftUrl}
                                        target="_blank"
                                        className="flex items-center gap-3"
                                    >
                                        {data?.leftButton} <ChevronRight />
                                    </Link>
                                ) : (
                                    <span>
                                        {data?.leftButton} <ChevronRight />
                                    </span>
                                )}
                            </Button>
                        )}

                        {data?.rightButton && (
                            <Button
                                className="flex shadow-none mx-auto flex-1"
                                asChild
                            >
                                {data.rightUrl ? (
                                    <Link
                                        href={data.rightUrl}
                                        target="_blank"
                                        className="flex items-center gap-3"
                                    >
                                        {data?.rightButton} <ChevronRight />
                                    </Link>
                                ) : (
                                    <span>
                                        {data?.rightButton} <ChevronRight />
                                    </span>
                                )}
                            </Button>
                        )}
                    </>
                )}

                {(data?.learnMore || data?.startDate || data?.endDate) && (
                    <>
                        {data?.learnMore && (
                            <Button
                                className="flex shadow-none mx-auto flex-1"
                                asChild
                            >
                                <Link
                                    href={data?.moreUrl}
                                    className="flex items-center gap-3"
                                >
                                    {data?.learnMore} <ChevronRight />
                                </Link>
                            </Button>
                        )}
                        {(data?.startDate || data?.endDate) && (
                            <div className="flex justify-end text-muted-foreground font-semibold flex-1">
                                {`${data?.startDate}${data?.endDate ? ` - ${data?.endDate}` : ''}`}
                            </div>
                        )}
                    </>
                )}
            </CardFooter>
        </Card>
    )
}
