'use client'

import { useParams, useRouter } from 'next/navigation'
import { skeleton } from '../../../../skeleton'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { page } = useParams() as { page: string }
    const router = useRouter()
    const validePage = Object.keys(skeleton).includes(page)

    useEffect(() => {
        if (!validePage) router.push('/')
    }, [page])

    return <>{validePage && children}</>
}
