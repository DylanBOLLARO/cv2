'use client'

import { skeleton } from '@/constants/skeleton'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { page } = useParams() as { page: string }
    const router = useRouter()
    const validePage = Object.keys(skeleton).includes(page)

    useEffect(() => {
        if (!validePage) router.push('/')
    }, [page, validePage, router])

    return <>{validePage && children}</>
}
