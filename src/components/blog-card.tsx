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
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export const BlogCard = ({ data, intl }: any) => {
    const base_t = useTranslations()
    const intl_t = useTranslations(intl)
    const locale = useLocale()

    return (
        <Card className={'w-full overflow-hidden'}>
            <div className="p-2">
                <Image
                    className="aspect-video bg-muted w-full rounded-lg"
                    src={data['image-source']}
                    alt={data['image-alt']}
                    width={500}
                    height={500}
                />
            </div>

            {data?.['badges'] && (
                <div className="flex items-center gap-3 px-6">
                    {data['badges'].map((badge: string, index: number) => (
                        <Badge key={index}>{badge}</Badge>
                    ))}
                </div>
            )}

            <CardHeader className="flex flex-col flex-grow">
                <CardTitle className="text-xl">{intl_t('name')}</CardTitle>
                <CardDescription className="flex-grow">
                    {intl_t('description')}
                </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-between text-nowrap gap-5">
                {(data['left-button-text'] || data['right-button-text']) && (
                    <>
                        {data['left-button-text'] && (
                            <Button
                                variant={'outline'}
                                className="flex shadow-none mx-auto flex-1"
                                asChild
                            >
                                {data['left-button-url'] ? (
                                    <Link
                                        href={data['left-button-url']}
                                        target="_blank"
                                        className="flex items-center gap-3"
                                    >
                                        {data['left-button-text']}
                                        <ChevronRight />
                                    </Link>
                                ) : (
                                    <span>
                                        {data['right-button']} <ChevronRight />
                                    </span>
                                )}
                            </Button>
                        )}

                        {data['right-button-text'] && (
                            <Button
                                className="flex shadow-none mx-auto flex-1"
                                asChild
                            >
                                {data['right-button-url'] ? (
                                    <Link
                                        href={data['right-button-url']}
                                        target="_blank"
                                        className="flex items-center gap-3"
                                    >
                                        {data['right-button-text']}
                                        <ChevronRight />
                                    </Link>
                                ) : (
                                    <span>
                                        {data['right-button-text']}
                                        <ChevronRight />
                                    </span>
                                )}
                            </Button>
                        )}
                    </>
                )}

                {(data['learn-more'] ||
                    data['start-date'] ||
                    data['end-date']) && (
                    <>
                        {data['learn-more'] && (
                            <Button
                                className="flex shadow-none mx-auto flex-1"
                                asChild
                            >
                                <Link
                                    href={`/${locale}/${data['learn-more-url']}`}
                                    className="flex items-center gap-3"
                                >
                                    {base_t('learn-more')} <ChevronRight />
                                </Link>
                            </Button>
                        )}
                        {(data['start-date'] || data['end-date']) && (
                            <div className="flex justify-end text-muted-foreground font-semibold flex-1">
                                {`${intl_t('start-date')}${data['end-date'] ? ` - ${intl_t('end-date')}` : ''}`}
                            </div>
                        )}
                    </>
                )}
            </CardFooter>
        </Card>
    )
}
