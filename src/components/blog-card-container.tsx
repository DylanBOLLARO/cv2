'use client'

import { BlogCard } from './blog-card'

export const BlogCardContainer = ({
    skeleton,
    intl,
}: {
    skeleton: any
    intl: string
}) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.keys(skeleton).map((slug: any) => {
                return (
                    <BlogCard
                        key={slug}
                        data={skeleton[slug]}
                        intl={`${intl}.${slug}`}
                    />
                )
            })}
        </div>
    )
}
