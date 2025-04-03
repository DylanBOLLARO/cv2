'use client'

import { BlogCard } from './blog-card'

export const BlogCardContainer = ({ list }: { list: any }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((data: any) => {
                return <BlogCard key={data.name} data={data} />
            })}
        </div>
    )
}
